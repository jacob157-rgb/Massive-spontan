import { Link } from "react-router-dom";

function EventBanner() {
  return (
    <div className="relative w-full h-44 md:h-auto">
      <img
        className="object-cover object-center w-full h-full"
        src="/src/assets/img/carousel/carousel3.png"
        alt="Event"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-5 bg-black bg-opacity-50 md:px-32">
        <div className="text-white">
          <p className="text-xs md:text-sm">
            <Link to="/" className="hover:underline">
              Beranda
            </Link>{" "}
            /{" "}
            <Link to="/event" className="hover:underline">
              Event
            </Link>{" "}
            / FLASHBACK motion - Enchanting
          </p>
        </div>
        <div className="text-white">
          <p className="text-sm font-light">Konser Musik</p>
          <p className="text-sm font-extrabold md:text-4xl">
            FLASHBACK motion - Enchanting
          </p>
          <div className="flex items-center">
            <span className="text-yellow-400 material-icons">star</span>
            <p className="ml-2 text-sm md:text-base">4.9</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventBanner;
