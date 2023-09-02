import { useState, useEffect } from 'react';
import { getStatistics } from '../api/fetch';

export default function VideoCardDescription({video}){
    const [videoStats, setVideoStats] = useState({
        viewCount: "",
        likeCount: "",
        favoriteCount: "",
        commentCount: ""
    });

    useEffect(()=>{
        getStatistics(video.id.videoId)
            .then((response)=>response.json())
                .then((json)=> {
                    if (json.items && json.items.length > 0) {
                        setVideoStats({
                            viewCount: json.items[0].statistics.viewCount,
                            likeCount: json.items[0].statistics.likeCount,
                            favoriteCount: json.items[0].statistics.favoriteCount,
                            commentCount: json.items[0].statistics.commentCount})
                        } else {
                            console.error ('Error while fetching the statistics');
                            }
                    })
                    .catch((err)=>console.error(err));
    },[video.id.videoId]);
    return (
        <div className="card-body d-block">
            <h6 className="card-title text-truncate">{video.snippet.title}</h6>
                <p className="card-text">{video.snippet.description}</p>
                <p className='card-text'>views:{videoStats.viewCount}</p>
                <p className='card-text'>likes:{videoStats.likeCount}</p>
        </div>
    )
}
