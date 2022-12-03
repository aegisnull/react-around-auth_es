import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth">
      <form className="auth__form">
        <h2 className="modal__title auth__title">Register</h2>
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
        <button className="modal__form-submit auth__submit">Sign up</button>
        <Link to="/signin" className="auth__link">
          Already a member? Log in here!
        </Link>
      </form>
    </div>
  );
}

export default Register;
