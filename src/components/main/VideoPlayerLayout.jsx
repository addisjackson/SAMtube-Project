import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
import { getVideoById } from "../../api/fetch";

/**
 * Format YouTube description into readable JSX
 */
function formatDescription(description = "") {
  const sections = description
    .split("━━━━━━━━━━━━━━")
    .map((s) => s.trim())
    .filter(Boolean);

  return sections.map((section, index) => {
    // Links block
    if (section.includes("http")) {
      const links = section
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);

      return (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <h4>Links</h4>
          <ul>
            {links.map((link, i) => {
              const url = link.split(" ").pop();
              return (
                <li key={i}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }

    // Hashtags
    if (section.startsWith("#")) {
      return (
        <p key={index} style={{ color: "#666" }}>
          <strong>Tags:</strong> {section}
        </p>
      );
    }

    // Normal paragraph
    return (
      <p key={index} style={{ lineHeight: 1.6 }}>
        {section}
      </p>
    );
  });
}

export default function VideoPlayerLayout() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const loadVideo = async () => {
      try {
        setLoading(true);
        const data = await getVideoById(id);
        setVideo(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load video");
      } finally {
        setLoading(false);
      }
    };

    loadVideo();
  }, [id]);

  if (loading) return <p>Loading video…</p>;
  if (error) return <p>{error}</p>;
  if (!video) return <p>Video not found</p>;

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* MAIN VIDEO */}
      <div style={{ flex: 2, padding: "1rem" }}>
        <iframe
          title={video.snippet.title}
          src={`https://www.youtube.com/embed/${video.id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: "100%",
            height: "60vh",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <h2 style={{ marginTop: "1rem" }}>
          {video.snippet.title}
        </h2>

        <div style={{ marginTop: "1rem", color: "#444" }}>
          {formatDescription(video.snippet.description)}
        </div>
      </div>

      {/* RELATED VIDEOS */}
      <div
        style={{
          flex: 1,
          borderLeft: "1px solid #ddd",
          overflowY: "auto",
          padding: "1rem",
          backgroundColor: "#f5f5f5",
        }}
      >
        <RelatedVideos videoId={video.id} />
      </div>
    </div>
  );
}
