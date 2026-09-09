# 🎉 Event Management System

A full-stack **Event Management System** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). The platform supports **four distinct user roles** — Admin, Organizer, Vendor, and User — each with dedicated dashboards, permissions, and workflows for managing events, stalls, bookings, and payments.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Roles & Features](#roles--features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [API Overview](#api-overview)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Author](#author)
- [License](#license)

---

## 📖 About the Project

This project is a **role-based Event Management platform** developed as a final year project. It allows organizers to create and manage events, vendors to register and manage stalls within those events, users to browse and book events/stalls, and admins to oversee and control the entire platform.

The system focuses on:

- Secure, role-based authentication and authorization
- Seamless event and stall booking workflow
- Integrated payment processing
- Clean, responsive UI built with React.js

---

## 👥 Roles & Features

### 🛠️ Admin

- Manage all users, organizers, and vendors (approve/block/delete)
- Monitor and moderate all events and stalls on the platform
- View platform-wide analytics (bookings, revenue, active events)
- Handle disputes/reports and maintain platform integrity

### 🎪 Organizer

- Create, update, and delete events
- Define event details (date, venue, category, capacity, description)
- Manage stall slots available within an event
- Approve or reject vendor stall requests
- Track bookings and revenue for their own events

### 🏪 Vendor

- Register and create a vendor profile
- Browse events and apply for available stalls
- Manage stall details (products/services offered, pricing)
- Track stall booking status and payment history

### 👤 User

- Register/login and browse upcoming events
- View event details and available stalls
- Book event tickets and/or stalls
- Make secure online payments
- View booking history and download tickets/invoices

### 🔐 Common Features

- **Role-based access control (RBAC)** — each role has a dedicated dashboard and restricted routes/APIs
- **JWT-based authentication** with protected routes
- **Secure payment gateway integration**
- **Responsive UI** across devices

---

## 💻 Tech Stack

**Frontend:**

- React.js
- React Router DOM
- Axios
- Tailwind CSS / CSS3

**Backend:**

- Node.js
- Express.js
- JWT (JSON Web Token) for authentication
- bcrypt.js for password hashing

**Database:**

- MongoDB (Mongoose ODM)

**Payments:**

- Razorpay / Stripe (integration-ready)

**Other Tools:**

- Postman (API testing)
- Git & GitHub (version control)

---

## 🏗️ System Architecture

```
Client (React.js)  <--->  REST API (Express.js/Node.js)  <--->  MongoDB (Mongoose)
        |                          |
   Role-based UI          JWT Auth Middleware
   (Admin/Organizer/            |
    Vendor/User)         Role-based Route Guards
```

- Each API route is protected using middleware that checks the JWT and the user's role.
- Frontend uses protected routes (`PrivateRoute` / `RoleBasedRoute`) to render dashboards according to the logged-in user's role.

---

## 📂 Folder Structure

```
event-management-system/
│
├── backend/
│   ├── config/            # DB connection, environment configs
│   ├── controllers/       # Business logic (auth, events, stalls, bookings, payments)
│   ├── middleware/        # Auth & role-based access middleware
│   ├── models/            # Mongoose schemas (User, Event, Stall, Booking, Payment)
│   ├── routes/            # Express routes for each module
│   ├── utils/             # Helper functions
│   ├── server.js          # Entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Role-based pages (Admin, Organizer, Vendor, User)
│   │   ├── context/        # Auth context / global state
│   │   ├── routes/         # Protected & role-based routes
│   │   ├── services/       # Axios API calls
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/event-management-system.git
cd event-management-system
```

### 2. Setup Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm start
```

### 4. Open the app

Visit `http://localhost:3000` in your browser.

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PAYMENT_GATEWAY_KEY=your_payment_gateway_key
PAYMENT_GATEWAY_SECRET=your_payment_gateway_secret
```

---

## 🔗 API Overview

| Module   | Endpoint Example              | Access             |
| -------- | ----------------------------- | ------------------ |
| Auth     | `POST /api/auth/register`     | Public             |
| Auth     | `POST /api/auth/login`        | Public             |
| Events   | `POST /api/events`            | Organizer          |
| Events   | `GET /api/events`             | All (Public/User)  |
| Stalls   | `POST /api/stalls`            | Vendor / Organizer |
| Bookings | `POST /api/bookings`          | User               |
| Payments | `POST /api/payments/checkout` | User               |
| Admin    | `GET /api/admin/users`        | Admin              |

> Full API documentation can be added via Postman collection or Swagger.

---

## 🖼️ Screenshots

_Add screenshots of your login page, role-based dashboards, event listing, stall booking, and payment screens here._

```
/screenshots
  ├── login.png
  ├── admin-dashboard.png
  ├── organizer-dashboard.png
  ├── vendor-dashboard.png
  └── user-booking.png
```

---

## 🚀 Future Enhancements

- Real-time notifications (Socket.io) for booking updates
- QR code-based event check-in
- Analytics dashboard with charts for admins/organizers
- Email/SMS confirmation for bookings
- Multi-language support

---

## 👨‍💻 Author

**[Shredhaya Goel]**
Final Year Project — [Meerut Institue Of Engineering & Technologu]
📧 shredhayagoel@goel.com

---

## 📄 License

This project is developed for academic purposes as part of a final year project submission. Feel free to reference or build upon it with credit.
