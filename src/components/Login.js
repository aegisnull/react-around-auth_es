import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <h2 className="modal__title login__title">Login</h2>
        <input
          className="modal__input login__input"
          type="email"
          placeholder="Email"
        />
        <input
          className="modal__input login__input"
          type="password"
          placeholder="Password"
        />
        <button className="modal__form-submit login__submit">Log in</button>
        <Link to="/signup" className="login__link">
          Not a member yet? Sign up here!
        </Link>
      </form>
    </div>
  );
}

export default Login;
