import React, { useEffect, useState } from "react";
import fetchVideos from "../../api/constants"
import VideoIndex from "./VideoIndex";
import { useParams } from "react-router";
import SideBar from '../nav/SideBar';
import SideBarRow from '../nav/SideBarRow'
import { google } from 'googleapis';
import { LINK } from 'react-router-dom'
function Main() {
  const [videos, setVideos] = useState([]);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const { query } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (!query) {
          response = await fetchVideos(8, videoId);
        } else {
          response = await fetchVideos(8, query);
        }

        const json = await response.json();
        setVideos(json.items);
        setVideosLoaded(true);
      } catch (err) {
        console.error(err);
        setVideosLoaded(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <main>
      <div className="container-fluid mb-3">
       <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9">  
        {videosLoaded ? (
          <VideoIndex videos={videos} />
        ) : (
          <p>Loading videos...</p>
        )}
      </div>  
      </div>
      </div>
    </main>
  );
}

export default Main;
