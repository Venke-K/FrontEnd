import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaDumbbell, FaFireAlt, FaClock, FaBolt } from "react-icons/fa"; // Font Awesome Icons
import { Pie } from 'react-chartjs-2'; // Chart.js for visualization
import 'chart.js/auto'; // Required for Chart.js to work

const WorkoutInsights = () => {
  const [insights, setInsights] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInsights = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("No token found, redirecting...");
        return navigate("/");
      }

      try {
        const response = await axios.get(
          "http://localhost:5000/api/workouts/insights",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setInsights(response.data);
      } catch (error) {
        console.error("Error fetching workout insights:", error);
        setError("Failed to fetch workout insights");
      }
    };

    fetchInsights();
  }, [navigate]);

  // Chart Data for Pie Chart
  const chartData = {
    labels: ['Total Workouts', 'Total Duration (min)', 'Calories Burned'],
    datasets: [
      {
        label: 'Workout Stats',
        data: [
          insights.totalWorkouts || 0,
          insights.totalDuration || 0,
          insights.totalCaloriesBurned || 0,
        ],
        backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56'],
        hoverBackgroundColor: ['#36a2eb', '#ff6384', '#ffcd56'],
      },
    ],
  };

  // Conditional Intensity Color
  const intensityColor =
    insights.averageIntensity === "High"
      ? "text-danger"
      : insights.averageIntensity === "Medium"
      ? "text-warning"
      : "text-success";

  return (
    <div className="workout-insights">
      <h2 className="insights-title">Workout Insights</h2>
      {error && <p className="error-message">{error}</p>}

      {insights.totalWorkouts ? (
        <>
          {/* Chart for better visualization */}
          <div className="chart-container">
            <Pie data={chartData} />
          </div>

          {/* Insights List with Icons */}
          <ul className="insights-list">
            <li>
              <FaDumbbell className="insights-icon" />
              <span className="insight-label">Total Workouts:</span>{" "}
              {insights.totalWorkouts}
            </li>
            <li>
              <FaClock className="insights-icon" />
              <span className="insight-label">Total Duration:</span>{" "}
              {insights.totalDuration} minutes
            </li>
            <li>
              <FaBolt className={`insights-icon ${intensityColor}`} />
              <span className="insight-label">Average Intensity:</span>{" "}
              {insights.averageIntensity}
            </li>
            <li>
              <FaFireAlt className="insights-icon" />
              <span className="insight-label">Total Calories Burned:</span>{" "}
              {insights.totalCaloriesBurned}
            </li>
          </ul>
        </>
      ) : (
        <p className="no-insights">No insights available</p>
      )}
    </div>
  );
};

export default WorkoutInsights;

