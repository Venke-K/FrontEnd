import React from "react";
import Navbar from "./Navbar";
import FitnessGoals from "../FitComponents/FitnessGoals";
import CreateGoalForm from "../FitComponents/createGoalForm";
import WorkoutLogForm from "../Workout/WorkOutlogForm";
import WorkoutLog from "../Workout/WorkLog";
import NutritionForm from "../Nutrition/NutritionForm";
import NutiLogs from "../Nutrition/NutiLogs";



const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar /> {/* NavBar includes navigation links */}
      <header className="dashboard-header">
        <h1>Welcome to Your Fitness Tracker </h1>
      </header>
      <main   
        className="dashboard-content"
        style={{ backgroundColor: "#0097a7" }}
      >
        <section
          className="dashboard-section"
          style={{ backgroundColor: "#282c34", marginBottom: "10px" }}
        >
          <h2 style={{ color: "white" }}>Your Dashboard</h2>
          <p style={{ color: "white" }}>
            Here you can view,manage and Track your fitness goals, workout logs,
            nutrition tracking, and insights.
          </p>
        </section>
        <section
          className="dashboard-section"
          style={{
            backgroundImage: `url('/assets/images/1000_F_191768899_19y9lsjTvvXoqUvsnunc9iadgvuhEdL6.jpg')`,
            marginBottom: "9px",
          }}
        >
          <CreateGoalForm />
          <FitnessGoals />
        </section>
        <section
          className="dashboard-section"
          style={{  backgroundImage: `url('/assets/images/1000_F_191768899_19y9lsjTvvXoqUvsnunc9iadgvuhEdL6.jpg')`
,  marginBottom: "10px" }}
        >
          <WorkoutLogForm />
          <WorkoutLog />
        </section>
        <section
          className="dashboard-section"
          style={{ backgroundImage: `url('/assets/images/1000_F_305960290_U1GaI4x1lz1GyYGVsNyn72eJa6wyEJEZ.jpg')`, marginBottom: "10px" }}
        >
          <NutritionForm />
          <NutiLogs />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
