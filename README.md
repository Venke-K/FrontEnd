# Fitness Tracker Frontend
Project Overview

The Fitness Tracker project is a comprehensive solution designed to help users track and manage their fitness activities, diet, and overall progress towards their health goals. This repository contains the frontend code, developed using React.js, which serves as the user interface (UI) for interacting with the fitness tracking system. Users can log their workouts, monitor diet plans, view historical progress, and analyze their data through various visualizations.

The frontend communicates with the backend via RESTful APIs to securely store and retrieve user data, which is hosted in MongoDB Atlas. This frontend is fully responsive, optimized for both desktop and mobile devices, and features user authentication to ensure data privacy.
Tech Stack

   React.js: A popular JavaScript library for building fast and interactive UIs.
   React Router: For seamless client-side routing between different views in the app.
   Axios: For making HTTP requests to the backend API.
   JWT (JSON Web Token): For secure user authentication and session management.
   CSS (or TailwindCSS): Custom styling to create an appealing and user-friendly interface.
   Chart.js: Used for rendering beautiful, dynamic charts and graphs that display user progress and workout statistics.
   Deployment: The frontend is deployed via Netlify, providing continuous integration and automatic deployment upon commits to the main branch.

Key Features

   User Authentication:
      Users can register and log in using secure authentication (integrated with backend via JWT).
      Token-based authentication ensures secure session management.

   Dashboard:
        A responsive and visually appealing dashboard that gives users an overview of their current fitness status.
        Displays key metrics like workout history, calories burned, and diet logs.

   Progress Tracking:
        Real-time tracking of workouts and diet with the ability to add, edit, and delete entries.
        Visual representation of data through graphs and charts, powered by Chart.js.

   Mobile Responsive Design:
        Fully optimized for mobile devices, ensuring users can track their fitness goals on the go.

   Integration with Backend:
        The frontend interacts with a backend service to perform all CRUD operations (Create, Read, Update, Delete) on user workout, diet, and progress data.
        Data is securely stored in MongoDB Atlas.



   API Reference

The frontend communicates with the backend using RESTful API endpoints. Below are the main API endpoints used:

   User Registration: POST /api/auth/register
   User Login: POST /api/auth/login
   Fetch User Data: GET /api/user
   Add Workout: POST /api/workouts
   Fetch Workouts: GET /api/workouts
   Update Workout: PUT /api/workouts/:id
   Delete Workout: DELETE /api/workouts/:id     
