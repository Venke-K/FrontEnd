import React, { useState } from "react";
import axios from "axios";

const CreateGoalForm = () => {
  const [goal, setGoal] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [status, setStatus] = useState("Pending");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
      setError("No token found");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/fitness-goals",
        { goal, targetDate, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        } // Include the token in the header
      );
      // Handle successful submission, e.g., navigate to dashboard or show a success message
      console.log("Fitness goal created successfully", response.data);
    } catch (error) {
      console.error("Error creating fitness goal:", error);
      setError("Failed to create fitness goal");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-goal-form">
      <h2>Set Fitness Goal</h2>
      <div className="form-group">
        <label htmlFor="goal">Goal:</label>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="form-input"
          placeholder="Enter your fitness goal"
        />
      </div>
      <div className="form-group">
        <label htmlFor="Target Date">Target Date:</label>
        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="form-input"
        >
          <option value="Pending">Pending</option>
          <option value="Achieved">Achieved</option>
        </select>
      </div>
      <button type="submit" className="submit-btn">
        Create Goal
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default CreateGoalForm;
