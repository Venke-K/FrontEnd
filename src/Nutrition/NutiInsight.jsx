
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaAppleAlt, FaUtensils } from "react-icons/fa"; // Icons for visual appeal
// Importing a CSS file for styling

const NutritionInsights = () => {
  const [insights, setInsights] = useState({
    totalLogs: 0,
    totalCalories: 0,
    averageCalories: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNutritionInsights = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://backend-2jzz.onrender.com/api/nutrition/insights`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setInsights(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching nutrition insights:", error);
        setError("Failed to load insights");
        setLoading(false);
      }
    };

    fetchNutritionInsights();
  }, []);

  if (loading) return <div className="loading-message">Loading insights...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="nutrition-insights">
      <h2><FaUtensils /> Nutrition Log Insights</h2>
      <div className="insight-card">
        <div className="insight-icon">
          <FaAppleAlt />
        </div>
        <div className="insight-details">
          <p>Total Nutrition Logs: <strong>{insights.totalLogs}</strong></p>
          <p>Total Calories Consumed: <strong>{insights.totalCalories} kcal</strong></p>
          <p>
            Average Calories Per Log: <strong>{Math.round(insights.averageCalories)} kcal</strong>
          </p>
        </div>
      </div>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(insights.totalCalories / 2000) * 100}%` }} // Assuming 2000 kcal is a daily target
        />
      </div>
      <p>Calorie Target: 2000 kcal</p>
    </div>
  );
};

export default NutritionInsights;
