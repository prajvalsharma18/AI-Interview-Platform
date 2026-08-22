# AI Interview Platform

AI Interview Platform is a full-stack interview application that uses Generative AI to create personalized technical and HR interviews based on a candidate's resume, skills, experience, and target role.

The platform also includes voice-based interviews, AI-powered answer evaluation, performance analytics, PDF reports, and Razorpay integration for premium features.

**Live Demo:** https://ai-interview-platform-frontend-yrdu.onrender.com/
**GitHub:** https://github.com/prajvalsharma18/AI-Interview-Platform

## Features

### AI-Powered Interviews

* Generates technical and HR interview questions using LLMs
* Personalizes questions based on the candidate's resume and target role
* Supports adaptive interview difficulty
* Evaluates candidate responses using AI
* Provides scores, feedback, and performance insights

### Resume Processing

* Upload and parse resumes
* Extract skills, projects, education, and experience
* Convert resume information into a structured candidate profile
* Use the extracted profile for personalized interview generation

### Voice Interviews

* Text-to-speech for AI-generated questions
* Speech recognition for candidate responses
* Voice-based interview simulation
* AI evaluation of transcribed responses

### Performance Analytics

* Interview history
* Performance scores
* Question-level evaluation
* Detailed feedback
* PDF interview reports

### Authentication

* User registration and login
* Protected routes
* JWT-based authentication
* Firebase Authentication

### Admin Dashboard

* Platform-level analytics
* Interview statistics
* User insights

## Razorpay Integration

The platform uses Razorpay to provide premium features.

The payment workflow is handled through the backend to keep sensitive Razorpay credentials secure.

```text
User selects premium plan
        |
        v
Frontend sends payment request
        |
        v
Backend creates Razorpay order
        |
        v
Razorpay Checkout
        |
        v
User completes payment
        |
        v
Backend verifies payment signature
        |
        v
Premium access activated
```

The integration includes:

* Razorpay API integration
* Server-side order creation
* Razorpay Checkout
* Payment signature verification
* Payment response handling
* Premium feature activation
* Server-side secret management

## System Architecture

```text
React + Vite Frontend
          |
          | REST APIs
          v
   Express.js Backend
          |
    +-----+-----+------+
    |           |      |
    v           v      v
 MongoDB     LLM APIs Razorpay
    |           |
    |           v
    |      AI Generation
    |      and Evaluation
    |
    v
User & Interview Data
```

## Application Flow

```text
Registration / Login
        |
        v
Resume Upload
        |
        v
Resume Parsing
        |
        v
Candidate Profile
        |
        v
Target Role Selection
        |
        v
AI Interview Generation
        |
        v
Voice / Text Interview
        |
        v
AI Answer Evaluation
        |
        v
Performance Analytics
        |
        v
PDF Report
        |
        v
Premium Features
        |
        v
Razorpay Checkout
        |
        v
Payment Verification
        |
        v
Premium Access
```

## AI Evaluation

Candidate responses are evaluated using AI based on factors such as:

* Technical correctness
* Relevance
* Clarity
* Completeness
* Communication quality

The evaluation is converted into structured scores and feedback that can be used to identify areas for improvement.

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Redux Toolkit
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Authentication Middleware

### AI

* OpenRouter
* LLM APIs
* Resume Parsing
* Structured AI Evaluation
* Speech Recognition
* Text-to-Speech

### Payments and Services

* Razorpay
* Firebase Authentication
* PDF Processing

### Deployment

* Render
* MongoDB Atlas

## Production Deployment

The application is deployed on Render with separate frontend and backend services.

The production environment includes:

* React frontend
* Express.js backend
* MongoDB database
* LLM API integration
* Razorpay payment integration
* Environment-based secret management
* CORS configuration

The complete application is available at:

https://ai-interview-platform-frontend-yrdu.onrender.com/

## Engineering Challenges
### AI Integration

Designing prompts and structured responses for personalized question generation and consistent answer evaluation.

### Resume Processing

Converting unstructured resume data into a structured candidate profile that can be used by the interview-generation system.

### Voice Interaction

Handling speech recognition and text-to-speech while maintaining a smooth interview experience.

### Payment Integration

Implementing the complete Razorpay payment lifecycle, including order creation, checkout, payment response handling, and server-side signature verification.

### Production Deployment

Configuring frontend-backend communication, authentication, environment variables, database connectivity, AI APIs, Razorpay, and CORS for a live production environment.

## Why This Project

This project was built to explore how Generative AI can be integrated into a complete full-stack application rather than being used only as a standalone LLM feature.

It combines AI-powered interview generation and evaluation with resume processing, voice interaction, authentication, analytics, payment infrastructure, and cloud deployment.

The project also provides practical experience with integrating Razorpay into a production application, including order creation, checkout, server-side payment verification, and premium feature activation.

