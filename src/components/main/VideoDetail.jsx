import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayerLayout from "./VideoPlayerLayout"; // Replace with your actual component
import LikenDislikeButtons from "./LikenDislikeButtons"; // Replace with your actual component
import CommentsSection from "./CommentsSection"; // Replace with your actual component
import { fetchComments } from '../../api/constants'

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null)
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const { videoId } = useParams(); // Get the videoId from the URL

  useEffect(() => {
    fetchVideos
  })
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const video = {
    id: videoId, // Assuming you have an object with video details
    title: "Sample Video",
    description: "This is a sample video.",
    // Other video properties
  };

  return (
    <div>
      <VideoPlayerLayout video={video} />
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <LikenDislikeButtons
        likes={likes}
        dislikes={dislikes}
        onLike={handleLike}
        onDislike={handleDislike}
      />
      <CommentsSection videoId={video.id} />
    </div>
  );
}

export default VideoDetail;





