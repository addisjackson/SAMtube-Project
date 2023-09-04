import React from "react";
import { FontAwesomeIcon } from './FontAwesomeIcon';
import { faHeart as solidHeart, faHeartBroken as heartCrack } from "./FontAwesomeIcon";

function LikenDislikeButtons({ likes, dislikes, onLike, onDislike }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] =useState(0);

  const totalVotes = likes + dislikes;
  const likePercentage = (likes / totalVotes) * 100 || 0;
  const dislikePercentage = (dislikes / totalVotes) * 100 || 0;

  const handleLike = () => {
    setLikes(likes = 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div>
      <button onClick={handleLike}><FontAwesomeIcon icon={solidHeart}  style={{ color: '#f70202' }} /></button>
      <button onClick={handleDislike}><FontAwesomeIcon icon={heartCrack} style={{ color: '#ff0000' }} /></button>
      <p>Likes: {likePercentage.toFixed(2)}%</p>
      <p>Dislikes: {dislikePercentage.toFixed(2)}%</p>
    </div>
  );
}

export default LikenDislikeButtons;
