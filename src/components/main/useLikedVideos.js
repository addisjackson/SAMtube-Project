import { useState, useEffect } from "react";

export default function UseLikedVideos() {
  const [likedVideos, setLikedVideos] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("likedVideos");
    if (saved) setLikedVideos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("likedVideos", JSON.stringify(likedVideos));
  }, [likedVideos]);

  const toggleLike = (videoId) => {
    setLikedVideos((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));
  };

  const isLiked = (videoId) => !!likedVideos[videoId];

  return { likedVideos, toggleLike, isLiked };
}
