# Simple Node.js API for Flutter App

## Overview
This Node.js API demonstrates basic user management (registration and authentication) and provides a data endpoint that returns a list of dummy data. It uses JSON Web Tokens (JWT) for secure authentication. The entire logic is contained within a single file, `server.js`, for simplicity and ease of understanding.

## Getting Started

### Prerequisites
- Node.js installed on your system
- Basic knowledge of JavaScript and Node.js

### Setup
1. **Clone the repository** where the `server.js` file is located.
2. **Navigate** to the project directory in your terminal.
3. Run `npm install` to **install dependencies**. This project requires express and jsonwebtoken packages, among others that might be defined in your `package.json`.

### Running the API
1. In the project directory, run `node server.js` to start the server.
2. The server will start on a predefined port (e.g., 3000). You can access the API endpoints through `http://localhost:3000/`.

## API Documentation
- **User Registration**: POST `/register` - Registers a new user with the provided username and password in the request body.
- **User Authentication**: POST `/authenticate` - Authenticates a user and returns a JWT upon successful authentication.
- **Data Endpoint**: GET `/data` - Returns a list of dummy data. Requires a valid JWT to access.

## Design Decisions
- The API is designed to be as simple as possible, focusing on demonstrating the core functionalities of user registration, authentication, and secure data retrieval.
- JSON Web Tokens (JWT) are used for authentication to ensure secure transmission of information between the server and clients.
