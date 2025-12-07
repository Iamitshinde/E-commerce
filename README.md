# Digital Nexus – MERN Stack E-Commerce Website

A full-stack e-commerce web application built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- User registration and login (JWT authentication)
- Product listing with images and prices
- Add to Cart & Checkout
- Admin dashboard to manage products
- Order history for users
- Responsive UI (mobile + desktop)

## Tech Stack

Frontend:

- React.js
- HTML, CSS, JavaScript
- Bootstrap

Backend:

- Node.js
- Express.js

Database:

- MongoDB (MongoDB Atlas)

Tools:

- Git & GitHub
- Postman
- VS Code

## Folder Structure

/client → React frontend  
/server → Node + Express backend  
/models → MongoDB models (User, Product, Orders)  
/routes → API routes  
/controllers → Backend logic  
/config → Database connection

## How to Run This Project

1. Clone the repository
   git clone https://github.com/your-username/digital-nexus.git

2. Go to server folder
   cd server
   npm install
   npm start

3. Go to client folder
   cd ../client
   npm install
   npm start

4. Open browser and go to:
   http://localhost:3000

## Database

This project uses MongoDB as a NoSQL database.

Main collections:

- users – stores user information
- products – stores product details
- orders – stores order information

The database is connected using Mongoose.

## Author

Amit Shinde  
BSc Computer Science  
Aspiring MERN / Data Analyst  
LinkedIn:www.linkedin.com/in/amit-shinde-b24255326
GitHub:https://github.com/Iamitshinde
