import joblib
import numpy as np
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from jose import jwt, JWTError
from auth import hash_password, verify_password, create_access_token, SECRET_KEY, ALGORITHM


app = FastAPI()

# CORS
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Auth setup
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")
fake_db = {}

# Load your trained model
model = joblib.load("model.pkl")

# Scaling dictionary — scale 0–5 back to original ranges
SCALING = {
    "anxiety_level": 21,
    "self_esteem": 30,
    "depression": 27,
}

class AssessmentInput(BaseModel):
    anxiety_level: int
    self_esteem: int
    mental_health_history: int
    depression: int
    headache: int
    blood_pressure: int
    sleep_quality: int
    breathing_problem: int
    noise_level: int
    living_conditions: int
    safety: int
    basic_needs: int
    academic_performance: int
    study_load: int
    teacher_student_relationship: int
    future_career_concerns: int
    social_support: int
    peer_pressure: int
    extracurricular_activities: int
    bullying: int


def scale_up(value, max_original):
    """Scale 0–5 value to 0–max_original"""
    return (value / 5) * max_original

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload.get("sub")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

@app.post("/predict")
def predict(data: AssessmentInput, user: str = Depends(get_current_user)):
    print("User:", user)
    #SCALE UP ORIGINAL INPUTS
    anxiety = scale_up(data.anxiety_level, SCALING["anxiety_level"])
    esteem = scale_up(data.self_esteem, SCALING["self_esteem"])
    depression = scale_up(data.depression, SCALING["depression"])
    # scaled_bp = 1 + (data.blood_pressure / 3) * 2

    #ENGINEERED FEATURES 
    social_support_gap = data.peer_pressure - data.social_support
    health_issues = data.headache + data.blood_pressure + data.breathing_problem

    # FINAL FEATURE VECTOR (22 FEATURES)
    values = np.array([
        anxiety,                      # scaled
        esteem,                       # scaled
        data.mental_health_history,
        depression,                   # scaled
        data.headache,
        data.blood_pressure,
        data.sleep_quality,
        data.breathing_problem,
        data.noise_level,
        data.living_conditions,
        data.safety,
        data.basic_needs,
        data.academic_performance,
        data.study_load,
        data.teacher_student_relationship,
        data.future_career_concerns,
        data.social_support,
        data.peer_pressure,
        data.extracurricular_activities,
        data.bullying,
        social_support_gap,           # FE
        health_issues                 # FE
    ]).reshape(1, -1)

    prediction = model.predict(values)[0]

    return {"stress_level": int(prediction)}

class UserSignup(BaseModel):
    username: str
    password: str

class UserLogin(BaseModel):
    username: str
    password: str


@app.post("/signup")
def signup(data: UserSignup):
    if data.username in fake_db:
        raise HTTPException(status_code=400, detail="User exists")

    fake_db[data.username] = hash_password(data.password)
    return {"message": "User created"}

@app.post("/login")
def login(data: UserLogin):
    user = fake_db.get(data.username)

    if not user or not verify_password(data.password, user):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": data.username})
    return {"access_token": token}

