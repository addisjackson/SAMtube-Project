import { useEffect } from "react";

const API_KEY = import.meta.env.VITE_BASE_API_KEY;

export default function Video({ id, setTitle }) {
  useEffect(() => {
    if (!id) return;

    // Fetch snippet for title
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.items?.length) setTitle(data.items[0].snippet.title);
      })
      .catch(console.error);
  }, [id, setTitle]);

  if (!id) return null;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      <iframe
        title="YouTube video player"
        src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          width: "100%",
          maxWidth: "1100px",
          aspectRatio: "16 / 9",
          borderRadius: "8px",
          border: "1px solid #ccc",
          backgroundColor: "#000",
        }}
      />
    </div>
  );
}
