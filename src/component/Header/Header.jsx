import taxlogo from "../../assets/images/taxlogo.png";
import menu from "../../assets/images/menu.png";
import cross from "../../assets/images/cross.png";
import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let navbtn = <img alt="menubtn" src={menu} onClick={toggleMenu} />;
  if (menuOpen) {
    navbtn = <img alt="menubtn" src={cross} onClick={toggleMenu} />;
  } else {
    navbtn = <img alt="menubtn" src={menu} onClick={toggleMenu} />;
  }

  return (
    <>
      <div className="headerNav">
        <img
          src={taxlogo}
          className="taxLogo"
          onClick={() => {
            navigate({
              pathname: "/",
            });
          }}
        />
        <div style={{ flexGrow: 1 }} />
        <button
          onClick={() => {
            navigate({ pathname: "/about" });
          }}
          className="navbtn"
        >
          About
        </button>
        <button
          onClick={() => {
            navigate({ pathname: "/register" });
          }}
          className="navbtn"
        >
          Register
        </button>
        <button
          onClick={() => {
            navigate({ pathname: "/faculty" });
          }}
          className="navbtn"
        >
          Faculty
        </button>
        <button
          onClick={() => {
            navigate({ pathname: "/contact" });
          }}
          className="navbtn"
        >
          Contact
        </button>
        <span className="navmenu">{navbtn}</span>
      </div>
      {menuOpen && (
        <div className="menulist">
          <button
            onClick={() => {
              navigate({ pathname: "/about" });
            }}
            className="menubtn"
          >
            About
          </button>
          <button
            onClick={() => {
              navigate({ pathname: "/register" });
            }}
            className="menubtn"
          >
            Register
          </button>
          <button
            onClick={() => {
              navigate({ pathname: "/faculty" });
            }}
            className="menubtn"
          >
            Faculty
          </button>
          <button
            onClick={() => {
              navigate({ pathname: "/contact" });
            }}
            className="menubtn"
          >
            Contact
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
