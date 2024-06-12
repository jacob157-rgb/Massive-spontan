import React, { useState } from "react";
import NavItem from "./NavItem";
import { useUser } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const { user, setToken } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Clear token from local storage
    setToken(null);
    // Redirect to home page
    navigate("/");
    window.location.reload();
  };

  const getInitials = (name) => {
    if (!name) return ""; // Handle case where name is undefined
    const names = name.split(" ");
    const firstNameInitial = names[0] ? names[0][0] : ""; // Ambil inisial dari nama depan
    const lastNameInitial =
      names.length > 1 && names[names.length - 1]
        ? names[names.length - 1][0]
        : ""; // Ambil inisial dari nama belakang jika ada
    return (firstNameInitial + lastNameInitial).toUpperCase(); // Gabungkan inisial dari nama depan dan belakang
  };

  const userInitials = user ? getInitials(user.dataValues.nama) : "";

  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-5">
      <NavItem to="/explore" label="Jelajahi" icon="explore" />
      <NavItem to="/event/add" label="Buat Event" icon="calendar_add_on" />
      {user ? (
        <div className="relative">
          <button
            onClick={handleAvatarClick}
            className="flex items-center gap-2 focus:outline-none">
            <NavItem to="/dashboard" label="Dashboard" />
            <div className="w-8 h-8 overflow-hidden bg-gray-300 rounded-full">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="w-full h-full"
                />
              ) : (
                <span className="flex items-center justify-center w-full h-full bg-white gray-500 text-">
                  {userInitials}
                </span>
              )}
            </div>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 z-10 w-32 py-1 bg-white rounded-sm shadow-md top-10">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left hover:bg-gray-200">
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <NavItem to="/auth" label="Sign In/Register" icon="login" />
      )}
    </div>
  );
}

export default Navigation;
