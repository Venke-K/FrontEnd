import React from "react";
import WorkoutInsights from "../Workout/Workoutinsights";
import Fitinsightsdata from "../FitComponents/FitInsight";
import NutritionInsights from "../Nutrition/NutiInsight";

function InsightData() {
  return (
    <div>
      <section
        className="dashboard-section"
        style={{ backgroundImage:`url('/assets/images/istockphoto-1314047207-612x612.jpg')`, marginBottom: "10px" }}
      >
        <WorkoutInsights />
      </section>

      <section
        className="dashboard-section"
        style={{ backgroundImage:`url('/assets/images/1_cr-1-1024x576.webp')`, marginBottom: "10px" }}
      >
        <Fitinsightsdata />
      </section>
      <section
        className="dashboard-section"
        style={{ backgroundImage:`url('/assets/images/various-food-seamless-pattern-hand-600nw-1229845990.webp')` , marginBottom: "10px" }}
      >
        <NutritionInsights />
      </section>
    </div>
  );
}

export default InsightData;
