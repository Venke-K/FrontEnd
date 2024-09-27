import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Landing() {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand className="text-bold">
            <em
              style={{
                color: "#FF5733",
                fontSize: "30px",
                fontWeight: "bolder ",
              }}
            >
              FIT
            </em>
            <em style={{ color: "gray", fontSize: "30px" }}>TRACK</em>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <Nav className="nav-links-right">
              <Link to="/login" className="nav-link link-hover fw-bold mx-4">
                Login
              </Link>
              <Link to="/register" className="nav-link link-hover fw-bold">
                SignUp
              </Link>
              <Link to="/about" className="nav-link link-hover fw-bold mx-4">
                About
              </Link>
              <Link to="/contact" className="nav-link link-hover fw-bold ">
                ContactUs
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main -content">
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Fit-Track!</h1>
            <p>
              Your personal fitness companion. Track your workouts, monitor your
              progress, and achieve your goals.
            </p>
            <img
              src="\assets\images\shutterstock_383084119_1000x.webp"
              alt="Fitness Image"
              className="hero-image"
            />
          </div>
        </section>

        <section className="features">
          <div className="feature-item">
            <img
              src="src\assets\images\running-icon-illustration-symbol-vector.jpg"
              alt="Icon 1"
            />
            <h3>Track Workouts</h3>
            <p>Log your exercises and monitor your performance over time.</p>
          </div>
          <div className="feature-item">
            <img
              src="\assets\images\fitness-goals-icon-achieving-your-260nw-2306369233.webp"
              alt="Icon 2"
            />
            <h3>Set Goals</h3>
            <p>
              Define your fitness goals and track your progress towards
              achieving them.
            </p>
          </div>
          <div className="feature-item">
            <img
              src="src\assets\images\KHNI-2024-Trends-circle.png"
              alt="Icon 3"
            />
            <h3>Monitor Nutrition</h3>
            <p>
              Keep track of your diet and ensure you’re meeting your nutritional
              needs.
            </p>
          </div>
        </section>

        <section className="services">
          <div className="services-container">
            <h2>Our Services</h2>
            <div className="service-item">
              <img
                src="\assets\images\connected-workout-abstract-concept-vector-illustration-digitally-systems-create-personalized-program-fitness-equipment-smart-gym-262138448.webp"
                alt="Workout Icon"
              />
              <h3>Personalized Workouts</h3>
              <p>
                Customized workout plans tailored to your fitness level and
                goals.
              </p>
            </div>
            <div className="service-item">
              <img src="\assets\images\757012.png" alt="Nutrition Icon" />
              <h3>Nutrition Guidance</h3>
              <p>
                Get advice on diet and nutrition to complement your fitness
                journey.
              </p>
            </div>
            <div className="service-item">
              <img
                src="\assets\images\track-your-progress-business-color-260nw-2265795709.webp"
                alt="Progress Icon"
              />
              <h3>Progress Tracking</h3>
              <p>Monitor your progress with detailed reports and insights.</p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonial-container">
            <div className="testimonial-item">
              <img src="\assets\images\Untitled.jpg" alt="Alex R. Photo" />
              <p>
                `Fit-Track has transformed my fitness journey! With detailed
                progress tracking, personalized plans, and expert advice, I feel
                more motivated and in control of my health goals. It’s like
                having a personal trainer and nutritionist in my pocket.`
              </p>
              <h4>- Jacob R.</h4>
            </div>
            <div className="testimonial-item">
              <img src="\assets\images\images.jpg" alt="kelly K. Photo" />
              <p>
                `I love how easy it is to log my workouts and track my nutrition
                with Fit-Track. The app`s user-friendly interface and detailed
                insights help me stay on track and adjust my routines. It`s
                intuitive, effective, and a game-changer for anyone serious
                about fitness.`
              </p>
              <h4>- Kelly K.</h4>
            </div>
            <div className="testimonial-item">
              <img src="\assets\images\pic.jpg" alt="hanuman M. Photo" />
              <p>
                `The progress reports and tailored feedback from Fit-Track are
                incredibly motivating. Since using the app, I`ve achieved so
                much more with my workouts. It’s a comprehensive tool that helps
                me set, track, and smash my fitness goals with ease.`
              </p>
              <h4>- Hanuman M.</h4>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-container">
            <p>&copy; 2024 Fit-Track. All rights reserved.</p>
            <div className="footer-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/contact">Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Landing;
