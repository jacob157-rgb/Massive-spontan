import React from "react";
import CommentCard from "../card/CommentCard";
import TextUnderline from "../misc/TextUnderline";


function Comment({ comments }) {
  const totalComments = comments.length;

  return (
    <div className="py-5">
      <TextUnderline label={`${totalComments} Komentar`} />
      {comments.map((comment, index) => (
        <CommentCard
          key={index}
          name={comment.name}
          rate={comment.rate}
          likes={comment.likes}
          dislikes={comment.dislikes}
          comment={comment.comment}
        />
      ))}
    </div>
  );
}

export default Comment;
