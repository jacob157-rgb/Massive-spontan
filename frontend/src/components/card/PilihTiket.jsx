import React from "react";

function PilihTiket() {
  return (
    <>
      <div className="max-w-sm mx-auto bg-white border rounded-lg shadow-lg overflow-hidden p-4">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Tix Logo"
            className="w-10 h-10 mr-4"
          />
          <p className="text-lg">Pilih tiket di menu tiket</p>
        </div>
        <div className="mt-4">
          <button className="flex items-center bg-purple-500 text-white py-2 px-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-7.707a1 1 0 011.414 0l3-3a1 1 0 00-1.414-1.414l-1.293 1.293V7a1 1 0 10-2 0v3.586L7.707 8.293a1 1 0 00-1.414 1.414l3 3z"
                clipRule="evenodd"
              />
            </svg>
            Pilih Tiket terlebih dahulu
          </button>
        </div>
      </div>
    </>
  );
}

export default PilihTiket;
