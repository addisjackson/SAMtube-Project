import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import fetchVideos from './../../api/constants'

export default function VideoCard({ video }) {


  return (
    <Link to={`/show/${video.videoId}`}>
      <div className="card">
        <img className="card-img-top img-responsive"
          src={video.thumbnail}
          alt={video.title}
        />
        <div className="card-body d-block">
          <h6 className="card-title text-truncate">{video.title}</h6>
          <p className="card-text">{video.description}</p>
        </div>
      </div>
    </Link>
  );
}
