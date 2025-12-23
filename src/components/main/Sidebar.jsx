import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaMusic,
  FaFilm,
  FaVideo,
  FaHeart,
  FaBolt,
} from "react-icons/fa";

const categories = [
  { label: "Home", icon: <FaHome />, query: "" },
  { label: "Shorts", icon: <FaBolt />, query: "short videos" },
  { label: "Music", icon: <FaMusic />, query: "music videos" },
  { label: "Documentaries", icon: <FaFilm />, query: "documentary" },
  { label: "Movies", icon: <FaVideo />, query: "full movie" },
  { label: "Vlogs", icon: <FaHeart />, query: "vlog" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {categories.map(cat => (
        <NavLink
          key={cat.label}
          to={`/category/${encodeURIComponent(cat.query || "home")}`}
          className="sidebar-item"
        >
          <span className="icon">{cat.icon}</span>
          <span className="label">{cat.label}</span>
        </NavLink>
      ))}
    </aside>
  );
}
