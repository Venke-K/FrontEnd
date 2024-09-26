import React from 'react';

const About = () => {
  return (

<div className="about-container">
  <h2>About Fitness Tracker</h2>
  <p>
    Fitness Tracker is an application designed to help you monitor and achieve your fitness goals.
    Track your workouts, nutrition, and progress over time with ease.
  </p>
  <div className="about-details">
    <h3>Our Mission</h3>
    <p>Our mission is to empower individuals to lead healthier lives through comprehensive tracking and actionable insights.</p>
    <h3>Features</h3>
    <ul>
      <li>Workout Logging: Keep track of your exercises and performance.</li>
      <li>Goal Setting: Define and monitor your fitness objectives.</li>
      <li>Nutrition Tracking: Record your meals and nutritional intake.</li>
      <li>Progress Reports: Analyze your fitness progress with detailed reports.</li>
    </ul>
    <h3>Contact Us</h3>
    <p>
      If you have any questions or need assistance, feel free to reach out to our support team at
      <a href="mailto:support@fittrack.com">support@fittrack.com</a>.
    </p>
  </div>
</div>



  );
};

export default About;