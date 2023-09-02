import React, { useState } from "react";

function CommentForm({ onAddComment }) {
  const [author, setAuthor] = useState("");
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    const comment = { author, text: commentText };
    onAddComment(comment);
    setAuthor("");
    setCommentText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Your Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Your Comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={handleCommentSubmit}>Add Comment</button>
    </div>
  );
}

export default CommentForm;
