import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './LandingComponents/Landing.jsx';
import Login from "./LandingComponents/Login.jsx";
import Register from "./LandingComponents/Register.jsx";
import About from "./LandingComponents/About.jsx";
import Contact from "./LandingComponents/Contact.jsx";
import Dash from "./DashBoard/Dash.jsx";
import { Toaster } from 'react-hot-toast';
import FitnessGoals from "./FitComponents/FitnessGoals.jsx";
import WorkoutLog from "./Workout/WorkLog.jsx";
import NutiLogs from "./Nutrition/NutiLogs.jsx";
import InsightData from "./Insights/InsightData.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/fitness-goals" element={<FitnessGoals />} />
        <Route path="/workouts" element={<WorkoutLog />} />
        <Route path="/nutrition" element={<NutiLogs />} />
        <Route path="/insights" element={<InsightData />} />
      </Routes>
    </>
  );
}

export default App;


