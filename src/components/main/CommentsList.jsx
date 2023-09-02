import React from "react";

function CommentsList({ comments }) {
  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.author}:</strong> {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
