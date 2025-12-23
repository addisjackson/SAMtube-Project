import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import UseLikedVideos from "./useLikedVideos";
import { normalizeVideo } from "../../api/normalizeVideo";

const API_KEY = import.meta.env.VITE_BASE_API_KEY;
const API_URL = "https://www.googleapis.com/youtube/v3";

export default function VideoPlayerList({
  maxResults = 20,
  category = "mostPopular",
  searchQuery = "",
}) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [error, setError] = useState(null);

  const { toggleLike, isLiked } = UseLikedVideos();
  const containerRef = useRef(null);

  /**
   * 🔧 BUILD QUERY PARAMS (GUARANTEED URL MATCH)
   */
  const buildParams = useCallback(() => {
    const params = {
      part: "snippet,contentDetails,statistics",
      maxResults,
      key: API_KEY,
    };

    // 🔍 SEARCH MODE
    if (searchQuery) {
      params.q = searchQuery;
      params.type = "video";
      if (nextPageToken) params.pageToken = nextPageToken;
      return params;
    }

    // 🔥 MOST POPULAR (NO EXTRA PARAMS)
    if (category === "mostPopular") {
      params.chart = "mostPopular";
      if (nextPageToken) params.pageToken = nextPageToken;
      return params;
    }

    // 🎯 CATEGORY MODE
    params.chart = "mostPopular";
    const categoryMap = {
      music: "10",
      gaming: "20",
      movies: "1",
      news: "25",
      sports: "17",
      travel: "19",
    };

    if (categoryMap[category]) {
      params.videoCategoryId = categoryMap[category];
    }

    if (nextPageToken) params.pageToken = nextPageToken;
    return params;
  }, [category, searchQuery, maxResults, nextPageToken]);

  /**
   * 🚀 FETCH VIDEOS
   */
  const fetchVideos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = buildParams();
      const queryString = new URLSearchParams(params).toString();
      const endpoint = searchQuery ? "search" : "videos";

      const res = await fetch(`${API_URL}/${endpoint}?${queryString}`);
      if (!res.ok) {
        throw new Error(`YouTube API error: ${res.status}`);
      }

      const data = await res.json();
      let items = [];

      // 🔍 SEARCH: FETCH FULL VIDEO DETAILS
      if (searchQuery) {
        const ids = data.items
          ?.map((i) => i.id?.videoId)
          .filter(Boolean)
          .join(",");

        if (ids) {
          const fullRes = await fetch(
            `${API_URL}/videos?part=snippet,contentDetails,statistics&id=${ids}&key=${API_KEY}`
          );
          const fullData = await fullRes.json();
          items = fullData.items || [];
        }
      } else {
        items = data.items || [];
      }

      const normalized = items.map(normalizeVideo).filter(Boolean);

      // 🚫 PREVENT DUPLICATES
      setVideos((prev) => {
        const seen = new Set(prev.map((v) => v.id));
        const fresh = normalized.filter((v) => !seen.has(v.id));
        return [...prev, ...fresh];
      });

      setNextPageToken(data.nextPageToken || null);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [buildParams, searchQuery]);

  /**
   * 🔄 RESET LIST WHEN MODE CHANGES
   */
  useEffect(() => {
    setVideos([]);
    setNextPageToken(null);
    fetchVideos();
  }, [category, searchQuery, fetchVideos]);

  /**
   * ♾️ INFINITE SCROLL (SEARCH ONLY)
   */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      if (
        el.scrollTop + el.clientHeight >= el.scrollHeight - 100 &&
        searchQuery &&
        nextPageToken &&
        !loading
      ) {
        fetchVideos();
      }
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [fetchVideos, loading, nextPageToken, searchQuery]);

  /**
   * ⏱ FORMAT ISO DURATION
   */
  const formatDuration = (iso) => {
    if (!iso) return "0:00";
    const [, h = 0, m = 0, s = 0] =
      iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/) || [];
    return h
      ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      : `${m}:${String(s).padStart(2, "0")}`;
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div
      ref={containerRef}
      style={{ padding: "1rem", height: "100%", overflowY: "auto" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {videos.map((v) => {
          const liked = isLiked(v.id);
          return (
            <div
              key={v.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <Link to={`/show/${v.id}`}>
                <img
                  src={v.snippet.thumbnails.high.url}
                  alt={v.snippet.title}
                  style={{ width: "100%" }}
                />
              </Link>

              <div style={{ padding: "0.75rem" }}>
                <h3 style={{ fontSize: "1rem" }}>{v.snippet.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "#777" }}>
                  ⏱ {formatDuration(v.contentDetails?.duration)}
                </p>

                <button onClick={() => toggleLike(v.id)}>
                  {liked ? "❤️" : "🤍"} Like
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading…</p>}
    </div>
  );
}
