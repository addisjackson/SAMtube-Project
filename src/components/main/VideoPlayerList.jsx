import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStatistics } from '../../api/fetch';
/**
 * VideoPlayerList()
 * ---------------------------------
 * a single card to contain thumbnail, title, and description of a video.
 * 
 * @param {React.prop} - react prop to hold a single video info. 
 */
export function VideoPlayerList({video}){
    const [loaded, setloaded] = useState(false);
    const [videoStat, setVideoStat] = useState({});

    //grab statistics & attatch to videoStat
    useEffect(()=>{
        console.log(video.id.videoId);
        //getStatistics(video.id.videoId).then((response)=>response.json()).then((json)=>console.log(json)).catch((err)=>console.error(err));
        
    },[]);

    useEffect(()=>{
        if(video){
            getStatistics(video.id.videoId).then((response)=>console.log(response))
            setloaded(true);
        }
        else{
            setloaded(false);
        }
    },[video]);

    return(
        <>
            {loaded ? (
            <Link to={`/show/${video.id.videoId}`}>
                <img src={`${video.snippet.thumbnails.high.url}`} className="card-img-top img-responsive"  />
                <div className="card-body d-block">
                    <h6 className="card-title text-truncate">{video.snippet.title}</h6>
                    <p className="card-text">{video.snippet.channelTitle}</p>
                </div>
            </Link>
            ) : (<div><p>video is not properly loaded</p></div>)}
        </>
    )
}