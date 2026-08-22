# 🤖 AI Interview Platform - https://ai-interview-platform-frontend-yrdu.onrender.com/

**AI Interview Platform** is a full-stack **GenAI-powered interview SaaS platform** that combines personalized AI interviews with a real-world **Razorpay payment infrastructure** for premium access.

The platform generates technical and HR interviews using a candidate's **resume, skills, experience, and target role**, while integrating **Razorpay APIs for order creation, checkout, payment verification, and premium feature activation**.

> **Core Focus:** GenAI + Razorpay API Integration + Full-Stack Engineering + Production Deployment

---

## 💳 Razorpay-Powered Premium Access

**Razorpay is a core part of the application's monetization and premium-access architecture.**

The platform integrates Razorpay directly into the frontend and backend to implement a complete payment workflow:

```text
User Selects Premium Plan
          ↓
Frontend → Backend Payment Request
          ↓
Backend Creates Razorpay Order
          ↓
Razorpay Checkout
          ↓
User Completes Payment
          ↓
Payment Details Returned
          ↓
Backend Verifies Payment
          ↓
Premium Access Activated
```

### Razorpay Integration

* 🔗 Razorpay API integration
* 🧾 Server-side order creation
* 💳 Razorpay Checkout integration
* 🔐 Payment signature verification
* ⚙️ Backend payment handling
* ⭐ Premium feature activation
* 🔒 Server-side secret management
* ☁️ Razorpay integration in live production environment

> **Engineering Focus:** The payment flow is handled through the backend, keeping Razorpay secret credentials server-side and preventing sensitive keys from being exposed to the client.

---

## 🚀 Live Production Application

The application is **deployed and running on Render**, with the frontend and backend connected in a live production environment.

**Live Demo:**
https://ai-interview-platform-frontend-yrdu.onrender.com/

**GitHub Repository:**
https://github.com/prajvalsharma18/AI-Interview-Platform

### Complete Production Flow

```text
Authentication
      ↓
Resume Upload
      ↓
AI Profile Extraction
      ↓
Personalized AI Interview
      ↓
Voice / Text Responses
      ↓
AI Answer Evaluation
      ↓
Analytics & PDF Report
      ↓
Razorpay Payment
      ↓
Premium Feature Access
```

---

## 🎯 Problem Statement

Traditional mock interview platforms provide generic questions that do not account for a candidate's actual skills, projects, experience, or target role.

This platform addresses the problem using **AI-driven personalization**.

Resume information is converted into a structured candidate profile, which is then used to generate relevant technical and HR questions and evaluate candidate responses.

The platform also demonstrates how an AI product can be connected to a **real payment infrastructure** to support premium SaaS functionality.

---

## 🧠 AI Capabilities

### Resume Intelligence

* Resume upload and parsing
* Extraction of skills, projects, experience, and education
* Structured candidate profile generation

### Personalized Interview Generation

* Role-specific technical questions
* Resume-aware questions
* HR and behavioral questions
* Dynamic interview flow
* Adaptive difficulty

### AI Answer Evaluation

Candidate responses are evaluated using AI based on:

* Technical correctness
* Relevance
* Clarity
* Completeness
* Communication quality

The evaluation results are converted into structured scores and performance insights.

### 🎙️ Voice Interviewing

```text
AI Question
     ↓
Text-to-Speech
     ↓
Candidate Voice Response
     ↓
Speech Recognition
     ↓
AI Evaluation
     ↓
Score + Feedback
```

---

# 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │      React Client    │
                    │  Vite + Tailwind CSS │
                    └──────────┬───────────┘
                               │
                     REST API / Payment
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Express Backend    │
                    │      REST APIs       │
                    └──────┬─────┬─────┬───┘
                           │     │     │
              ┌────────────┘     │     └────────────────┐
              ▼                  ▼                      ▼
        ┌───────────┐      ┌───────────┐        ┌────────────┐
        │ MongoDB   │      │ LLM APIs  │        │  Razorpay  │
        │           │      │           │        │    APIs    │
        └───────────┘      └───────────┘        └────────────┘
                               │
                               ▼
                       AI Generation &
                       Evaluation Layer
