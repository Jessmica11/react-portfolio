import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ProjectList from "./pages/ProjectList/ProjectList";
import ProjectDetailPage from "./pages/ProjectDetails/ProjectDetailPage";
import Resume from "./pages/Resume/Resume";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<ProjectList />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route
          path="/contact"
          element={<a href="mailto:jmscheck11@gmail.com?subject=React Portfolio Contact">Contact Me</a>}
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;