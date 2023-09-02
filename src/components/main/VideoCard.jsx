import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoCardDescription from "./VideoCardDescription";
/**
 * VideoCard()
 * ---------------------------------
 * a single card to contain thumbnail, title, and description of a video.
 * 
 * @param {React.prop} - react prop to hold a single video info. 
 */
export function VideoCard({video}){
    const [errMsg, setErrMsg] = useState(false);

    return(
        <Link to={`/show/${video.id.videoId}`}>
            <img src={`${video.snippet.thumbnails.high.url}`} className="card-img-top img-responsive"  />
            <VideoCardDescription video={video} />
        </Link>
    )
}