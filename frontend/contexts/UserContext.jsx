import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";

// Create the UserContext
const UserContext = createContext();

// UserProvider component to provide user and authentication context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const response = await axios.get("http://localhost:3000/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = response.data.user;
          // Check if user avatar is undefined
          if (!userData.avatar) {
            // If avatar is undefined, set user without avatar
            const userWithoutAvatar = { ...userData, avatar: null };
            setUser(userWithoutAvatar);
          } else {
            setUser(userData);
          }
        }
      } catch (error) {
        console.error("Failed to fetch user", error);
      }
    };

    fetchUser();
  }, [token]);

  // Update axios defaults and localStorage when token changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  // Memoized value of the combined context
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      token,
      setToken,
    }),
    [user, token]
  );

  // Provide the context to the children components
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

export default UserProvider;
