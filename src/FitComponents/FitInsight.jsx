import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFlagCheckered, FaFlag } from "react-icons/fa"; // Importing icons for visual appeal

const Fitinsightsdata = () => {
  const [insights, setInsights] = useState({
    totalGoals: 0,
    achievedGoals: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFitnessInsights = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/fitness-goals/insights",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setInsights(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching fitness insights:", error);
        setError("Failed to load insights");
        setLoading(false);
      }
    };
    fetchFitnessInsights();
  }, []);

  if (loading) return <p>Loading insights...</p>;
  if (error) return <p>{error}</p>;

  const goalAchievementRate =
    insights.totalGoals > 0
      ? Math.round((insights.achievedGoals / insights.totalGoals) * 100)
      : 0;

  return (
    <div className="fitness-insights">
      <h2 className="insights-title">Fitness Goal Insights</h2>
      <div className="insight-cards">
        <div className="insight-card">
          <FaFlagCheckered className="insight-icon" />
          <h3>Total Goals</h3>
          <p>{insights.totalGoals}</p>
        </div>
        <div className="insight-card">
          <FaFlag className="insight-icon" />
          <h3>Achieved Goals</h3>
          <p>{insights.achievedGoals}</p>
        </div>
        <div className="insight-card achievement-rate">
          <h3>Goal Achievement Rate</h3>
          <p>{goalAchievementRate}%</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${goalAchievementRate}%`,
                backgroundColor: goalAchievementRate === 100 ? 'green' : 'orange',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitinsightsdata;
