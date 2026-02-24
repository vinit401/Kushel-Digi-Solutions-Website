import { useState } from "react";
import logo from "../assets/images/Kds logo 1.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  // 👇 SPA scroll function (NO reload)
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // menu auto close
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="logo-img"
          onClick={() => handleScroll("hero")}
          style={{ cursor: "pointer" }}
        />

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li onClick={() => handleScroll("about")}>About Us</li>
          <li onClick={() => handleScroll("services")}>Services</li>
          <li onClick={() => handleScroll("portfolio")}>Our Portfolio</li>
          <li onClick={() => handleScroll("testimonials")}>Testimonials</li>
          <li onClick={() => handleScroll("contact")}>Contact Us</li>
        </ul>

        {/* Button */}
        <button
          className="call-btn"
          onClick={() => handleScroll("contact")}
        >
          CALL NOW : 9045301702
        </button>

      </div>
    </nav>
  );
}

export default Navbar;