import Header from "./component/Header/Header";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import Course from "./component/Courses/Course";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Faculty from "./component/Faculty/Faculty";
import Register from "./component/Register/Register";

function App() {
  return (
    <div className="root">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="course" element={<Course />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
