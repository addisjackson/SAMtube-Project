import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import VideoIndex from "./components/main/VideoIndex";
import VideoPlayerLayout from "./components/main/VideoPlayerLayout";
import About  from './components/commons/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" component={Main} />
          <Route path="/video/:videoId" component={VideoPlayerLayout} />
          <Route path="/" component={SideBar} />
          <Route path="/about" component={About} />
          <Route path="/" component={VideoIndex} />
           <div className='main'>
            <Main />
            <SideBar />
            <VideoInder/>
           </div> /
        </Routes>
        <Footer />.
      </div>
    </Router>
  );
}

export default App;
