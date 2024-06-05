import React from "react";
import TextUnderline from "../misc/TextUnderline";
import FacilityCard from "../card/FacilityCard";

function Facilities() {
  const facilities = [
    { icon: "wc", label: "WC" },
    { icon: "mosque", label: "Mushola" },
    { icon: "local_parking", label: "Tempat Parkir" },
    { icon: "local_hospital", label: "Klinik" },
    { icon: "restaurant", label: "Restoran" },
    { icon: "shopping_cart", label: "Merchandise" },
  ];

  return (
    <div className="my-5">
      <TextUnderline label="Fasilitas" />
      <div className="grid grid-cols-2 gap-3 my-5 md:grid-cols-3">
        {facilities.map((facility, index) => (
          <FacilityCard
            key={index}
            icon={facility.icon}
            label={facility.label}
          />
        ))}
      </div>
    </div>
  );
}

export default Facilities;
