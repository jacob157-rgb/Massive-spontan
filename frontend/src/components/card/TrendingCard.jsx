import { Link } from "react-router-dom";

function TrendingCard({ no, image, title, date }) {
  return (
    <Link to="/event" className="flex justify-center">
      <div className="relative w-full max-w-sm">
        <div className="absolute right-0 z-10 flex items-center justify-center -top-7 w-14 h-14 bg-secondary">
          <h1 className="text-2xl font-semibold text-white">{no}</h1>
        </div>
        <img
          className="object-cover w-full h-auto mb-2"
          src={image}
          alt={title}
        />
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-xs">{date}</p>
      </div>
    </Link>
  );
}

export default TrendingCard;
