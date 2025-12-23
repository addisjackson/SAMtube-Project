import { useState, useEffect } from "react";
import { getStatistics } from "../../api/fetch";
import UseLikedVideos from "./useLikedVideos";
import replaceChar from "./replaceChar";

export default function VideoCardDescription({ videoId }) {
  const [videoStats, setVideoStats] = useState(null);
  const [snippet, setSnippet] = useState(null);
  const { toggleLike, isLiked } = UseLikedVideos();
  const liked = isLiked(videoId);

  useEffect(() => {
    if (!videoId) return;

    getStatistics(videoId)
      .then((json) => {
        if (json.items?.length) {
          setVideoStats(json.items[0].statistics);
          setSnippet(json.items[0].snippet);
        }
      })
      .catch(console.error);
  }, [videoId]);

  if (!videoStats || !snippet) return null;

  return (
    <div className="card-body video-stats-container">
      <h6 className="card-title">{replaceChar(snippet.title)}</h6>
      <p className="card-text text-muted">{replaceChar(snippet.description)}</p>

      <div className="video-stats">
        <span>👁 {Number(videoStats.viewCount || 0).toLocaleString()}</span>
        <span>📖 {Number(videoStats.commentCount || 0).toLocaleString()}</span>
        <span>👍 {Number(videoStats.likeCount || 0).toLocaleString()}</span>
        <button className={`like-btn ${liked ? "liked" : ""}`} onClick={() => toggleLike(videoId)}>
          {liked ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
