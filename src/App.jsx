import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Investor from "./Component/Investor";
import Restaurant from "./Component/Restaurant";
import About from "./Component/About";
import Contact from "./Component/Contact";

const Layout = () => {
  const location = useLocation();
  const hideNavbar = ["/contact","/about"];

  return (
    <>
      {!hideNavbar.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Investor />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
