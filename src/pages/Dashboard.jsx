import React from "react";

const Dashboard = () => {
  const token = localStorage.getItem("access_token");
  const instanceUrl = localStorage.getItem("instance_url");

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Dashboard</h2>
      <p>✅ Successfully Authenticated</p>

      <p>
        <strong>Instance URL:</strong> {instanceUrl}
      </p>
      <p>
        <strong>Access Token:</strong> {token}
      </p>
    </div>
  );
};

export default Dashboard;
