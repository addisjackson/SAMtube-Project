import { useNavigate } from "react-router-dom";

const categories = [
  { label: "Home", query: "" },
  { label: "Shorts", query: "short videos" },
  { label: "Music", query: "music" },
  { label: "Documentaries", query: "documentary" },
  { label: "Full Movies", query: "full movie" },
  { label: "Vlogs", query: "vlog" },
];

export default function VideoSidebar() {
  const navigate = useNavigate();

  const handleClick = (query) => {
    if (query) {
      navigate(`/search/${query}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <aside className="video-sidebar">
      {categories.map((c) => (
        <button
          key={c.label}
          className="sidebar-btn"
          onClick={() => handleClick(c.query)}
        >
          {c.label}
        </button>
      ))}
    </aside>
  );
}
