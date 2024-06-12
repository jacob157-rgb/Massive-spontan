import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";

const useGoogleAuthToken = () => {
  const location = useLocation();
  const { setToken } = useUser();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      setToken(token); // gunakan setToken dari context
    }
  }, [location, setToken]);
};

const AuthCallback = () => {
  const navigate = useNavigate();
  useGoogleAuthToken();

  useEffect(() => {
    // Redirect user to the desired page after saving the token
    navigate("/");
  }, [navigate]);

  return <div>Loading...</div>;
};

export default AuthCallback;
