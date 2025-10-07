## 📘 **Project Overview**

**LearnLingo** is a web application developed for a company offering online lessons with language tutors.
The project is built with **React**, uses **Firebase** for backend functionality, **Redux Toolkit** for state management, and **Tailwind CSS** for a clean and modern UI.

The main goal of this project is to create an intuitive, interactive, and visually appealing application that allows users to:

- Find teachers by **language**, **student level**, and **price per hour**
- View detailed information about each teacher
- Save favorite teachers in the **“Favorites”** section
- **Book trial lessons** directly within the app
- Manage their personal profile after **authentication via Firebase**

---

## 🧩 **Page Structure**

### 🏠 **Home - "/"**

- Introduces the company’s mission and platform advantages
- Includes a **“Get Started”** button that redirects to the “Teachers” page
- Features a modern, animated design built with **Framer Motion** and **responsive layout**

### 👩‍🏫 **Teachers - "/teachers"**

- Displays a list of teachers with filtering options for:

  - **Language** — teaching language
  - **Level** — student proficiency level
  - **Price per hour** — hourly lesson rate

- Includes a **“Load more”** button that fetches additional teachers from Firebase
- Teacher cards expand with **“Read more”** to show details, experience, and reviews
- **“Book trial lesson”** button opens a booking modal with validation

### ❤️ **Favorites - "/favorites"**

- A **private page** available only to authenticated users
- Displays all teachers the user has marked as favorites
- Favorites are saved persistently via **localStorage** or **Firebase**

---

## 🔐 **Authentication Features**

- Registration, login, and logout via **Firebase Authentication**
- Form validation powered by **React Hook Form** and **Yup**
- Modal forms for authentication close when clicking outside the form or pressing `Esc`
- Retrieves current user data via the Firebase SDK

---

## 🎨 **UI and Design**

- Styled using **Tailwind CSS** for fast, flexible, and responsive design
- Includes a **Theme Selector** for switching between color themes
- Smooth UI animations powered by **Framer Motion**
- Fully **responsive layout** for mobile, tablet, and desktop screens

---

## ⚙️ **Tech Stack**

| Category             | Technologies                                        |
| -------------------- | --------------------------------------------------- |
| **Framework**        | React (Vite)                                        |
| **UI & Styling**     | Tailwind CSS                                        |
| **State Management** | Redux Toolkit                                       |
| **Form Validation**  | React Hook Form + Yup                               |
| **Backend**          | Firebase Authentication, Firebase Realtime Database |
| **Animations**       | Framer Motion                                       |
| **Routing**          | React Router DOM                                    |
| **Deployment**       | Vercel                                              |

---

## 🧠 **Key Features**

✅ Firebase Authentication
✅ Registration / Login / Logout
✅ Teacher filtering by language, level, and price
✅ Favorite teacher list (localStorage)
✅ Fully responsive UI
✅ Smooth animations with Framer Motion
✅ Realtime Database integration
✅ Modal forms with React Hook Form + Yup

---

## 🌟 **Why LearnLingo**

- 🎯 User-friendly interface and fast navigation
- 🧭 Easy search and filtering for ideal tutors
- 💬 Real reviews and teacher ratings
- 💡 Interactive animations and modern visuals
- 🔒 Secure authentication and data persistence
- 🖤 Personalized favorites section for quick access

---

## 👩‍💻 **Developer**

**Frontend Developer:** [Nelli Telunts](https://github.com/amurovnaa)

---

## 🌐 **Live Demo**

🔗 [View LearnLingo on Vercel](https://learnlingo-pet-project.vercel.app/)

---

## 🧾 **Project Summary**

**Type:** Web App (React + Firebase)
**Goal:** Create a platform for online language tutor discovery and booking
**Users:** Students, teachers, and company admins
**Implementation:** Full database integration, private routes, filtering, persistent favorites, animations, and responsive UI

---
