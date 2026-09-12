# TradeX – Stock Trading Platform

**TradeX** is a full-stack stock trading web application built using **React, Node.js, Express.js, and MongoDB**. It provides a responsive landing website along with an interactive trading dashboard for viewing portfolio information, monitoring stocks, and placing Buy/Sell orders.

---

## 🚀 Live Demo

🌐 **Landing Website:** https://tradex-frontend-o0ox.onrender.com

📊 **Trading Dashboard:** https://tradex-dashboard-ub5n.onrender.com

⚙️ **Backend API:** https://tradex-backend-hgv4.onrender.com

The **landing website** acts as the main entry point to the application. Users can click **Try the Dashboard** to access the deployed trading dashboard.

> **Deployment Note:** The backend is hosted on Render's free tier. After a period of inactivity, the backend may go to sleep. The first request after inactivity may therefore take some additional time while the server starts.

---

## 📌 About the Project

TradeX is designed to provide a **stock-market style web experience** while demonstrating the development of a complete full-stack application.

The project consists of two main user-facing parts:

### 🌐 Landing Website

The landing website introduces the platform and provides the following sections:

- **Home**
- **About**
- **Products**
- **Pricing**
- **Support**

It also provides navigation to the trading dashboard through the **Try the Dashboard** option.

### 📊 Trading Dashboard

The trading dashboard provides an interactive interface for viewing and managing stock-related information.

It includes:

- **Holdings**
- **Positions**
- **Orders**
- **Funds**
- **Watchlist**
- **Stock Charts**
- **Buy Orders**
- **Sell Orders**

The dashboard communicates with the backend API to retrieve and store trading-related data.

---

## 🏗️ How the Application Works

The application is divided into separate frontend, dashboard, and backend services.

```text
Landing Website
      │
      │  Try the Dashboard
      ▼
Trading Dashboard
      │
      │  REST API Requests
      ▼
Backend API
      │
      │  Database Operations
      ▼
MongoDB Atlas
Architecture Components

Landing Website
Handles the main website interface, navigation, and informational pages.

Trading Dashboard
Provides the stock trading interface and communicates with the backend API.

Backend API
Processes API requests and performs database operations.

MongoDB Atlas
Stores and retrieves trading-related application data.

🛠️ Technologies Used
Frontend Website
React
Vite
React Router
Bootstrap
Trading Dashboard
React
Vite
Material UI (MUI)
Chart.js
Axios
Backend
Node.js
Express.js
Mongoose
Database
MongoDB Atlas
Deployment
Render
✨ Main Features
📈 Portfolio Information

The dashboard displays stock holdings along with profit and loss information based on the available portfolio data.

📋 Positions

Users can view position-related details such as quantity, product type, and daily changes.

🛒 Buy & Sell Orders

The dashboard provides separate interfaces for placing Buy and Sell orders.

🧾 Order Management

Orders submitted through the dashboard are sent to the backend API and stored in the database.

👀 Watchlist

Users can view and keep track of selected stocks through the watchlist section.

📊 Stock Charts

The dashboard includes charts that provide a visual representation of stock-related information.

💰 Funds

A dedicated funds section allows users to view available funds and related account information.

📱 Responsive Interface

The landing website provides a responsive interface designed to work across different screen sizes.

🔄 Application Workflow
The user opens the TradeX landing website.
The landing page provides information about the platform and its features.
The user clicks Try the Dashboard.
The deployed Trading Dashboard opens.
The dashboard sends requests to the Backend API.
The backend processes the requested operation.
MongoDB Atlas stores or retrieves the required data.
The backend sends the response back to the dashboard.
The dashboard displays the resulting information to the user.
📂 Project Structure
TradeX-Platform/
│
├── backend/
│   ├── model/
│   ├── schemas/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
⚠️ Current Scope & Limitations

TradeX is currently an educational and portfolio project and is not intended to function as a production-level stock brokerage platform.

The current implementation has the following limitations:

User authentication and individual user accounts are not implemented.
Portfolio data is not separated between different users.
Buy/Sell orders are stored in the database, but placing an order does not currently automatically update the displayed Holdings and Positions.
API input validation can be improved.
Automated testing has not yet been implemented.
The application does not use real brokerage services for executing actual stock trades.
🔮 Future Enhancements

The project can be extended with the following features:

User registration and login
JWT-based authentication
User-specific portfolios
Improved API validation
Automatic Holdings and Positions updates
Real-time stock market data
Detailed transaction history
Portfolio performance reports
Automated frontend and backend testing
Improved API security and error handling
Integration with real financial market APIs
🎯 Project Purpose

The main purpose of TradeX is to demonstrate practical full-stack web development by integrating:

Modern React-based interfaces
REST API communication
Backend development using Node.js and Express.js
Database management with MongoDB
Stock trading dashboard concepts
Deployment of multiple application services

The project provides practical experience in developing and deploying a complete web application where multiple components communicate with each other.

👩‍💻 Developer
Rutuja Thaokar

GitHub:
https://github.com/rutujathaokar

📄 Disclaimer

TradeX is an educational/project implementation created for demonstrating full-stack web development concepts.

It is not a real stock brokerage service and does not execute actual financial transactions. This project should not be used as a source for real investment or financial decisions.
