import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>Checking authentication...</p>;
  if (!isAuthenticated) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;
