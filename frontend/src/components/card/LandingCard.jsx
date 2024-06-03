import { Link } from "react-router-dom";

function LandingCard({ image }) {
  return (
    <Link className="relative w-full max-w-sm mx-auto lg:mx-0">
      <img className="object-cover w-full h-auto mb-2" src={image} />
    </Link>
  );
}

export default LandingCard;
