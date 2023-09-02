import { useEffect, useState } from "react";

/**
 * Video()
 * ---------------------
 * a component where iframe api is placed.
 */
export default function Video({id}){
    /** this state hook will be used to check the video is ready to render or not */
    const [videoReady, setVideoReady] = useState(false);

    /** if video is not ready, change the hook to true */
    useEffect(()=>{
        if(id){
            setVideoReady(true);
        }
        else{
            setVideoReady(false);
        }
    },[id]);

    return(
        <div>
            {videoReady ? (
                <iframe id="existing-iframe-example"
                    width="640" height="360"
                    src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
                    style={{border: "solid 4px #37474F"}}
                ></iframe>
            ) : null}
        </div>     
    )
}
