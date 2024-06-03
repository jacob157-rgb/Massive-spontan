import { Link } from "react-router-dom";

function KotaCard({ image, kota }) {
  return (
    <Link className="relative w-full max-w-sm mx-auto lg:mx-0">
      <img className="object-cover w-full h-auto mb-2" src={image} />
      <div className="absolute w-3/5 px-2 py-0.5 text-center text-white -left-2 bottom-5 bg-secondary">
        {kota}
      </div>
    </Link>
  );
}

export default KotaCard;
