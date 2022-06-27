import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import "./HomePage.scss";

const HomePage = () => {
  const [user, setUser] = useUser();
  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("registerUsers")) || []
  );
  const [error, setError] = useState("");

  const [isLoginScreen, setIsLoginScreen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (user.email !== "") {
      navigate("/shoppage");
    }
  }, [user.email, navigate]);

  useEffect(() => {
    localStorage.setItem("registerUsers", JSON.stringify(registerUsers));
    console.log("registerUser", registerUsers);
  }, [registerUsers]);

  const onRegister = (newUser) => {
    setRegisterUsers((prev) => [...prev, newUser]);
  };

  const onLogin = (details) => {
    const registered = registerUsers.find(
      (registerUser) => registerUser.email === details.email
    );

    if (registered === undefined || registered.password !== details.password) {
      setError("Invalid e-mail or password!!!");
    } else {
      setUser({ ...user, email: details.email });
    }
  };

  const openLogin = (e) => {
    e.preventDefault();
    setIsLoginScreen(true);
  };

  return (
    <div className="login">
      <div>
        <h2 className="title">Welcome!</h2>
        <div className="btns">
          <button className="login-btn" onClick={openLogin}>
            Login
          </button>
          <button className="login-btn" onClick={() => setIsLoginScreen(false)}>
            Register
          </button>
        </div>
        {isLoginScreen === true ? (
          <LoginForm onLogin={onLogin} error={error} />
        ) : (
          <RegisterForm onRegister={onRegister} openLogin={openLogin} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
