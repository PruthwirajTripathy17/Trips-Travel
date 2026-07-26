# TripsTravel 🌍

TripsTravel is a premium, full-stack responsive travel booking application. It allows users to search for handpicked travel destinations, browse tours, read/write ratings and reviews, make booking reservations, and manage their profile settings. It also includes an integrated Admin Panel to manage tours and bookings.

## 🚀 Live Links

- **Frontend Application URL**: [https://trips-travel-iitu.onrender.com](https://trips-travel-iitu.onrender.com)
- **Backend API Server URL**: [https://trips-travel-backend.onrender.com](https://trips-travel-backend.onrender.com)

---

## 🛠️ Technology Stack

### Frontend:
* **Framework**: React.js (built on Vite for rapid compilation and hot module reloading)
* **Styling**: Tailwind CSS & Vanilla CSS (harmonious dark mode support, glassmorphism elements, and micro-animations)
* **Libraries**: React Router DOM (v6), React Icons, Swiper, React Slick Carousel, React Toastify

### Backend:
* **Runtime**: Node.js
* **Framework**: Express.js
* **Database**: MongoDB Atlas (Mongoose ODM layer)
* **Security & Authentication**: JWT (JSON Web Tokens), bcryptjs password hashing, Cookie Parser

---

## ✨ Features

1. **Vibrant & Responsive Design**: Custom grid controls optimized for full responsive display across laptops, tablets, and mobile screens.
2. **Dynamic Sticky Header**: Scroll-responsive sticky header which slides out of view on scroll-down and animates back on scroll-up.
3. **Advanced Travel Search**: Interactive search bar supporting location keywords, minimum budgets, and maximum capacities (stacks vertically on mobile and horizontally on desktop).
4. **Live Tour Catalog**: Paginated grid showing active tours from the database complete with ratings summaries and custom card animations (group-hover scaling and elevation).
5. **Interactive Booking**: Inline booking cost calculators calculating per-head totals, service charges, and guest counts.
6. **User Profiles**: Manage bookings, review transaction histories, update profile photo/settings, or delete accounts securely.
7. **Reviews & Ratings**: Star selection form providing real-time tour rating submissions.
8. **Admin Panel**: Dedicated panels allowing admins to manage all bookings, view statuses, create new tour catalogs, and update existing listings.
9. **CORS Protected**: Configured CORS whitelist allowing communication between your hosted Render instances.
10. **Data Protection**: All secrets and local parameters are automatically git-ignored under a root `.gitignore` file.

---

## 📂 Project Directory Structure

```text
Trips-Travel/
├── backend/
│   ├── controllers/       # Route request handlers
│   ├── middleware/        # JWT Authentication check & middleware
│   ├── models/            # Mongoose Schemas (Tour, User, Booking, Review)
│   ├── routes/            # Express routes
│   ├── .env               # Database URL & JWT key parameters (Git-ignored)
│   ├── index.js           # Server starter file & CORS settings
│   └── package.json       # Backend configuration and dependencies
├── frontend/
│   ├── public/
│   │   └── tour-images/   # Directory for statically served tour images
│   ├── src/
│   │   ├── assets/        # Visual media, logo assets, and gallery images
│   │   ├── components/    # Reusable components (Header, Footer, Gallery, featuredTour)
│   │   ├── context/       # Auth React Context State Manager
│   │   ├── pages/         # Page Views (Home, Tours, TourDetails, Profile, Login)
│   │   ├── shared/        # Shared components (TourCard, SearchBar, Newsletter)
│   │   ├── utils/         # Helper functions (CalculateAvg, token handlers)
│   │   └── main.jsx       # React application mounting
│   ├── tailwind.config.js # Tailwind CSS design system rules
│   └── package.json       # Frontend dependencies configuration
└── .gitignore             # Root Git ignore rules (protects credentials)
```

---

## ⚙️ Environment Variables Setup

Create a `.env` file inside the `/backend` directory and configure the following variables:

```env
PORT = 3050
MONGO_URL = <your_mongodb_atlas_connection_string>
SECRET_KEY = <your_jwt_signature_secret_key>
```

---

## 💻 Local Quickstart

### 1. Clone the repository
```bash
git clone https://github.com/PruthwirajTripathy17/Trips-Travel.git
cd Trips-Travel
```

### 2. Set Up and Run the Backend
```bash
cd backend
npm install
npm run dev
```
*The backend server will spin up on port `3050`.*

### 3. Set Up and Run the Frontend
```bash
cd ../frontend
npm install
npm run dev
```
*The React developer server will launch at [http://localhost:5173](http://localhost:5173).*

---

## 📜 License
© 2026 TripsTravels. All rights reserved.
