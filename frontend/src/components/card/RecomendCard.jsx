function RecomendCard({ image, title, date }) {
  return (
    <div className="relative w-96">
      <img className="mb-2 w-96" src={image}/>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-xs">{date}</p>
    </div>
  );
}

export default RecomendCard;