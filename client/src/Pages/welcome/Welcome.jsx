import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    localStorage.setItem("isLogged", true);
    window.dispatchEvent(new Event("storage"));
    navigate("/home");
  };

  return (
    <div className="welcomeContainer">
      <div className="welcomeWrapper">
        <div className="welcomeMsg">
          <h1>Welcome to Coligo !</h1>
        </div>
        <Link to="/home" className="link">
          <button className="loginBtn" onClick={loginHandler}>
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
