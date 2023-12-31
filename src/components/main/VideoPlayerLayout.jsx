/**
 * Main()
 * ------------------------------
 * will render main page.
 * ToDo: need to set up the containers, and layout for the page.
 * @returns 
 */

import { useEffect, useState } from "react"
import { getSnippet } from "../../api/fetch";
import Video from "./Video";
import { VideoCard } from "./VideoCard";
import { useParams } from "react-router";
import { VideoPlayerList } from "./VideoPlayerList";
import CommentsSection from "./CommentsSection";

/**
 * VideoPlayerLayout()
 * -------------------------------------
 * container for the video player + feed + etc.
 * @returns 
 */
export default function VideoPlayerLayout(){
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
        getSnippet().then((response)=>response.json()).then((json)=>setVideos(json.items)).catch((err)=>console.error(err));
    },[id]);

    return(
        <main>
            {/*temp main page to test fetching api */}
            <div className="container-fluid mb-3" >
                <div className="row">
                    <div className="col-md-10 col-sm-12">
                        <div className="row">
                            {/** left column for video & comments & etc */}
                            <Video id={id}/>
                        </div>
                        <div className="row">
                            <CommentsSection />
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-none">
                        {/** right column for a list */}
                        {videos.map((video)=>(
                            <div className="card w-100 p-2" key={video.id.videoId} >
                                <VideoPlayerList video={video}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}