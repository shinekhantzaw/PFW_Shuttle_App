# 🚍 PFW Shuttle App

A full-stack real-time shuttle tracking system for Purdue University Fort Wayne (PFW) — built to give students a seamless, live Uber-like experience for campus transportation.

This project includes:

- 📱 React Native Expo Mobile App (Student + Driver)
- 🖥️ Node.js Backend API
- 📡 Real-time GPS Tracking
- 🗺️ Route & ETA Engine
- 🔐 Clerk Authentication
- 🛠️ MongoDB Database with Mongoose Models

## 🌟 Why This App Exists

PFW currently does not have an official shuttle tracking system, leaving students unsure about shuttle timings. This app solves that by providing:

- Live shuttle location
- Accurate ETA predictions
- Driver shift management
- Route/stops visibility
- Student-friendly UI

Built to be robust, scalable, and production-ready.

## 🧱 System Architecture

```
PFW_Shuttle_App/
│
├── frontend/     → React Native Expo student/driver app
│   ├── app/
│   ├── components/
│   ├── screens/
│   ├── hooks/
│   └── ...
│
├── backend/      → Node.js Express API
│   ├── src/
│   │   ├── routes/         → API endpoints
│   │   ├── controllers/    → business logic
│   │   ├── services/       → ETA + realtime engine
│   │   ├── lib/
│   │   │   ├── db/models/  → Mongoose schemas
│   │   │   └── utils/
│   │   ├── workers/        → background ETA worker
│   │   └── scripts/        → seed + test scripts
│   ├── API_DOCUMENTATION.md
│   └── app/                → SSR pages (optional)
│
└── README.md
```

## 📱 Frontend (React Native Expo)

### 🎓 Student Features

- View live shuttle location
- See ETA to the next stop
- Choose a route and view stop list
- Get notified when shuttle is approaching
- Clean, minimal UI (Apple-like design)

### 🧑‍✈️ Driver Features

- Login via Clerk
- Select assigned route
- Start/stop shift
- Share real-time GPS location
- Prevents fake location
- Simple, safe UI with large buttons

## 🖥️ Backend (Node + Express + MongoDB)

### 🔌 Core APIs

Located in: `backend/src/routes/`

- `/routes`
- `/stops`
- `/shuttles`
- `/arrivals`
- `/driver`

All routes have controllers, services, and models properly separated.

### 📡 Real-Time Location Engine

- Drivers send GPS pings
- Backend broadcasts updates
- Students receive live positions
- Uses WebSockets or event polling

### 🧮 ETA Calculation Worker

Background worker (`eta-worker.js`):

- Processes all shuttles every cycle
- Computes ETA using:
  - distance-to-stop
  - average shuttle speed
  - route geometry
- Saves arrival prediction to database

### 🗃️ Database Models

Found in: `backend/src/lib/db/models/`

- `Route.js`
- `Stop.js`
- `Shuttle.js`
- `Arrival.js`
- `Ping.js`

Optimized for fast real-time queries.

### 🧪 Scripts Included

Located under `backend/src/scripts/`:

- `seed-routes.js` → Populate routes + stops
- `test-connection.js` → Test DB connection

## 🔐 Authentication

Using Clerk for:

- Student login
- Driver login
- Role-based routing:
  - student → student home screen
  - driver → driver console

## 🛠️ Tech Stack

### Frontend

- React Native (Expo)
- TypeScript
- Clerk Authentication
- Zustand (state management)
- Tailwind-style classnames (NativeWind)
- Axios (API calls)

### Backend

- Node.js + Express
- MongoDB + Mongoose
- Real-time event system
- ETA calculation engine
- Background workers
- Modular controllers/services

### DevOps

- Render
- vercel
- CI/CD

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/shinekhantzaw/PFW_Shuttle_App.git
cd PFW_Shuttle_App
```

### 2. Install Backend

```bash
cd backend
npm install
```

Setup environment variables:

```env
MONGO_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_key
```

Start backend:

```bash
npm start
```

### 3. Install Frontend

```bash
cd ../frontend
npm install
npx expo start
```

Make sure to configure:

```env
BASE_URL=http://your-api-url
CLERK_PUBLISHABLE_KEY=your_key
```

## 🚀 Future Improvements

- Push notifications when shuttle is near
- Route analytics dashboard
- Admin console for shuttle operations
- Offline map caching
- Driver shift analytics
