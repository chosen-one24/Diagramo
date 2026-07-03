<div align="center">

<img src="./assets/logo.png" width="120"/>

# Diagramo

### AI-Powered Collaborative Whiteboard for Modern Teams

Design. Collaborate. Generate. Summarize.

Real-time collaborative whiteboard powered by Google Gemini AI.

<br/>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io)
![Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?style=for-the-badge&logo=google)

</div>

---

# ✨ Overview

Diagramo is an AI-powered collaborative whiteboard built for developers, students, designers, and teams.

Create diagrams together in real time, communicate through integrated chat, generate complete diagrams using AI prompts, and instantly convert an entire whiteboard into beautifully formatted Markdown summaries.

Whether you're designing ER diagrams, flowcharts, system architecture, UML diagrams, or brainstorming ideas, Diagramo provides a fast and intelligent collaborative workspace.

---

# 🚀 Features

## 🎨 Whiteboard

- Freehand Drawing
- Rectangle
- Circle
- Arrow
- Straight Line
- Text Tool
- Color Picker
- Stroke Width
- Undo / Redo
- Download Canvas
- Theme Support

---

## 🤝 Collaboration

- Real-time Whiteboard
- Multi-user Collaboration
- Live Cursor Synchronization
- Room Based Sessions
- Online Users Panel
- Real-time Chat

---

## 🤖 AI Features

- Generate Complete Diagrams from Natural Language
- AI Generated Flowcharts
- ER Diagram Generation
- UML Diagram Generation
- Architecture Diagram Generation
- Whiteboard Summarization
- Beautiful Markdown Rendering
- Generation History
- Summary History

---

## 👤 User Features

- Authentication
- Protected Routes
- Dashboard
- Recent Rooms
- My Rooms
- User Profile
- Leave Room

---
# 🖼 Screenshots

## 🌐 Landing Page

<p align="center">
  <img src="./assets/screenshots/landing-page.png" alt="Landing Page" width="100%">
</p>

<p align="center">
  <img src="./assets/screenshots/landing-2.png" alt="Landing Page Features" width="100%">
</p>

<p align="center">
  <img src="./assets/screenshots/landing-3.png" alt="Landing Page CTA" width="100%">
</p>

---

## 🔐 Authentication

### Login

<p align="center">
  <img src="./assets/screenshots/login.png" alt="Login Page" width="80%">
</p>

### Register

<p align="center">
  <img src="./assets/screenshots/register.png" alt="Register Page" width="80%">
</p>

---

## 📊 Dashboard

<p align="center">
  <img src="./assets/screenshots/dashboard.png" alt="Dashboard" width="100%">
</p>

---

## 📁 My Rooms

<p align="center">
  <img src="./assets/screenshots/my-rooms.png" alt="My Rooms" width="100%">
</p>

---

## 👤 Profile

<p align="center">
  <img src="./assets/screenshots/profile.png" alt="Profile" width="80%">
</p>

---

## 🎨 Collaborative Whiteboard (Light Theme)

<p align="center">
  <img src="./assets/screenshots/whiteboard-light.png" alt="Whiteboard Light Theme" width="100%">
</p>

---

## 🌙 Collaborative Whiteboard (Dark Theme)

<p align="center">
  <img src="./assets/screenshots/whiteboard-dark.png" alt="Whiteboard Dark Theme" width="100%">
</p>

---

## 🤖 AI Diagram Generation

<p align="center">
  <img src="./assets/screenshots/collabration.png" alt="AI Diagram Generation" width="100%">
</p>

---

## 📝 AI Summary

<p align="center">
  <img src="./assets/screenshots/ai-summary.png" alt="AI Summary" width="100%">
</p>

---

## 💬 Real-Time Chat

<p align="center">
  <img src="./assets/screenshots/chat.png" alt="Chat" width="100%">
</p>

---

## 🤝 Multi-User Collaboration

<p align="center">
  <img src="./assets/screenshots/collabration.png" alt="Real-Time Collaboration" width="100%">
</p>


# 🛠 Tech Stack

## Frontend

- React
- Vite
- TailwindCSS
- React Router
- Context API
- React Markdown
- Lucide React
- Rough.js

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Socket.IO
- Cloudinary

---

## AI

- Google Gemini API

---

# 🏗 Architecture

## Backend (MVC + Service Layer)

```
backend/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── app.js
└── server.js
```

Responsibilities

- Controllers → Handle HTTP Requests
- Services → Business Logic
- Models → MongoDB Schemas
- Routes → API Endpoints
- Middleware → Authentication & Validation

---

## Frontend (Feature-Based 4-Layer Architecture)

```
frontend/src
│
├── components/
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── room/
│   ├── whiteboard/
│   ├── chat/
│   ├── ai/
│   └── home/
│
├── utils/
├── App.jsx
└── app.routes.jsx
```

Each feature follows

```
feature
│
├── components
├── hooks
├── services
└── Context
```

This architecture keeps features modular, scalable, and easy to maintain.

---

# 📂 Folder Structure

```
Diagramo
│
├── assets
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── app.js
│   └── server.js
│
├── frontend
│   ├── src
│   │
│   ├── components
│   ├── features
│   ├── utils
│   ├── App.jsx
│   └── app.routes.jsx
│
└── README.md
```

---

# ⚙ Environment Variables

## Backend

Create a `.env` file inside the `backend` directory.

```env
PORT=3000

MONGO_URI=

JWT_SECRET=

GEMINI_API_KEY=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Diagramo.git
```

```bash
cd Diagramo
```

---

### Backend

```bash
cd backend
npm install
```

Create

```
backend/.env
```

Start server

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
```

Start Vite

```bash
npm run dev
```

---

# 🔥 Running the Application

Backend

```
http://localhost:3000
```

Frontend

```
http://localhost:5173
```

---

# 🌟 Highlights

- AI-assisted whiteboard
- Real-time collaboration
- Feature-based frontend architecture
- MVC backend architecture
- Clean scalable codebase
- Modern responsive UI
- Dark & Light Theme
- Markdown rendering
- Socket.IO synchronization
- Google Gemini Integration

---

# 📈 Future Improvements

- Version History
- Board Templates
- Image Upload
- Voice Collaboration
- Sticky Notes
- Export to PDF
- Comments
- Board Permissions
- Cursor Presence
- Infinite Canvas
- Board Sharing

---

# 🤝 Contributing

Contributions, feature requests, and suggestions are welcome.

Feel free to fork the repository and submit a pull request.

---

# 📄 License

This project is licensed under the MIT License.

---

<div align="center">

### Built with ❤️ using React, Node.js, MongoDB, Socket.IO & Google Gemini

**Diagramo © 2026**

</div>