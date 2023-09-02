import React from 'react'
import heartSolid from '../../assets/heart-solid.svg';
import heartCrackSolid from '../../assets/heart-crack-solid.svg';

function LikenDislikeButtons({ likes, dislikes, onLike, onDislike }) {
    
    const totalVotes = likes + dislikes;
    const likePercentage = (likes / totalVotes) * 100 || 0;
    const dislikePercentage = (dislikes / totalVotes) * 100 || 0;

    return (
        <div className="liken-dislike-buttons">
            <div className="liken-dislike-buttons__like">
                <button onClick={onLike}><img src={heartSolid} alt="heart" /></button>
                <p>Likes: {likePercentage.toFixed(2)}%</p>
            </div>
            <div className="liken-dislike-buttons__dislike">
                <button onClick={onDislike}><img src={heartCrackSolid} alt ="broken-heart"/></button>
                <p>Dislikes: {dislikePercentage.toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default LikenDislikeButtons;