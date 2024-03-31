# E-Commerce Web Application

This repository contains the code for an E-Commerce web application built with React on the frontend and Express.js on the backend. The application allows users to browse products, add them to the cart, and proceed with the checkout process using Stripe for payment.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

The project is structured with a frontend built using React.js and a backend server implemented with Express.js. It utilizes React Router for client-side routing and Redux for state management.

## Features

- Browse products
- Add products to cart
- Login using Google authentication
- Checkout using Stripe for payment

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JeromeStephanie/Ecom.git
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
3. Install dependencies for both frontend and backend:
```bash
cd frontend
npm install
cd ../backend
npm install

4. Set up environment variables:

Create a .env file in the backend directory.
Add the following environment variables:
PORT : Port number for the server
STRIPE_SECRET_KEY : Secret key for Stripe integration

##Usage
1. Start the backend server:
```bash
cd backend
npm start
This will start the Express server.

2. Start the frontend development server:
```bash
cd frontend
npm start

This will start the React development server.

Open your browser and go to http://localhost:3000 to access the application.

