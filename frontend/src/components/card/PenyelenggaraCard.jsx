import React from "react";
import TextUnderline from "../misc/TextUnderline";

function PenyelenggaraCard() {
  return (
    <div className="py-5">
      <TextUnderline label="Detail" />
      <div className="w-full h-auto my-5 border-2 rounded-sm shadow-md border-c1b">
        <div className="flex items-center w-full p-8 border-b border-black">
          <img
            className="w-1/5 h-auto drop-shadow-md"
            src="/src/assets/img/event/penyelenggara.png"
            alt=""
          />
          <div className="flex-col pl-3">
            <p className="font-medium">Penyelenggara</p>
            <p className="text-xl font-bold">FLASHBACK motion</p>
          </div>
        </div>
        <div className="flex-col items-center w-full p-8">
          <p className="pb-5 text-2xl font-bold">
            FLASHBACK motion - Enchanting
          </p>
          <p className="flex items-center gap-3 py-2 text-xl font-medium">
            <span className="p-1 rounded-sm shadow-sm text-primary bg-abu material-icons">
              calendar_month
            </span>
            28 Jul 2024
          </p>
          <p className="flex items-center gap-3 py-2 text-xl font-medium">
            <span className="p-1 rounded-sm shadow-sm text-primary bg-abu material-icons">
              schedule
            </span>
            18:00 - 22:00 WIB
          </p>
          <p className="flex items-center gap-3 py-2 text-xl font-medium">
            <span className="p-1 rounded-sm shadow-sm text-primary bg-abu material-icons">
              location_on
            </span>
            Plenary Hall, Jakarta
          </p>
        </div>
      </div>
    </div>
  );
}

export default PenyelenggaraCard;
