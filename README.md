# AI Email and Message Writer

**An AI-powered web application that helps users generate professional emails and messages quickly and effortlessly using Google Gemini AI.**

---

## 1. Project Title

**AI Email and Message Writer**

**Course:** CSE 4104 – Software Development III (Fall 2026)  
**Team:** CSE4104-7C-T05  
**Section:** 7C

AI Email and Message Writer is a web-based application designed to help users write clear, professional, and context-appropriate emails and short messages using Artificial Intelligence.

---

## 2. Team Information

This project is developed by a team of four members as part of the Software Development III course.

| No. | Team Member Name | Student ID | Role |
|:---:|---|:---:|---|
| 1 | Mahir Shahriar Mahi (Team Leader) | 11230321436 | Frontend Development |
| 2 | Radia Akhter Mim | 11230321490 | Backend Development |
| 3 | Tania Islam Eva | 11230321453 | Database Management |
| 4 | MD Awal Sheikh | 11240321772 | AI Integration |

---

## 3. Project Objectives

The main objectives of this project are:

- To generate complete emails and messages from short ideas.
- To allow users to customize messages by selecting purpose, tone, and length.
- To suggest suitable replies to received messages.
- To correct grammatical errors and improve users' existing drafts.
- To support Bangla and Banglish input for English message generation.
- To save generated drafts so users can access and reuse them later.
- To provide a simple, responsive, and user-friendly writing assistant.
- To help users communicate more professionally and confidently.

---

## 4. Features

The application will provide the following features:

### 4.1 User Authentication

- User registration with full name, email, and password.
- Secure login and logout functionality.
- Forgot password and password recovery through email.
- Secure access to private user accounts.

### 4.2 AI Message Writer

- Generate complete emails and short messages from simple ideas.
- Support both Email and Short Message generation.
- Automatically generate appropriate email subjects and message bodies.
- Allow users to edit generated content before copying.
- Copy generated messages with one click.
- Regenerate messages to receive alternative versions.
- Support ideas of up to 1000 characters.

### 4.3 Purpose, Tone, and Length Options

Users can customize generated messages according to their communication needs.

**Purpose:**
- Application
- Request
- Follow-up
- Complaint
- Apology
- Thank You
- Job Application

**Tone:**
- Formal
- Professional
- Friendly
- Persuasive

**Length:**
- Short
- Medium
- Detailed

### 4.4 Quick Refine

Users can improve generated messages using one-click options:

- Make Shorter
- More Formal
- Friendlier
- Fix Grammar

### 4.5 Smart Reply

- Users can paste a received email or message.
- Select their preferred reply tone.
- Generate 2–3 different reply suggestions.
- Select, edit, and copy suitable replies.

### 4.6 AI Proofreading

- Check spelling and grammatical errors.
- Improve sentence structure and clarity.
- Provide three proofreading levels:
  - Fix Mistakes Only
  - Fix and Improve
  - Rewrite Professionally
- Highlight changes in corrected text.
- Display a list of changes made to the original text.

### 4.7 Bangla and Banglish Input Support

- Allow users to express their ideas in Bangla or Banglish.
- Convert Bangla and Banglish input into polished English emails or messages.
- Help users who are not confident writing in English.

### 4.8 Draft History

- Save generated messages to personal history.
- View previously generated emails and messages.
- Search and filter saved drafts.
- Open, copy, and delete saved drafts.
- Permanently delete all personal draft history.

### 4.9 User Profile

- Maintain personal profile information.
- Save and update full name, designation, institution, ID, and phone number.
- Set default writing tone and output language.
- View and manage personal account information.

### 4.10 Admin Panel

- Provide a separate admin login and dashboard.
- View total registered users.
- Monitor the number of generated messages.
- View active users and failed AI requests.
- Monitor statistics for today, the last 7 days, and the last 30 days.
- Search registered users by name or email.
- Block, unblock, and delete user accounts.
- Monitor system activities and AI usage.

**Privacy:** Administrators can view usage statistics and counts but cannot read users' private message content.

---

## 5. Technology Stack

The project will use modern web technologies and AI integration tools to develop a reliable and responsive application.

| Category | Technology |
|---|---|
| Frontend | React.js |
| Backend | Node.js |
| Backend Framework | Express.js |
| Database | MongoDB |
| AI Integration | Google Gemini API |
| Frontend Deployment | Vercel |
| Backend Deployment | Render |
| Version Control | GitHub |

### Technology Overview

- **React.js:** Used to develop the interactive and responsive user interface.
- **Node.js:** Handles server-side operations and application logic.
- **Express.js:** Provides backend routing and API development.
- **MongoDB:** Stores user information, account details, and generated draft history.
- **Google Gemini API:** Powers AI-based message generation, smart replies, proofreading, and message refinement.
- **Vercel:** Used for frontend deployment.
- **Render:** Used for backend hosting and deployment.
- **GitHub:** Used for source code management and team collaboration.

---

## 6. Repository Structure

The project will follow a modular structure with separate frontend and backend directories to maintain clean, organized, and manageable code.

```text
AI-Email-and-Message-Writer/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── .env.example
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md
```

**Note:** This is the proposed repository structure. Additional files and folders may be added during development.

---

## Project Scope and Limitations

**In Scope:**
- Responsive web application for desktop and mobile browsers.
- User authentication and profile management.
- AI-powered message generation.
- Smart reply and proofreading.
- Bangla and Banglish input support.
- Draft history and management.
- Admin dashboard and user management.

**Out of Scope:**
- Direct email sending from the application.
- Direct Gmail or WhatsApp account integration.
- Dedicated Android or iOS mobile application.
- Voice-based message input.

Users will copy their generated messages and send them through their preferred communication applications.

---

**Developed as an academic project for CSE 4104 – Software Development III (Fall 2026).**
