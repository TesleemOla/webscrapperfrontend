import React from "react";
import News from "./Routes/News";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";
import Blog from "./Routes/Blog"
import {BrowserRouter as Router} from "react-router-dom"
import {Routes, Route} from "react-router-dom"

function App() {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/News" element={<News />}/>
          <Route path="/Blog" element={<Blog/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
