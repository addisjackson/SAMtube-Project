import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoPlayerList from "./VideoPlayerList";
import RelatedVideos from "./RelatedVideos";

const categories = [
  { icon: "🏠", name: "Home", value: "mostPopular" },
  { icon: "🔥", name: "Trending", value: "trending" },
  { icon: "🎵", name: "Music", value: "music" },
  { icon: "🎮", name: "Gaming", value: "gaming" },
  { icon: "🎬", name: "Movies", value: "movies" },
  { icon: "📰", name: "News", value: "news" },
];

export default function Main() {
  const [activeCategory, setActiveCategory] = useState("mostPopular");
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState(""); // actual query sent to API
  const [firstVideoId, setFirstVideoId] = useState(null); // for related videos

  // Update query on search submit
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchQuery.trim());
  };

  // Clear search resets to category
  const handleClearSearch = () => {
    setSearchQuery("");
    setQuery("");
  };

  // Reset query when category changes
  useEffect(() => {
    if (!searchQuery) setQuery("");
  }, [activeCategory]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* HEADER */}
      <header
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "1rem",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        <h1>SAMtube</h1>
        <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
          <p>About</p>
        </Link>

        {/* SEARCH BAR */}
        <form onSubmit={handleSearch} style={{ marginTop: "0.5rem" }}>
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "80%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px 0 0 4px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderLeft: "none",
              borderRadius: "0 4px 4px 0",
              backgroundColor: "#555",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Search
          </button>
          {query && (
            <button
              type="button"
              onClick={handleClearSearch}
              style={{
                marginLeft: "0.5rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
              }}
            >
              Clear
            </button>
          )}
        </form>
      </header>

      {/* CONTENT AREA */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* SIDEBAR */}
        <div
          style={{
            width: "60px",
            borderRight: "1px solid #ddd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem 0",
            backgroundColor: "#f9f9f9",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              style={{
                background: "none",
                border: "none",
                margin: "1rem 0",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: activeCategory === cat.value ? "#FF0000" : "#555",
              }}
              onClick={() => {
                setActiveCategory(cat.value);
                handleClearSearch();
              }}
              title={cat.name}
            >
              {cat.icon}
            </button>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div
          style={{
            flex: 3,
            overflowY: "auto",
            padding: "1rem",
            backgroundColor: "#fff",
          }}
        >
          <VideoPlayerList
            category={activeCategory}
            searchQuery={query}
            setFirstVideoId={setFirstVideoId} // <-- get first video ID
          />
        </div>

       
      </div>
    </div>
  );
}
