import { useEffect } from "react";
import Home from "./components/Pages/Home";
import { Routes, Route } from "react-router-dom";
import ShowNavbar from "./components/scenes/ShowNavbar/ShowNavbar";
import Navbar from "./components/scenes/Navbar/Navbar";
import About from "./components/Pages/About";

function App() {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div>
      <ShowNavbar>
        <Navbar />
      </ShowNavbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
