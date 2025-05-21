import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Welcome to Weather App</h2>
      <button onClick={() => loginWithRedirect()}>Login with Auth0</button>
    </div>
  );
};

export default LoginPage;
