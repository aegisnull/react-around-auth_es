import React from "react";
import { Link } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";

function Login() {
  return (
    <div className="auth">
      <form className="auth__form">
        <h2 className="modal__title auth__title">Login</h2>
        <input
          className="modal__input auth__input"
          type="email"
          placeholder="Email"
        />
        <input
          className="modal__input auth__input"
          type="password"
          placeholder="Password"
        />
        <button className="modal__form-submit auth__submit">Log in</button>
        <Link to="/signup" className="auth__link">
          Not a member yet? Sign up here!
        </Link>
      </form>
      <InfoTooltip />;
    </div>
  );
}

export default Login;
