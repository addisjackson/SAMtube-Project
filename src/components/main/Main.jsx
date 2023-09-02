import React, { useEffect, useState } from "react";
import testAPI from "../../api/fetch";
import VideoIndex from "./VideoIndex";
import { useParams } from "react-router";

function Main() {
  const [videos, setVideos] = useState([]);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const { query } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (!query) {
          response = await testAPI();
        } else {
          response = await testAPI(8, query);
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
        {videosLoaded ? (
          <VideoIndex videos={videos} />
        ) : (
          <p>Loading videos...</p>
        )}
      </div>
    </main>
  );
}

export default Main;
