import React, { useState } from "react";
import axios from "axios";

const EditWork = ({ log, onSave, onCancel }) => {
  const [editedExercise, setEditedExercise] = useState(log.Exercise);
  const [editedDuration, seteditedDuration] = useState(log.Duration);
  const [editedIntensity, seteditedIntensity] = useState(log.Intensity);
  const [editedCalories, seteditedCalories] = useState(log.Calories);
  const [editedDate, setEditedDate] = useState(
    new Date(log.Date).toISOString().split("T")[0]
  );

  const handleSaveEdit = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("No token found");
      return;
    }

    try {
      const response = await axios.put(
        `https://backend-2jzz.onrender.com/api/workouts/${log._id}`, // Ensure goal._id is correct
        {
          Exercise: editedExercise,
          Duration: editedDuration,
          Intensity: editedIntensity,
          Calories: editedCalories,
          Date: editedDate,
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
    <div className="edit-worklog">
      <h3>Edit WorkOut Log</h3>
      <input
        type="text"
        value={editedExercise}
        onChange={(e) => setEditedExercise(e.target.value)}
        placeholder="Edit your goal"
      />
      <input
        type="number"
        value={editedDuration}
        onChange={(e) => seteditedDuration(e.target.value)}
        placeholder="Edit your goal"
      />
      <input
        type="text"
        value={editedIntensity}
        onChange={(e) => seteditedIntensity(e.target.value)}
        placeholder="Edit your goal"
      />
      <input
        type="text"
        value={editedCalories}
        onChange={(e) => seteditedCalories(e.target.value)}
        placeholder="Edit your goal"
      />
      <input
        type="date"
        value={editedDate}
        onChange={(e) => setEditedDate(e.target.value)}
      />
      <button onClick={handleSaveEdit}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditWork;
