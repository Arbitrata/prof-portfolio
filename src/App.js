import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Skills from "./components/pages/Skills";
import Testimonials from "./components/pages/Testimonials";
import Contact from "./components/pages/Contact";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App  overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
