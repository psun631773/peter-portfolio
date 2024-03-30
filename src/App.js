import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import { AnimationProvider } from './context/AnimationContext';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <AnimationProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
          </AnimationProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
