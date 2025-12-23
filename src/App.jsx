import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Nav from './components/nav/Nav'
import Footer from "./components/commons/Footer";
import About from './components/commons/About';
import SearchIndex from './components/main/SearchIndex';
import VideoPlayerLayout from './components/main/VideoPlayerLayout';

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/*" element={<Main />} />
        <Route path="/search/:query" element={<SearchIndex />} />
        <Route path="/show/:id" element={<VideoPlayerLayout />} />
      </Routes>
      <Footer />
    </Router>
  );
}
