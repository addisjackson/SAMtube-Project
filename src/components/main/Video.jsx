import { useEffect, useState } from "react";

/**
 * Video()
 * ---------------------
 * a component where iframe api is placed.
 */
export default function Video({ video }){
    /** this state hook will be used to check the video is ready to render or not */
    const [videoReady, setVideoReady] = useState(false);

    /** if video is not ready, change the hook to true */
    useEffect(()=>{
        if(video.videoId){
            setVideoReady(true);
        }
        else{
            setVideoReady(false);
        }
    },[id]);

    return(
        <div>
            {videoReady ? (
                <iframe id='`${video.videoId}`'
                    width="1240" height="760"
                    src={`https://www.youtube.com/embed/${video.videoId}?enablejsapi=1`}
                    style={{border: "solid 4px #37474F"}}
                    allowFullScreen
                ></iframe>
            ) : null}
        </div>     
    )
}
