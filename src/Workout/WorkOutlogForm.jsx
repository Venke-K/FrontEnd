// WorkoutLogForm.jsx
import React, { useState } from "react";
import axios from "axios";

const WorkoutLogForm = () => {
  const [Exercise, setExercise] = useState("");
  const [Duration, setDuration] = useState("");
  const [Intensity, setIntensity] = useState("");
  const [Calories, setCalories] = useState("");
  const [Date, setDate] = useState("");
  const [error, setError] = useState("");

  //Handling Form Submissions

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    console.log("Token", token);

    if (!token) {
      setError("No Token Found");
    }

    try {
      const response = await axios.post(
        "https://backend-2jzz.onrender.com/api/workouts",
        { Exercise, Duration, Intensity, Calories, Date },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Workoutlog Added successfully", response.data);
    } catch (error) {
      console.error("Error adding Workoutlog", error);
      setError("Failed to add workoutlog");
    }
  };

  return (
    <form className="workout-log-form" onSubmit={handleSubmit}>
      <h2>WorkOut Log Form</h2>
      <div className="form-group">
        <label htmlFor="exercise">Exercise</label>
        <input
          type="text"
          id="exercise"
          name="exercise"
          value={Exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="Enter exercise"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="duration">Duration in min</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={Duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Enter duration"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="intensity">Intensity (1-10)</label>
        <input
          type="text"
          id="intensity"
          name="intensity"
          value={Intensity}
          onChange={(e) => setIntensity(e.target.value)}
          placeholder="Enter intensity"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="calories">Calories Burned</label>
        <input
          type="number"
          id="calories"
          name="calories"
          value={Calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Enter calories burned"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={Date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Log Workout
      </button>
      {error && <p className="Error-message">{error}</p>}
    </form>
  );
};

export default WorkoutLogForm;
