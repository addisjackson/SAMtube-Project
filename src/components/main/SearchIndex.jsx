import { useEffect, useState } from "react";
import { fetchSnippet } from "../../api/fetch";
import VideoIndex from "./VideoIndex";
import { useParams } from "react-router-dom";

/**
 * SearchIndex()
 * ----------------------------------
 * Displays searched results from YouTube API
 */
export default function SearchIndex() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { query } = useParams();

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);

      try {
        const data = query
          ? await fetchSnippet(8, query)
          : await fetchSnippet();

        setVideos(data?.items || []);
      } catch (err) {
        console.error("Search fetch failed:", err);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <div>
        <p>
          Search results for "<strong>{query}</strong>"
        </p>
      </div>

      <div className="container-fluid mb-3">
        {loading ? (
          <p>Loading search results…</p>
        ) : (
          <VideoIndex videos={videos} />
        )}
      </div>
    </div>
  );
}
