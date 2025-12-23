import { useEffect, useState } from "react";
import { fetchSnippet } from "../../api/fetch";

export default function useRelatedVideos(videoTitle) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!videoTitle) return;

    fetchSnippet(10, videoTitle)
      .then(res => res.json())
      .then(data => setVideos(data.items))
      .catch(console.error);
  }, [videoTitle]);

  return videos;
}
