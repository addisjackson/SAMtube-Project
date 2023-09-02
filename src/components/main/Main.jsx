import { useEffect, useState } from "react"
import {testAPI} from "../api/fetch";
import VideoIndex from "./VideoIndex";
import { useParams } from "react-router";

/**
 * Main()
 * -------------------------------
 * the page we will see first.
 * @returns 
 */
export default function Main(){
    const [videos, setVideos] = useState([]);
    const [videosLoaded, setVideosLoaded] = useState(false);
    const {query} = useParams();

    /** fetch data from api to the state hook */
    useEffect(()=>{
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
        console.log("main query is"+query);
        if(videos){
            setVideosLoaded(true);
        }
        else{
            setVideosLoaded(false);
        }
    },[videosLoaded]);

    return(
        <main>
            <div className="container-fluid mb-3" >
                {/* if video is properly loaded, render VideoIndex.jsx */}
                {videosLoaded ? (<VideoIndex videos={videos} />):(<p>page is not properlly loaded</p>)}
            </div>
        </main>
    )
}