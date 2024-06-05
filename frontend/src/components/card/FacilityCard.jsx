import React from "react";

function FacilityCard({ icon, label }) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 border-2 rounded-sm shadow-md border-c1b">
      <span className="text-4xl material-icons">{icon}</span>
      <p className="mt-2 text-lg font-medium">{label}</p>
    </div>
  );
}

export default FacilityCard;
