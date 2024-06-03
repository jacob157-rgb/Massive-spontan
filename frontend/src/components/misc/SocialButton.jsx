import React from "react";

function navigate(url) {
  window.location.href = url;
}

async function handleGoogleLogin() {
  // const response = await fetch("http://localhost:3000/", { method: "post" });
  // const data = await response.json();
  // navigate(data.url);

  window.location.href = "http://localhost:3000/auth/google";
}

function SocialButton({ icon, label }) {
  return (
    <button
      onClick={handleGoogleLogin}
      className="flex items-center justify-center w-full h-auto p-2 text-center border-2 rounded-sm md:p-3 md:text-lg">
      <img className="w-8 h-8 mr-2" src={icon} alt="icon" />
      {label}
    </button>
  );
}

export default SocialButton;
