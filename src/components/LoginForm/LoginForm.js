import React, { useState } from "react";
import "./LoginForm.scss";

const LoginForm = ({ onLogin, error }) => {
  const [checkBox, setCheckBox] = useState(false);
  const [details, setDetails] = useState({ email: "", password: "" });

  const handlerSubmit = (e) => {
    e.preventDefault();

    onLogin(details);
  };
  return (
    <form onSubmit={handlerSubmit}>
      <div className="form">
        <div className="form__group">
          <h5 className="form__group-title">Email*</h5>
          <input
            data-testid="login-email"
            className="form__group-input"
            type="email"
            placeholder="your@email.com"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
            required
          />
        </div>
        <div className="form__group">
          <h5 className="form__group-title">Password*</h5>
          <input
            data-testid="login-password"
            className="form__group-input"
            type="password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            required
          />
          {error !== "" ? (
            <div
              style={{ color: "red", fontSize: "10px", marginTop: "3px" }}
              className="error"
            >
              {error}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form__group-checkbox">
          <input
            data-testid="login-checkbox"
            checked={checkBox}
            onChange={() => {
              setCheckBox(!checkBox);
            }}
            type="checkbox"
          />
          <h5>Keep me logged in</h5>
        </div>
        <input type="submit" className="form__group-btn" />
      </div>
    </form>
  );
};

export default LoginForm;
