import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

// Predefined meal data
const mealsData = {
  breakfast: [
    { meal: "Eggs", calories: 155 },
    { meal: "Pancakes", calories: 350 },
    { meal: "Idli with Sambar ", calories: 200 },
    { meal: "Poha with Peanuts", calories: 250 },
    { meal: "Aloo Paratha with Curd", calories: 350 },
    { meal: "Masala Dosa with Coconut Chutney", calories: 300 },
    { meal: "Upma (Semolina)", calories: 250 },
    { meal: "Chole Bhature (Half Portion)", calories: 400 },
    { meal: "Pesarattu (Green Gram Dosa)", calories: 220 },
    { meal: "Rava Dosa with Tomato Chutney", calories: 270 },
    { meal: "Misal Pav", calories: 350 },
    { meal: "Uttapam with Onion and Tomato", calories: 280 },
    { meal: "Sabudana Khichdi", calories: 300 },
    { meal: "Thepla with Curd", calories: 250 },
    { meal: "Moong Dal Cheela", calories: 180 },
    { meal: "Vada Pav", calories: 300 },
    { meal: "Puri with Aloo Subzi ", calories: 400 },
  ],
  lunch: [
    { meal: "Salad", calories: 150 },
    { meal: "Sandwich", calories: 250 },
  ],
  snacks: [
    { meal: "Fruit", calories: 80 },
    { meal: "Nuts", calories: 200 },
  ],
  dinner: [
    { meal: "Steak", calories: 450 },
    { meal: "Pasta", calories: 400 },
  ],
};

const NutiLogs = () => {
  const [logs, setLogs] = useState([]);
  const [editingLog, setEditingLog] = useState(null); // To track which log is being edited
  const [mealOptions, setMealOptions] = useState([]); // For dynamic meal selection
  const [calories, setCalories] = useState(0); // To calculate calories dynamically
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNutiLogs = async () => {
      try {
        const response = await axios.get(
          "https://backend-2jzz.onrender.com/api/nutrition",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setLogs(response.data);
      } catch (error) {
        console.error("Error fetching nutrition logs:", error);
      }
    };
    fetchNutiLogs();
  }, [navigate]);

  // Handle delete log
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend-2jzz.onrender.com/api/nutrition/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setLogs(logs.filter((log) => log._id !== id)); // Update the state after deletion
    } catch (error) {
      console.error("Error deleting log:", error);
    }
  };

  // Handle saving an edited log
  const handleSave = async (values) => {
    try {
      const response = await axios.put(
        `https://backend-2jzz.onrender.com/api/nutrition/${editingLog._id}`,
        { ...values, calories }, // Save updated calories
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setLogs(
        logs.map((log) => (log._id === editingLog._id ? response.data : log))
      );
      setEditingLog(null); // Clear editing state after saving
    } catch (error) {
      console.error("Error updating log:", error);
    }
  };

  // Handle edit button click
  const handleEdit = (log) => {
    setEditingLog(log);
    setMealOptions(mealsData[log.mealType] || []); // Populate meal options based on meal type
    setCalories(log.calories); // Set initial calories
  };

  // Handle mealType change
  const handleMealTypeChange = (mealType) => {
    const options = mealsData[mealType] || [];
    setMealOptions(options);
    setCalories(0); // Reset calories when changing meal type
  };

  // Handle meal selection
  const handleMealChange = (mealName, quantity) => {
    const selectedMeal = mealOptions.find((meal) => meal.meal === mealName);
    if (selectedMeal) {
      setCalories(selectedMeal.calories * quantity);
    }
  };

  return (
    <div className="nutrition-log">
      <h2>Your Nutrition Logs</h2>
      {logs.length > 0 ? (
        <ul>
          {logs.map((log) => (
            <li key={log._id}>
              {editingLog && editingLog._id === log._id ? (
                <Formik
                  initialValues={{
                    mealType: editingLog.mealType,
                    meal: editingLog.meal,
                    quantity: editingLog.quantity,
                  }}
                  onSubmit={handleSave}
                >
                  {({ values, setFieldValue }) => (
                    <Form>
                      <div>
                        <label htmlFor="meal-type">Meal Type</label>
                        <Field
                          as="select"
                          name="mealType"
                          onChange={(e) => {
                            setFieldValue("mealType", e.target.value);
                            handleMealTypeChange(e.target.value);
                          }}
                        >
                          <option value="">Select Meal Type</option>
                          <option value="breakfast">Breakfast</option>
                          <option value="lunch">Lunch</option>
                          <option value="snacks">Snacks</option>
                          <option value="dinner">Dinner</option>
                        </Field>
                      </div>
                      <div>
                        <label htmlFor="meal">Meal</label>
                        <Field
                          as="select"
                          name="meal"
                          onChange={(e) => {
                            setFieldValue("meal", e.target.value);
                            handleMealChange(e.target.value, values.quantity);
                          }}
                        >
                          <option value="">Select Meal</option>
                          {mealOptions.map((option) => (
                            <option key={option.meal} value={option.meal}>
                              {option.meal}
                            </option>
                          ))}
                        </Field>
                      </div>
                      <div>
                        <label htmlFor="quantity">Quantity</label>
                        <Field
                          type="number"
                          name="quantity"
                          onChange={(e) => {
                            setFieldValue("quantity", e.target.value);
                            handleMealChange(values.meal, e.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <label htmlFor="calories">Calories</label>
                        <p>{calories}</p> {/* Display updated calories */}
                      </div>
                      <button type="submit">Save</button>
                      <button type="button" onClick={() => setEditingLog(null)}>
                        Cancel
                      </button>
                    </Form>
                  )}
                </Formik>
              ) : (
                <div>
                  <p>Meal Type: {log.mealType}</p>
                  <p>Meal: {log.meal}</p>
                  <p>Calories: {log.calories}</p>
                  <p>Date: {new Date(log.date).toLocaleDateString()}</p>
                  <button onClick={() => handleEdit(log)}>Edit</button>
                  <button onClick={() => handleDelete(log._id)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No nutrition logs found</p>
      )}
    </div>
  );
};

export default NutiLogs;
