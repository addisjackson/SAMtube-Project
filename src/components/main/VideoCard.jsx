import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export function VideoCard({ video }) {
  const [errMsg, setErrMsg] = useState(false);

  return (
    <Link to={`/show/${video.id.videoId}`}>
      <div className="card">
        <img
          src={`${video.snippet.thumbnails.high.url}`}
          className="card-img-top img-responsive"
          alt={video.snippet.title}
        />
        <div className="card-body d-block">
          <h6 className="card-title text-truncate">{video.snippet.title}</h6>
          <p className="card-text">{video.snippet.description}</p>
        </div>
      </div>
    </Link>
  );
}
