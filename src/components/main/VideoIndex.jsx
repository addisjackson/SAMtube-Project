import React from "react";
import { VideoCard } from "./VideoCard";

export default function VideoIndex({ videos }) {
  return (
    <div className="row">
      {videos.map((video) => (
        <div className="col-md-3 p-2" key={video.id.videoId}>
          <div className="card h-100 w-100">
            <VideoCard video={video} />
          </div>
        </div>
      ))}
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import { getStatistics } from '../../api/fetch';

export default function VideoCardDescription({ video }) {
    const [videoStats, setVideoStats] = useState({
        viewCount: '',
        likeCount: '',
        favoriteCount: '',
        commentCount: ''
    });

    useEffect(() => {
        getStatistics(video.id.videoId)
            .then(response => response.json())
            .then(json => {
                if (json.items && json.items.length > 0) {
                    setVideoStats(json.items[0].statistics);
                } else {
                    console.error('No statistics data found.');
                }
            })
            .catch(err => console.error(err));
    }, [video.id.videoId]);

    return (
        <div className="card-body d-block">
            <h6 className="card-title text-truncate">{video.snippet.title}</h6>
            <p className="card-text">{video.snippet.description}</p>
            <p className="card-text">View Count: {videoStats.viewCount}</p>
            <p className="card-text">Like Count: {videoStats.likeCount}</p>
        </div>
    );
}