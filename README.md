# Zenness

Zenness is a full-stack mental health assessment web application designed to promote mental health awareness and self-reflection. The application allows users to complete a short engaging assessment, sends the responses to a backend service, and provides personalized feedback based on machine learning predictions.

This project is developed as a college-level mini project and is intended for educational and awareness purposes only. It is not a medical or diagnostic tool.

---

## Features

* Mental health self-assessment questionnaire
* Backend-powered prediction using a trained machine learning model
* Classification of mental health levels (Normal, Moderate, Severe)
* Personalized recommendations based on assessment results
* Clean, minimal, and responsive user interface

---

## Tech Stack

### Frontend

* Next.js (React framework)
* TypeScript
* CSS / Tailwind CSS
* Framer Motion (animations)

### Backend

* FastAPI (Python)
* Machine Learning model stored as a `.pkl` file

---

## Application Flow

1. The user accesses the home page of the application.
2. The user starts the mental health assessment.
3. The user answers a set of predefined questions.
4. The frontend sends the responses to the FastAPI backend through a REST API.
5. The backend processes the input using a trained machine learning model.
6. The prediction result is returned to the frontend.
7. The application displays the mental health level along with relevant recommendations.

---

## Project Structure

```
root/
├── app/                # Next.js App Router pages
├── components/         # Reusable UI components
├── backend/            # FastAPI backend
│   ├── app.py          # API endpoints
│   └── model.pkl       # Trained ML model
├── public/             # Static assets
├── .gitignore
├── next.config.mjs
├── package.json
└── README.md
```

---

## Setup Instructions

### Frontend

```bash
npm install
npm run dev
```

The frontend will run at `http://localhost:3000`.

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

The backend will run at `http://localhost:8000`.

---

## Academic Purpose

This project demonstrates:

* Full-stack web application development
* Integration of machine learning models into web applications
* REST API communication between frontend and backend
* Practical application of mental health awareness systems

---

## Future Enhancements

* User authentication and profiles
* Database integration for storing assessment history
* Improved machine learning model accuracy
* Advanced analytics and dashboards

---

## Disclaimer

This application is intended solely for educational and self-awareness purposes. It does not replace professional mental health diagnosis or treatment.

---

## Author

Developed by
Ark Gupta
IIIT NAGPUR
