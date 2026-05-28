# Expense Tracker Backend

This is the backend API server for the Expense Tracker application.

## Overview

- Uses `Node.js` and `Express`
- Provides user signup/login endpoints under `/api/user`
- Uses `morgan` for request logging and `express.json()` for body parsing
- Uses `bcrypt` for password hashing (installed with `npm install bcrypt`)

## Prerequisites

- Node.js 18+ installed
- npm installed

## Setup

1. Open a terminal and change into the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Run the backend

Start the server in development mode:

```bash
npm run dev
```

This runs `nodemon src/index.js` and will restart automatically when backend files change.

The backend listens on port `3030` by default.

## API endpoints

- `GET /` - root route (if configured)
- `POST /api/user/signup` - sign up a new user
- `POST /api/user/login` - log in a user

Example request URL:

```bash
http://localhost:3030/api/user/signup
```

## Important files

- `src/index.js` - app entry point
- `src/user/user.routes.js` - user routes
- `src/user/user.controller.js` - user controller logic

## Notes

- If you do not see request logs, make sure the backend terminal is the one running `npm run dev`
- Make sure your request uses `POST` and includes `Content-Type: application/json`
