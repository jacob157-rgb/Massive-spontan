function LandingCard({ image }) {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      <img className="object-cover w-full h-auto mb-2" src={image} />
    </div>
  );
}

export default LandingCard;
