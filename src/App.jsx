import Header from "./component/Header/Header";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="root">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
