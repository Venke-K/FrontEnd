import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
      navigate("/");
    }
  };

  return (
    <>
      <nav className="navbar-content">
        <div className="logo">
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
        </div>
        <ul className="nav-links">
          <li>
            <Link
              to="/fitness-goals"
              style={{
                backgroundImage:
                  "src/assets/images/joggers-running-on-bridge-arroyo-seco-park-pasadena-royalty-free-image-1664218312.jpg",
              }}
            >
              Goals
            </Link>
          </li>
          <li>
            <Link to="/workouts">Workouts</Link>
          </li>
          <li>
            <Link to="/nutrition">Nutrition</Link>
          </li>
          <li>
            <Link to="/insights">Insights</Link>
          </li>
          <button
            className="logout"
            onClick={handleLogout}
            style={{
              backgroundColor: "#f44336",
              fontSize: "14px",
              padding: "5px 10px",
              borderRadius: "4px",
              border: "none",
            }}
          >
            Logout
          </button>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