```

---

# ✨ Key Features

### 🤖 AI

* AI-generated technical & HR interviews
* Resume-based personalization
* AI answer evaluation
* Adaptive interview difficulty
* Voice-based interview simulation

### 💳 Razorpay

* Razorpay API integration
* Order creation
* Razorpay Checkout
* Payment verification
* Premium access management

### 📊 Platform

* Resume parsing
* Candidate profiling
* Interview history
* Performance analytics
* PDF report generation
* Authentication & protected routes

### ☁️ Production

* Live Render deployment
* Frontend + backend production environment
* External database integration
* Environment-based secret management

---

# 🛠️ Tech Stack

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
* JWT / Authentication Middleware

### AI

* OpenRouter
* LLM APIs
* Resume Parsing
* Structured AI Evaluation
* Speech Recognition
* Speech Synthesis

### Payment & Services

* **Razorpay APIs**
* Firebase Authentication
* PDF Processing

### Deployment

* Render
* MongoDB Atlas / External MongoDB

---

# 🔄 Complete User Flow

```text
1. Registration / Login
          ↓
2. Resume Upload
          ↓
3. Resume Parsing
          ↓
4. Candidate Profile Creation
          ↓
5. Target Role Selection
          ↓
6. AI Interview Generation
          ↓
7. Voice / Text Interview
          ↓
8. AI Answer Evaluation
          ↓
9. Performance Analytics
          ↓
10. PDF Report
          ↓
11. Premium Features
          ↓
12. Razorpay Checkout
          ↓
13. Payment Verification
          ↓
14. Premium Access
```

---

# 🧩 Engineering Challenges

### 🤖 AI Integration

Designing structured prompts and reliable AI responses for personalized question generation and answer evaluation.

### 📄 Resume Processing

Converting unstructured resume information into structured candidate data that can drive the interview-generation pipeline.

### 🎙️ Voice Interaction

Handling speech recognition and speech synthesis while maintaining a smooth interview experience.

### 💳 Razorpay Payment Integration

Implementing the complete frontend-to-backend payment lifecycle, including **order creation, Razorpay Checkout, payment response handling, and server-side payment verification**.

### ☁️ Production Deployment

Configuring frontend/backend communication, CORS, authentication, environment variables, database connectivity, AI APIs, and Razorpay services for a live Render deployment.

---

# ☁️ Production Deployment

The application is **fully deployed and operational on Render**.

```text
                    Production
                        │
             ┌──────────┴──────────┐
             ▼                     ▼
       React Frontend        Express Backend
          Render                  Render
                                   │
              ┌────────────────────┼────────────────────┐
              ▼                    ▼                    ▼
           MongoDB              LLM APIs            Razorpay
                                                     APIs
```

The production application supports the complete end-to-end workflow from **authentication and resume processing to AI interview generation, evaluation, reporting, and Razorpay-powered premium access**.

---

# 📌 Why This Project?

This project demonstrates the ability to build and deploy a **real-world AI SaaS application** rather than a standalone LLM prototype.

It combines:

**GenAI → REST APIs → MongoDB → Authentication → Voice AI → Razorpay Payment Infrastructure → Cloud Deployment**

Most importantly, the project demonstrates practical experience integrating **Razorpay APIs into a live full-stack application**, including the backend payment workflow and premium-access logic.

---

# 🔮 Future Improvements

* Multi-language interviews
* Real-time AI interviewer
* Advanced candidate benchmarking
* Job-description-aware interview generation
* More sophisticated evaluation metrics
* Interview recommendation engine
* Admin analytics dashboard
* Automated interview difficulty adaptation

---

# 📄 License

MIT
