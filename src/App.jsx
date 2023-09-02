import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/main/Main";
import VideoDetail from "./components/main/VideoDetail";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" component={Main} />
          <Route path="/video/:videoId" component={VideoDetail} />
        </Routes>
        <Footer />.
      </div>
    </Router>
  );
}

export default App;
