import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ isLoggedIn, children }) {
  if (isLoggedIn === false) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

export default ProtectedRoute;
