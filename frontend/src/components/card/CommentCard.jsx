import React, { useState } from "react";

function CommentCard({ name, rate, likes, dislikes, comment }) {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
      if (disliked) {
        setDislikeCount(dislikeCount - 1);
        setDisliked(false);
      }
    }
    setLiked(!liked);
  };

  const handleDislike = () => {
    if (disliked) {
      setDislikeCount(dislikeCount - 1);
    } else {
      setDislikeCount(dislikeCount + 1);
      if (liked) {
        setLikeCount(likeCount - 1);
        setLiked(false);
      }
    }
    setDisliked(!disliked);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`material-icons ${
            i < rate ? "text-yellow-400" : "text-gray-400"
          }`}>
          star
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col gap-2 p-4 my-1 bg-white border-b border-black rounded-sm shadow-md">
      <div className="flex items-center justify-between">
        <p className="font-bold">{name}</p>
        <div className="flex items-center">{renderStars()}</div>
      </div>
      <p className="text-gray-800">{comment}</p>
      <div className="flex items-center gap-4 mt-2">
        <button
          className={`flex items-center gap-1 ${
            liked ? "text-blue-600" : "text-gray-600"
          }`}
          onClick={handleLike}>
          <span className="material-icons">thumb_up</span>
          <span>{likeCount}</span>
        </button>
        <button
          className={`flex items-center gap-1 ${
            disliked ? "text-red-600" : "text-gray-600"
          }`}
          onClick={handleDislike}>
          <span className="material-icons">thumb_down</span>
          <span>{dislikeCount}</span>
        </button>
      </div>
    </div>
  );
}

export default CommentCard;
