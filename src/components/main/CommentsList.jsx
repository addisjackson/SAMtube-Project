import React from "react";
import { fetchComments } from '../../api/fetchComments.js'
import { useParams } from "react-router-dom";
import { videoData } from "../../api/constants.js"

function CommentsList({ comments, videoId }) {

  fetchComments(videoId);
  const comments = { commentText,
                      commentAuthor,
                      publishedAt
  }
  const {videoId} = useParams();
  
  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={videoId}>
            <strong>{commentAuthor}:</strong> {commentText}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
