import React from "react";

function LikenDislikeButtons({ likes, dislikes, onLike, onDislike }) {
  const totalVotes = likes + dislikes;
  const likePercentage = (likes / totalVotes) * 100 || 0;
  const dislikePercentage = (dislikes / totalVotes) * 100 || 0;

  return (
    <div>
      <button onClick={onLike}><i class="fa-solid fa-heart fa-beat fa-2xs" style="color: #f70202;"></i></button>
      <button onClick={onDislike}><i class="fa-solid fa-heart-crack fa-beat-fade" style="color: #ff0000;"></i></button>
      <p>Likes: {likePercentage.toFixed(2)}%</p>
      <p>Dislikes: {dislikePercentage.toFixed(2)}%</p>
    </div>
  );
}

export default LikenDislikeButtons;
