import React, { useState, useEffect } from 'react';
import { fetchVideos } from '../../api/constants';

export default function VideoDescription({ video }) {
    const [videoStats, setVideoStats] = useState({
        viewCount: '',
        likeCount: '',
        favoriteCount: '',
        commentCount: ''
    });

    useEffect(() => {
        fetchVideos(video.id.videoId)
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
            <p className="card-text">DisLikes: {dislikes}</p>
        </div>
    );
}
