import React, { useState } from 'react';

function CommentForm({ onAddComment }) {
    const [commentText, setCommentText] = useState('');
    const [author, setAuthor] = useState('');

    const handleCommentSubmit =(event) => {
        event.preventDefault();
        if (!author.trim() || !commentText.trim()) {
            return;
        }

        const newComment = {
            author,
            text: commentText,
            publishedAt: new Date().toISOString(),
        };
        onAddComment(newComment);
        setAuthor('');
        setCommentText(''); 
};

return (
    <div className="Add a Comment">
         <h3>Add a comment</h3>
        <form onSubmit={handleCommentSubmit}>
        <div>
        <label 
            htmlFor="author">Author:</label>
        <input
            id="author"
            type="text"
            placeholder="Your name"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            />
        </div>
        <div>
        <label 
            htmlFor="comment">Comment:</label>
        <textarea
            id="comment"
            placeholder="Say something..."
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            />
        </div>
        <button type="submit">Add Comment</button>
        </form>
    </div>
);
}

export default CommentForm;