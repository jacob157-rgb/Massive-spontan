function RecomendCard({ image, title, date }) {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      <img className="object-cover w-full h-auto mb-2" src={image} alt={title} />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-xs">{date}</p>
    </div>
  );
}

export default RecomendCard;
