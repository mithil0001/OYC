# Own Your Cab (OYC)

Own Your Cab is a full-stack cab booking application with separate user and admin flows. The frontend is built with React and Vite, and the backend is built with Express, MongoDB, and JWT-based authentication.

## Features

- User registration and login
- Admin registration and login
- Browse available cabs
- Book cabs and view user bookings
- Admin dashboard for users, bookings, and fleet management
- Car create, update, and delete flows
- Demo-data fallback in the frontend when the backend is unreachable

## Tech Stack

- Frontend: React, Vite, React Router, Axios
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, Multer

## Project Structure

```text
OYC/
|-- Client/   # React + Vite frontend
|-- Server/   # Express + MongoDB backend
|-- README.md
|-- .gitignore
```

## Prerequisites

- Node.js 18 or newer
- npm 9 or newer
- MongoDB local instance or MongoDB Atlas connection string

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Nikhil97ch/OYC.git
cd OYC
```

### 2. Install frontend dependencies

```bash
cd Client
npm install
```

### 3. Install backend dependencies

```bash
cd ../Server
npm install
```

## Environment Variables

### Backend

Create `Server/.env` from `Server/.env.example`.

```env
PORT=8000
MONGODB_URI=mongodb://127.0.0.1:27017/own-your-cab
JWT_SECRET=replace-with-a-secure-secret
```

### Frontend

Create `Client/.env` from `Client/.env.example`.

```env
VITE_API_URL=http://localhost:8000/api
```

## Running the Project

Open two terminals.

### Start the backend

```bash
cd Server
npm run dev
```

The API will run at `http://localhost:8000`.

### Start the frontend

```bash
cd Client
npm run dev
```

The app will run at the Vite local URL shown in the terminal, typically `http://localhost:5173`.

## Demo Access

If the frontend cannot reach the backend API, it falls back to demo data stored in local storage.

- Demo user: `aarav@oyc.com`
- Demo admin: `admin@oyc.com`
- Demo password: `123456`

## Main API Routes

### User

- `POST /api/users/register`
- `POST /api/users/login`
- `GET /api/users/profile`

### Admin

- `POST /api/admin/register`
- `POST /api/admin/login`
- `GET /api/admin/users`
- `GET /api/admin/users/:id`
- `PUT /api/admin/users/:id`
- `DELETE /api/admin/users/:id`

### Cars

- `GET /api/cars`
- `GET /api/cars/:id`
- `POST /api/cars`
- `PUT /api/cars/:id`
- `DELETE /api/cars/:id`

### Bookings

- `POST /api/bookings`
- `GET /api/bookings`
- `GET /api/bookings/user/:userId`

## Build for Production

### Frontend

```bash
cd Client
npm run build
```

### Backend

```bash
cd Server
npm start
```

## Notes

- Protected backend routes require a JWT token in the `Authorization: Bearer <token>` header.
- Car image uploads are stored in the `uploads/` folder.
- `node_modules`, build output, environment files, and uploads should not be committed to GitHub.

## License

This project is licensed under the ISC License.
