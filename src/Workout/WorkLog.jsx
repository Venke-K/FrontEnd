import React, { useEffect, useState } from "react";
import axios from "axios";
import EditWork from "./EditWork";
import { useNavigate } from "react-router-dom";

const WorkoutLog = () => {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState("");
  const [Editworklog, setEditworklog] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchLog = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("No token found, redirecting...");
        return navigate("/");
      }
      try {
        const response = await axios.get("https://backend-2jzz.onrender.com/api/workouts", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Fetched logs response:", response);
        console.log("Fetched logs data:", response.data);

        if (Array.isArray(response.data)) {
          setLogs(response.data); // Correctly update state with fetched array
          console.log("Logs state updated:", response.data);
        }
      } catch (error) {
        console.error("Error fetching Workout Data:", error);
        setError("Failed to fetch Workout Data");
      }
    };
    fetchLog();
  }, [navigate]);

  const handleEdit = (log) => {
    setEditworklog(log);
  };

  const handleSave = (updatedlog) => {
    setLogs((prevlogs) =>
      prevlogs.map((log) => (log._id === updatedlog._id ? updatedlog : log))
    );
    setEditworklog(null);
  };

  const handleCancelEdit = () => {
    setEditworklog(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend-2jzz.onrender.com/api/workouts/${id}`);
      setLogs(logs.filter((log) => log._id !== id));
    } catch (error) {
      console.error("Error deleting worklog:", error);
      setError("Failed to delete worklog");
    }
  };

  console.log("Workout logs state:", logs);

  if (logs.length === 0 && !error) {
    console.log("No logs to display. Logs length:", logs.length);
  }

  return (
    <div className="workout-log-list">
      <h2>Workout Logs</h2>
      {error && <p className="error-message">{error}</p>}
      {Editworklog ? (
        <EditWork
          log={Editworklog}
          onSave={handleSave}
          onCancel={handleCancelEdit}
        />
      ) : logs.length === 0 ? (
        <p>No Workout logs available</p>
      ) : (
        <ul>
          {logs.map((log) => (
            <li key={log._id}>
              <p>Exercise: {log.Exercise}</p>
              <p>Duration: {log.Duration} minutes</p>
              <p>Intensity: {log.Intensity}</p>
              <p>Calories Burned: {log.Calories}</p>
              <p>Date: {new Date(log.Date).toLocaleDateString()}</p>
              <button onClick={() => handleEdit(log)}>Edit</button>
              <button onClick={() => handleDelete(log._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutLog;
