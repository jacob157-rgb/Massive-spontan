function TrendingCard({ no, image, title, date }) {
  return (
    <div className="relative w-96">
      <div className="absolute right-0 z-10 flex items-center justify-center -top-7 w-14 h-14 bg-secondary">
        <h1 className="text-2xl font-semibold text-white">{no}</h1>
      </div>
      <img className="mb-2 w-96" src={image}/>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-xs">{date}</p>
    </div>
  );
}

export default TrendingCard;
// function TrendingCard({ no, image, title, date }) {
//     return (
//       <div className="relative w-96">
//         <div className="absolute right-0 z-10 flex items-center justify-center -top-7 w-14 h-14 bg-secondary">
//           <h1 className="text-2xl font-semibold text-white">{no}</h1>
//         </div>
//         <img className="mb-2 w-96" src={image}/>
//         <h2 className="text-lg font-bold">{title}</h2>
//         <p className="text-xs">{date}</p>
//       </div>
//     );
//   }
  