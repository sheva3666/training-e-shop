import React, { useState } from "react";
import "./RegisterForm.scss";

const RegisterForm = ({ onRegister, openLogin }) => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Fill it");
  const [passwordError, setPasswordError] = useState("Fill it");
  const [checkBox, setCheckBox] = useState(false);
  const [registerUser, setRegisterUser] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(registerUser);
    setRegisterUser({
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      password: "",
    });
    setRegisterSuccess(false);
  };

  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const validEmail = (e) => {
    setRegisterUser({ ...registerUser, email: e.target.value });
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("invalid email");
    } else {
      setEmailError("");
    }
  };

  const validPassword = (e) => {
    setRegisterUser({ ...registerUser, password: e.target.value });

    if (e.target.value.length <= 8) {
      setPasswordError("Password has to be at least 8 characters long");
    } else {
      if (!/[0-9]/.test(e.target.value)) {
        setPasswordError("Password must contain numbers");
      } else {
        if (!/[a-zA-Z]/.test(e.target.value)) {
          setPasswordError("Password must contain letters");
        } else {
          setPasswordError("");
        }
      }
    }
  };

  return (
    <form data-testid="register-form" onSubmit={handleSubmit}>
      {!registerSuccess ? (
        <div className="form">
          <div className="form__group">
            <h5 className="form__group-title">First name *</h5>
            <input
              data-testid="register-firstName"
              value={registerUser.firstName}
              onChange={(e) =>
                setRegisterUser({ ...registerUser, firstName: e.target.value })
              }
              className="form__group-input"
              type="text"
              required
            />
          </div>
          <div className="form__group">
            <h5 className="form__group-title">Last name *</h5>
            <input
              data-testid="register-lastName"
              value={registerUser.lastName}
              onChange={(e) =>
                setRegisterUser({ ...registerUser, lastName: e.target.value })
              }
              className="form__group-input"
              type="text"
              required
            />
          </div>
          <div className="form__group">
            <h5 className="form__group-title">Address *</h5>
            <input
              data-testid="register-address"
              value={registerUser.address}
              onChange={(e) =>
                setRegisterUser({ ...registerUser, address: e.target.value })
              }
              className="form__group-input"
              type="text"
              required
            />
          </div>
          <div className="form__group">
            <h5 className="form__group-title">Email *</h5>
            <input
              data-testid="register-email"
              onBlur={(e) => blurHandler(e)}
              name="email"
              value={registerUser.email}
              onChange={(e) => validEmail(e)}
              className="form__group-input"
              type="email"
              required
            />

            {emailDirty && emailError && (
              <div style={{ color: "red", fontSize: "10px", marginTop: "3px" }}>
                {emailError}
              </div>
            )}
          </div>
          <div className="form__group">
            <h5 className="form__group-title">Password *</h5>
            <input
              data-testid="register-password"
              onBlur={(e) => blurHandler(e)}
              name="password"
              value={registerUser.password}
              onChange={(e) => validPassword(e)}
              className="form__group-input"
              type="password"
              required
            />

            {passwordDirty && passwordError && (
              <div style={{ color: "red", fontSize: "10px", marginTop: "3px" }}>
                {passwordError}
              </div>
            )}
          </div>
          <div className="form__group-checkbox">
            <input
              data-testid="register-checkbox"
              checked={checkBox}
              onChange={() => {
                setCheckBox(!checkBox);
              }}
              type="checkbox"
            />
            <h5>Largee with everything</h5>
          </div>
          <input
            data-testid="register-btn"
            className="form__group-btn"
            type="submit"
          />
        </div>
      ) : (
        <div className="register-success">
          <p>Registration successful, please login.</p>
          <button onClick={openLogin} className="form__group-btn">
            Login
          </button>
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
