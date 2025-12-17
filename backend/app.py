import joblib
from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np

app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
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


@app.post("/predict")
def predict(data: AssessmentInput):

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
