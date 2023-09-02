import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function CommentsSection({ videoId }) {
    const [comments, setComments] = useState([]);

    const getComments = async () => {
        try {
            const response = await fetch(`/api/comments/${videoId}`); // Replace with your API endpoint
            const data = await response.json();
            setComments(data.items);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const handleAddComment = async (comment) => {
        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: comment,
                    videoId: videoId,
                    createdAt: Date.now(),
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setComments([...comments, data]);
            } else {
                console.error('Error adding comment');
            }
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    useEffect(() => {
        getComments();
    }, [videoId]);

    return (
        <div>
            <CommentForm videoId={videoId} onAddComment={handleAddComment} />
            <CommentList comments={comments} />
        </div>
    );
}

export default CommentsSection;
