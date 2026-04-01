import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("sachin singh callback page");
    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");
    const error = params.get("error");

    if (error) {
      console.error("OAuth Error:", error);
      return;
    }

    if (code) {
      console.log("Authorization Code:", code);

      // Send to backend for token exchange
      fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Access Token Response:", data);

          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("instance_url", data.instance_url);

          navigate("/dashboard");
        })
        .catch((err) => console.error("Token Error:", err));
    }
  }, [navigate]);

  return <h2>Processing Salesforce Login...</h2>;
};

export default Callback;
