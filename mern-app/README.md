# Delicious Bites - Restaurant Website

A full-stack restaurant website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Display restaurant menu items by category
- Featured dishes highlighting
- Responsive design for all device sizes
- About section with restaurant information
- Contact form for customer inquiries

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)

## Installation and Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd mern-app
```

### 2. Server Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create a .env file with the following content
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/restaurant-app
# NODE_ENV=development

# Seed the database with sample menu items
npm run seed

# Start the server
npm run dev
```

### 3. Client Setup

```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install

# Start the client
npm run dev
```

## Usage

- Open your browser and go to `http://localhost:5173`
- Browse the menu by categories: Appetizers, Main Courses, Desserts, and Beverages
- View restaurant information and contact details

## Technology Stack

- **MongoDB** - Database for storing menu items
- **Express** - Backend framework
- **React** - Frontend library
- **Node.js** - JavaScript runtime
- **Axios** - HTTP client
- **Vite** - Build tool

## Project Structure

```
mern-app/
├── client/             # React frontend
│   ├── public/         # Static files
│   ├── src/            # Source files
│   └── package.json    # Client dependencies
│
└── server/             # Node.js backend
    ├── .env            # Environment variables
    ├── index.js        # Main server file
    ├── seedData.js     # Database seeding script
    └── package.json    # Server dependencies
``` 