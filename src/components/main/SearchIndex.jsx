import { useEffect, useState } from "react"
import testAPI from "../../api/fetch";
import VideoIndex from "./VideoIndex";
import { useParams } from "react-router";

/**
 * SearchIndex()
 * ----------------------------------
 * it will contain the searched result from the api.
 * @returns 
 */
export default function SearchIndex(){
    const [videos, setVideos] = useState([]);
    const [videosLoaded, setVideosLoaded] = useState(false);
    const {query} = useParams();

    /** fetch data from api to the state hook */
    useEffect(()=>{
        console.log("query is"+query);
        if(!query){
            testAPI().then((response)=>response.json()).then((json)=>setVideos(json.items)).catch((err)=>console.error(err));
        }
        else{
            testAPI(8,query).then((response)=>response.json()).then((json)=>setVideos(json.items)).catch((err)=>console.error(err));
        }
        console.log(videos)
    },[]);

    /** if video is loaded set videosLoaded to true */
    useEffect(()=>{
        console.log(videos);
        if(videos){
            setVideosLoaded(true);
        }
        else{
            setVideosLoaded(false);
        }
    },[videosLoaded]);

    return(
        <div>
            <div>
                <p>
                    searched result for {`${query}`}
                </p>
            </div>
            <div className="container-fluid mb-3" >
                {/* if video is properly loaded, render VideoIndex.jsx */}
                {videosLoaded ? (<VideoIndex videos={videos} />):(<p>page is not properlly loaded</p>)}
            </div>
        </div>
    )
}