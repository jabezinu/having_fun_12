# MERN Stack Todo App

A simple Todo application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Create, read, update, and delete todos
- Mark todos as completed
- Responsive design

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
# MONGO_URI=mongodb://localhost:27017/mern-app
# NODE_ENV=development

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
- Add new todos by typing in the input field and pressing "Add"
- Click on a todo to mark it as completed
- Click the "Delete" button to remove a todo

## Technology Stack

- **MongoDB** - Database
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
    └── package.json    # Server dependencies
``` 