import './sass/style.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from './components/Navigation';



function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", color: "white" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
