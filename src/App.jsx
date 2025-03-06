import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Investor from "./Component/Investor";
import Restaurant from "./Component/Restaurant";
import About from "./Component/About";
import Contact from "./Component/Contact";

const App = () => {
  return (
          <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Investor />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
};

export default App;
