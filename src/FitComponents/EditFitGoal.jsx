import React, { useState } from "react";
import axios from "axios";

const EditFitnessGoal = ({ goal, onSave, onCancel }) => {
  const [editedGoal, setEditedGoal] = useState(goal.goal);
  const [updatedstatus, setUpdatedstatus] = useState(goal.status);
  const [editedTargetDate, setEditedTargetDate] = useState(
    new Date(goal.targetDate).toISOString().split("T")[0]
  ); // Sets the initial date input value

  const handleSaveEdit = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("No token found");
      return;
    }

    try {
      const response = await axios.put(
        `https://backend-2jzz.onrender.com/api/fitness-goals/${goal._id}`, // Ensure goal._id is correct
        {
          goal: editedGoal,
          targetDate: editedTargetDate,
          status: updatedstatus,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Updated fitness goal:", response.data);
      onSave(response.data); // Callback to update the parent component state
    } catch (error) {
      console.error("Error updating fitness goal:", error);
      alert("Failed to update fitness goal");
    }
  };

  return (
    <div className="edit-fitness-goal">
      <h3>Edit Fitness Goal</h3>
      <input
        type="text"
        value={editedGoal}
        onChange={(e) => setEditedGoal(e.target.value)}
        placeholder="Edit your goal"
      />
      <input
        type="date"
        value={editedTargetDate}
        onChange={(e) => setEditedTargetDate(e.target.value)}
      />
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select
          value={updatedstatus}
          onChange={(e) => setUpdatedstatus(e.target.value)}
          className="form-input"
        >
          <option value="Pending">Pending</option>
          <option value="Achieved">Achieved</option>
        </select>
      </div>

      <button onClick={handleSaveEdit}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditFitnessGoal;
