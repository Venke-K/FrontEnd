import react from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const NutritionForm = () => {
  const initialValues = {
    mealType: "",
    meal: "",
    quantity: 1,
    calories: 0,
  };

  const mealOptions = {
    breakfast: { eggs: 155, toast: 75 },
  
    lunch: { salad: 120, chicken: 250 },
    snacks: { apple: 95, chips: 150 },
    dinner: { pasta: 350, steak: 450 },
  };



  mealOptions.breakfast = {
    idli: 200,
    poha: 250,
    aloo_paratha: 350,
    masala_dosa: 300,
    upma: 250,
    chole_bhature: 400,
    pesarattu: 220,
    rava_dosa: 270,
    misal_pav: 350,
    uttapam: 280,
    sabudana_khichdi: 300,
    thepla: 250,
    moong_dal_cheela: 180,
    vada_pav: 300,
    puri_aloo_subzi: 400
  };

  mealOptions.lunch = {
    dal_tadka: 350,
    palak_paneer: 400,
    rajma_rice: 380,
    chicken_curry: 450,
    sambar_rice: 350,
    veg_biryani: 420,
    baingan_bharta: 300,
    paneer_butter_masala: 500,
    fish_curry: 400,
    aloo_gobi: 350,
    matar_paneer: 450,
    bhindi_masala: 300,
    keema_curry: 400,
    chicken_biryani: 500,
    dal_makhani: 450
  };


  mealOptions.snacks = {
    bhel_puri: 150,
    samosa: 200,
    roasted_chana: 120,
    dhokla: 180,
    sev_puri: 250,
    pakoras: 200,
    murukku: 150,
    masala_peanuts: 180,
    pani_puri: 150,
    aloo_tikki: 200,
    kachori: 250,
    masala_corn: 100,
    sprouts_salad: 100,
    khakra: 180,
    pav_bhaji: 300
  };


  mealOptions.dinner = {
    tandoori_chicken: 400,
    methi_malai_paneer: 450,
    malabar_fish_curry: 450,
    veg_pulao: 380,
    kadai_paneer: 400,
    butter_chicken: 500,
    dal_fry: 400,
    bhindi_fry: 350,
    chicken_tikka_masala: 500,
    aloo_matar: 350,
    lamb_curry: 550,
    chana_masala: 400,
    paneer_tikka: 350,
    fish_fry: 450,
    veg_handi: 420
  };

  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token", token); // Fetch token from storage
      const response = await axios.post(
        "http://localhost:5000/api/nutrition",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in Authorization header
          },
        }
      );
      console.log("Nutrition log added:", response.data);
    } catch (error) {
      console.error("Failed to add Nutrition log", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.mealType) {
          errors.mealType = "Meal type is required";
        }
        if (!values.meal) {
          errors.meal = "Meal is required ";
        }
        return errors;
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="nutrition-form">
          <div>
            <label htmlFor="meal-type">Meal Type</label>
            <Field
              as="select"
              name="mealType"
              onChange={(e) => {
                setFieldValue("mealType", e.target.value);
                setFieldValue("meal", ""); // Reset meal when type changes
                setFieldValue("calories", 0);
              }}
            >
              <option value="">Select Meal Type</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="snacks">Snacks</option>
              <option value="dinner">Dinner</option>
            </Field>
            <ErrorMessage name="mealType" component="div" className="error" />
          </div>
          {values.mealType && (
            <div>
              <label htmlFor="meal">Meal</label>
              <Field
                as="select"
                name="meal"
                onChange={(e) => {
                  const selectedMeal = e.target.value;
                  const calories = mealOptions[values.mealType][selectedMeal];
                  setFieldValue("meal", selectedMeal);
                  setFieldValue("calories", calories);
                }}
              >
                <option value="">Select Meal</option>
                {Object.keys(mealOptions[values.mealType]).map((meal) => (
                  <option key={meal} value={meal}>
                    {meal} ({mealOptions[values.mealType][meal]} cal)
                  </option>
                ))}
              </Field>
              <ErrorMessage name="meal" component="div" className="error" />
            </div>
          )}
          <div>
            <label htmlFor="quantity">Quantity</label>
            <Field
              type="number"
              name="quantity"
              min="1"
              onChange={(e) => {
                setFieldValue("quantity", e.target.value);
                setFieldValue(
                  "calories",
                  mealOptions[values.mealType][values.meal] * e.target.value
                );
              }}
            ></Field>
          </div>
          <div>
            <label htmlFor="total-calories">Total Calories</label>
            <Field
              type="number"
              name="calories"
              value={values.calories}
              readOnly
            />
          </div>
          <button type="submit">Log Nutrition</button>
        </Form>
      )}
    </Formik>
  );
};

export default NutritionForm;
