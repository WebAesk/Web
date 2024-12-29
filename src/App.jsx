
import Home from "./Pages/PageHome.jsx";
import About from "./Pages/AboutPage.jsx";
import Cars from "./Pages/CarPage.jsx";
import Teams from "./Pages/TeamsPage.jsx";
import Races from "./Pages/RacesPage.jsx";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/races" element={<Races />} />

      </Routes>
    </Router>
  );
}
export default App
