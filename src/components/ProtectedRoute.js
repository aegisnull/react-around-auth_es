import React from "react";
import { Route, redirect } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn, ...props }) {
  return (
    <Route {...props}>{isLoggedIn ? children : redirect("/signin")}</Route>
  );
}

export default ProtectedRoute;
