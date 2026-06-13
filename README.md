# Product Management Dashboard (Full Stack MERN)

A professional full-stack MERN Product Management Dashboard with JWT Authentication, Role-Based Access Control (RBAC), Product CRUD operations, Cloudinary image uploads, dashboard analytics, responsive UI, and production deployment.

---

## 🚀 Live Demo

### Frontend

https://product-management-dashboard-phi.vercel.app/

### Backend API

https://product-dashboard-backend-8avu.onrender.com/

---

## 📂 GitHub Repository

https://github.com/tanmay-deev/Product-Management-Dashboard

---

# 📌 Features

## Authentication & Authorization

* JWT Authentication
* Login System
* Protected Routes
* Persistent Authentication using localStorage
* Role-Based Access Control (RBAC)

## Admin Features

* Add Products
* Edit Products
* Delete Products
* Upload Product Images
* Dashboard Analytics

## User Features

* View Products
* Search Products
* Pagination
* Responsive Dashboard

## Dashboard Features

* Total Products Analytics
* Categories Count
* Latest Product Tracking
* Recent Activity Section
* Responsive Stats Cards

## UI/UX Features

* Responsive Mobile Sidebar
* Skeleton Loaders
* Confirmation Modal
* Toast Notifications
* Modern SaaS-style Design
* Mobile Responsive Layout
* Smooth Hover Effects & Transitions

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Tailwind CSS
* Context API
* React Hot Toast
* React Icons

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* bcryptjs
* Multer
* Cloudinary
* multer-storage-cloudinary

---

# 📁 Project Structure

```bash
Product-Management-Dashboard/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── assets/
│   │
│   └── public/
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/tanmay-deev/Product-Management-Dashboard.git
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside backend:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

CLIENT_URL=http://localhost:5173
```

Run Backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` inside frontend:

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend:

```bash
npm run dev
```

---

# 🔐 Demo Credentials

## Admin

```txt
Username: admin
Password: admin123
```

## User

```txt
Username: user
Password: user123
```

---

# 📸 Project Screenshots

## Login Page
<img width="1352" height="842" alt="image" src="https://github.com/user-attachments/assets/b0c1b8e5-4193-4010-97d2-babc19ce717d" />


* Clean authentication UI
* Responsive form layout

## Dashboard

<img width="1897" height="907" alt="image" src="https://github.com/user-attachments/assets/87df5ba9-7335-4ce7-aa76-f8bfc22aa747" />


* Analytics cards
* Recent activity section
* Dynamic dashboard data

## Products Page

<img width="1877" height="923" alt="image" src="https://github.com/user-attachments/assets/3b852813-4973-41ff-93cb-44cd6a55bf7d" />


* Product cards
* Search & pagination
* Responsive product grid

## Edit Product

<img width="1912" height="917" alt="image" src="https://github.com/user-attachments/assets/d227ff60-5c4d-4193-9bb0-4f169b30386f" />


* Product editing functionality
* Image preview support

## Mobile Responsive UI

<img width="392" height="817" alt="image" src="https://github.com/user-attachments/assets/129ffd3b-230f-4a78-a310-aafd2038130e" />


* Responsive sidebar
* Mobile optimized dashboard

---

# 🌐 Deployment

## Frontend Deployment

* Vercel

## Backend Deployment

* Render

## Database

* MongoDB Atlas

## Image Hosting

* Cloudinary

---

# 📈 Future Improvements

* Dark Mode
* Product Filters
* Charts & Analytics
* User Registration
* Email Notifications
* Profile Management
* Product Categories Management
* Redux Toolkit Integration

---

# 🎯 Learning Outcomes

Through this project I learned:

* MERN Stack Architecture
* JWT Authentication
* Role-Based Access Control
* REST API Development
* MongoDB Atlas Integration
* Cloudinary Image Uploads
* Responsive UI Design
* Frontend State Management
* Production Deployment
* Full Stack Application Structure

---

# 👨‍💻 Author

Tanmay Bonde

* Junior Developer Intern at JFS Technology
* BCA Student at Ajeenkya DY Patil University, Pune

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.
