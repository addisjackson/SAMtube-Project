import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentsList';

export default function CommentsSection({ videoId, onAddComment }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchCommentsData = async () => {
            try {
                const commentsData  = await fetchComments(viedoId);
                setComments(commentsData)
            } catch (error) {
                console.error('Error fetching comments data', error);
            }
            }
   
    fetchCommentsData();
    }, [videoId]);

    onAddComment = (comment) => {
        setComments([...comments, comment]);
    }

    return (
        <div className="comments-section">
            <CommentForm onAddComment={onAddComment} />
            <CommentList comments={comments} />
        </div>
    )

}