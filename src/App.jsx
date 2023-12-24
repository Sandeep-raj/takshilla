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
import ScrollToTop from "./assets/ScrollTop/ScrollTop";

function App() {
  return (
    <div className="root">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToTop />
              <Home />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <ScrollToTop />
              <About />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <ScrollToTop />
              <Contact />
            </>
          }
        />
        <Route
          path="course"
          element={
            <>
              <ScrollToTop />
              <Course />
            </>
          }
        />
        <Route
          path="faculty"
          element={
            <>
              <ScrollToTop />
              <Faculty />
            </>
          }
        />
        <Route
          path="register"
          element={
            <>
              <ScrollToTop />
              <Register />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
