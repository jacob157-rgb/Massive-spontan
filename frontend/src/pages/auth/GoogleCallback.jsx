import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoogleCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const getTokenFromUrl = (url) => {
      const urlParams = new URLSearchParams(new URL(url).search);
      return urlParams.get("token");
    };

    const token = getTokenFromUrl(window.location.href);
    if (token) {
      localStorage.setItem("token", token);
      navigate("/");
    } else {
      navigate("/login"); // Navigasi ke halaman login jika tidak ada token
    }
  }, [navigate]);

  return <div>Loading...</div>;
}

export default GoogleCallback;
