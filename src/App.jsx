import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ProjectList from "./pages/ProjectList/ProjectList";
import UXProcess from "./pages/UXProcess/UXProcess";
import Resume from "./pages/Resume/Resume";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<ProjectList />} />
          <Route path="/process" element={<UXProcess />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
