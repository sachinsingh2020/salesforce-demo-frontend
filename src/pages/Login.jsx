import React from "react";
import { getLoginUrl } from "../services/authService";

const Login = () => {
  const handleLogin = () => {
    window.location.href = getLoginUrl();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Salesforce OAuth (Web Server Flow)</h2>
      <button onClick={handleLogin}>Login with Salesforce</button>
    </div>
  );
};

export default Login;
