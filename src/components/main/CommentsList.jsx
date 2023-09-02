import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../api/fetchComments.js';

const { id }  = useParams();

function CommentsList({ fetchComments }) {
    const [comments, setComments] = React.useState([]);
    
    React.useEffect(() => {
        fetchComments(id)
        .then(comments => setComments(comments));
    }, [id]);
    
    // render
    
    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment, index) => (
                <li key={index}>
                    <strong>{comment.author}:</strong>{comment.commentText}
                    <p>{comment.publishedAt}</p>
                    <hr />
                </li>))}
            </ul>
        </div>
    );
}

export default CommentsList;