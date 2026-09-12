# Stock Trading Platform

A full-stack stock trading platform with a marketing website and a live trading dashboard, built with React and Node.js, and deployed as three independent services on free hosting.

**Live demo:**
- 🖥️ Dashboard: [stock-trading-platform-lime.vercel.app](https://stock-trading-platform-lime.vercel.app)
- 🌐 Landing page: [stock-trading-platform-frontend.vercel.app](https://stock-trading-platform-frontend.vercel.app)
- ⚙️ Backend API: [stock-trading-platform-y5pc.onrender.com](https://stock-trading-platform-y5pc.onrender.com)

> Note: the backend is on Render's free tier, so it sleeps after 15 minutes of inactivity. The first request after that can take 30–50 seconds to respond — please be patient on first load.

---

## What this is

This project has two parts, modeled on the UI patterns of real Indian stock brokerage platforms:

1. **The marketing website** — Home, Products, Pricing, About, and Support pages
2. **The trading dashboard** — Holdings, Positions, Orders, Funds, Watchlist, and live charts, with working Buy/Sell order windows

It's a full-stack architecture project built for learning and portfolio purposes — not a real trading system, and it isn't affiliated with or endorsed by any brokerage.

## Architecture

The project is split into three independently deployed apps:

```
Dashboard (React, Vercel)  →  Backend API (Express, Render)  →  MongoDB Atlas
Landing page (React, Vercel)  — standalone, no backend calls
```

- The **dashboard** is the only app that talks to the backend — it fetches holdings/positions and posts new orders.
- The **landing page** is fully static and doesn't call the API.
- The **backend** is the only app that talks to the database.

## Tech stack

| Layer | Tech |
|---|---|
| Landing page | React 19, Vite, React Router, Bootstrap |
| Dashboard | React 19, Vite, MUI, Chart.js, Axios |
| Backend | Node.js, Express 5, Mongoose |
| Database | MongoDB Atlas |
| Hosting | Vercel (frontend + dashboard), Render (backend) |

## Features

- Holdings table with live P&L calculation per stock, pulled from MongoDB
- Positions table with product type, quantity, and day change
- Buy and Sell order windows that submit orders to the backend
- Order history saved to the database
- Fully responsive marketing site with Home, Products, Pricing, About, and Support pages

## Known limitations

Being upfront about what this project doesn't do (yet):

- No authentication — holdings/positions/orders are global, not per-user
- Placing a Buy/Sell order is saved to the database but doesn't currently update the Holdings/Positions numbers
- No input validation on the API routes
- No automated tests

These are natural next steps if extended further.

## Running it locally

Each app runs independently and needs its own terminal.

**Backend**
```bash
cd backend
npm install
# create a .env file with:
# MONGO_URL=your_mongodb_atlas_connection_string
npm run dev
```
Runs on `http://localhost:3002`

**Dashboard**
```bash
cd dashboard
npm install
# create a .env file with:
# VITE_API_URL=http://localhost:3002
npm run dev
```

**Landing page**
```bash
cd frontend
npm install
npm run dev
```

## Project structure

```
stock-trading-platform/
├── backend/       # Express API + MongoDB models
├── dashboard/      # Trading dashboard (React)
└── frontend/       # Marketing/landing site (React)
```

## Author

Built by [Nupur Thakkar](https://github.com/nupurthakkar17)
