import React, { useEffect, useState } from "react";
import axios from "axios";
import EditFitGoal from "./EditFitGoal"; // Import the EditFitnessGoal component
import { useNavigate } from "react-router-dom";

const FitnessGoals = () => {
  const [goals, setGoals] = useState([]);
  const [error, setError] = useState("");
  const [editingGoal, setEditingGoal] = useState(null); // State to track the goal being edited

  const navigate = useNavigate();

  useEffect(() => {
    const fetchGoals = async () => {
      const token = localStorage.getItem("token");

      if (!token) { 
        return navigate("/");
      }

      try {
        const response = await axios.get(
          "http://localhost:5000/api/fitness-goals",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setGoals(response.data);
      } catch (error) {
        console.error("Error fetching fitness goals:", error);
        setError("Failed to fetch fitness goals");
      }
    };

    fetchGoals();
  }, [navigate]);

  const handleEdit = (goal) => {
    setEditingGoal(goal);
  };

  const handleSave = (updatedGoal) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal._id === updatedGoal._id ? updatedGoal : goal
      )
    );
    setEditingGoal(null); // Close the edit form after saving
  };

  const handleCancelEdit = () => {
    setEditingGoal(null); // Close the edit form without saving
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/fitness-goals/${id}`);
      // Remove the deleted goal from the state
      setGoals(goals.filter((goal) => goal._id !== id));
    } catch (error) {
      console.error("Error deleting fitness goal:", error);
      setError("Failed to delete the goal.");
    }
  };

  return (
    <div className="fitness-body">
      <div className="fitness-goals">
        <h2>Fitness Goals</h2>
        {error && <p className="error">{error}</p>}
        {editingGoal ? (
          <EditFitGoal
            goal={editingGoal}
            onSave={handleSave}
            onCancel={handleCancelEdit}
          />
        ) : goals.length > 0 ? (
          <ul className="goals-list">
            {goals.map((goal) => (
              <li key={goal._id} className="goal-item">
                <p className="goal-text">{goal.goal}</p>
                <p className="goal-date">
                  Target Date: {new Date(goal.targetDate).toLocaleDateString()}
                </p>
                <p className="goal-status">Status:{goal.status}</p>
                <button onClick={() => handleEdit(goal)}>Edit</button>
                <button onClick={() => handleDelete(goal._id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-goals">No fitness goals found.</p>
        )}
      </div>
    </div>
  );
};

export default FitnessGoals;
