import React from "react";
import {BrowserRouter,  Route, Routes,Outlet, Navigate} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home"
import Search from "./pages/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/index.scss";

const Wrapper = () => {
  return (
    <div className='main'>
    <header>
        <Header/>
    </header>
    <section>
       <Outlet />
    </section>
    <footer>
        <Footer/>
    </footer>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element = {<Wrapper/>}>
          <Route path="/home" element = {<Home/>}/>
          <Route path="" element = {<Navigate to="/home"/>}/>
          <Route path="/search" element = {<Search/>}/>
          <Route path="/Search/:search" element = {<Search/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="*" element = {<Navigate to="/home"/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
