import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentsList';
import { Link } from 'react-router-dom'

function CommentsSection({ videoId }) {
    const [comments, setComments] = useState([]);
  
    return (
        <div className="comments">
            <h2>Comments</h2>
            <CommentList comments={comments} />
            <Link to={<CommentForm />}>
                <button>Add Comment</button>
            </Link>
        </div>    
    );
}

export default CommentsSection;
