import React from "react";
import {BrowserRouter,  Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home"
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/search" element = {<Search/>}/>
        <Route path="/Search/:search" element = {<Search/>}/>
        <Route path="/about" element = {<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
