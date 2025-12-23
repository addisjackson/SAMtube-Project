import { useState, useCallback } from "react";
import { fetchSnippet } from "../../api/fetch";

export default function useInfiniteVideos(query = "") {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreVideos = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const res = await fetchSnippet(8, query, nextPageToken);
      const data = await res.json();

      setVideos(prev => [...prev, ...data.items]);
      setNextPageToken(data.nextPageToken || null);
      setHasMore(!!data.nextPageToken);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [query, nextPageToken, loading, hasMore]);

  return {
    videos,
    loading,
    hasMore,
    fetchMoreVideos,
  };
}
