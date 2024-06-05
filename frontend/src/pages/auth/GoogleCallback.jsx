import { useEffect } from "react";
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
    }
  }, [navigate]);

  return <div>Loading...</div>;
}

export default GoogleCallback;
