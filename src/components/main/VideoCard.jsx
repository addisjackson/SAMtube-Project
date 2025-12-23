import { Link } from "react-router-dom";
import VideoCardDescription from "./VideoCardDescription";

export function VideoCard({ video }) {
  return (
    <div className="video-card">
      <Link to={`/show/${video.id.videoId}`}>
        <div className="thumbnail-wrapper">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </div>
        <VideoCardDescription video={video} />
      </Link>
    </div>
  );
}
