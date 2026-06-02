# Resume Builder 🚀

A modern, highly-responsive, and ATS-friendly Resume Builder application built with the MERN stack. Craft your dream resume in minutes with real-time live previews, dynamic templates, and a built-in Applicant Tracking System (ATS) checker.

## ✨ Features

- **Real-Time Live Preview**: Watch your resume compile instantly as you type.
- **Multiple Professional Templates**: Switch between Modern, Creative, and Classic designs with a single click.
- **Built-in ATS Checker**: Instantly evaluate your resume against industry standards (Completeness, Quantifiable Results, Action Verbs, and Length) to ensure it passes automated hiring filters.
- **Google OAuth Integration**: Fast and secure login/signup using Google accounts.
- **Instant PDF Export**: Download your finished resume directly as a print-ready, high-quality PDF.
- **Cloud Saving**: Securely save your progress to a MongoDB database and access your resumes from anywhere.

## 🌐 Live Demo

- **Frontend (Live App)**: [https://resume-builder-buwcewqqv-skauumraarv2003s-projects.vercel.app](https://resume-builder-buwcewqqv-skauumraarv2003s-projects.vercel.app)
- **Backend API**: [https://resume-builder-backend-hmzy.onrender.com](https://resume-builder-backend-hmzy.onrender.com)

## 🛠️ Technology Stack

- **Frontend**: React.js (Vite), CSS3, Lucide-React for crisp icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT (JSON Web Tokens) & Google OAuth2
- **Version Control**: Git & GitHub

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [Git](https://git-scm.com/)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB server)

### 1. Clone the repository

```bash
git clone https://github.com/SauravKumar2503/ResumeBuilder.git
cd ResumeBuilder
```

### 2. Set up the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your secret credentials:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```
   *The server should now be running on http://localhost:5000*

### 3. Set up the Frontend

1. Open a new terminal window and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend should now be running on http://localhost:5173*

### 4. Run the Application
Open your browser and navigate to `http://localhost:5173`. You can now sign up, log in, and start building your resume!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
