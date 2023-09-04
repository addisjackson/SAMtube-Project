import React, { useState } from "react";
import { postComment } from '../../api/constants.js'

function CommentForm({ postComment }) {
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const handleCommentSubmit = () => {
    const comment = { author: commentAuthor, text: commentText };
    postComment(comment);
    setComments([...comments, comment]);
    setCommentAuthor("");
    setCommentText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Your Name"
        value={commentAuthor}
        onChange={(e) => setCommentAuthor(e.target.value)}
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
