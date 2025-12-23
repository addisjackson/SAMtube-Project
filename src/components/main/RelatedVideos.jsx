import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_BASE_API_KEY;
const API_URL = "https://www.googleapis.com/youtube/v3";

export default function RelatedVideos({ videoId }) {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [error, setError] = useState(null);

  const containerRef = useRef(null);

  const fetchTitle = useCallback(async () => {
    if (!videoId) return;

    try {
      const res = await fetch(
        `${API_URL}/videos?part=snippet&id=${videoId}&key=${API_KEY}`
      );
      const data = await res.json();
      setQuery(data.items?.[0]?.snippet?.title || "");
    } catch (err) {
      setError(err.message);
    }
  }, [videoId]);

  const fetchVideos = useCallback(async () => {
    if (!query) return;

    try {
      setLoading(true);
      const params = new URLSearchParams({
        part: "snippet",
        type: "video",
        q: query,
        maxResults: 20,
        key: API_KEY,
        ...(nextPageToken && { pageToken: nextPageToken }),
      });

      const res = await fetch(`${API_URL}/search?${params}`);
      const data = await res.json();

      const normalized = (data.items || [])
        .filter((i) => i.id?.videoId && i.id.videoId !== videoId)
        .map((i) => ({
          id: i.id.videoId,
          snippet: i.snippet,
        }));

      setVideos((prev) => {
        const seen = new Set(prev.map((v) => v.id));
        return [...prev, ...normalized.filter((v) => !seen.has(v.id))];
      });

      setNextPageToken(data.nextPageToken || null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [query, nextPageToken, videoId]);

  useEffect(() => {
    setVideos([]);
    setNextPageToken(null);
    fetchTitle();
  }, [videoId, fetchTitle]);

  useEffect(() => {
    fetchVideos();
  }, [query, fetchVideos]);

  if (!videoId) return null;
  if (error) return <p>Error: {error}</p>;

  return (
    <div ref={containerRef} style={{ overflowY: "auto", height: "100%" }}>
      <h4>Related Videos</h4>
      {videos.map((v) => (
        <Link key={v.id} to={`/show/${v.id}`}>
          <img src={v.snippet.thumbnails.medium.url} />
          <p>{v.snippet.title}</p>
        </Link>
      ))}
      {loading && <p>Loading…</p>}
    </div>
  );
}
