import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayerLayout from './VideoPlayerLayout';
import LikenDislikeButtons from './LikenDislikeButtons';
import CommentsSection from './CommentsSection';
import VideoCardDescription from './VideoCardDescription';
import  { fetchVideoDetails, fetchVideos } from '../api/fetchVideos.js';   


function VideoDetail() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [video, setVideo] = useState([]);
    const [videoDetails, setVideoDetails] = useState([]);
    const { id } = useParams();

const handleLike = () => {
    setLikes(likes + 1);
}

const handleDislike = () => {
    setDislikes(dislikes + 1);
}


    useEffect(() => {
        async function fetchVideoDetails() {
            const { video, videoDetails } = await fetchVideoDetails(id);
            setVideo(video);
            setVideoDetails(videoDetails);
        }
        fetchVideoDetails();
    }, [id]);


    useEffect(() => {
        async function fetchComments() {
            const { comments }
            = await fetchComments(id);
            setComments(comments);
        }
        fetchComments();
    }, [id]);

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
        <VideoCardDescription
        video={video}
        />
        <CommentsSection comments={comments} videoId={video.id} />
    </div>
)
}

export default VideoDetail;