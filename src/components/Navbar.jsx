import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle navigation and close mobile menu
  const handleNavigation = (sectionId) => {
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      // Add offset to account for fixed navbar
      const offsetTop = element.offsetTop - 100; // Adjust this value as needed
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 1000,
          padding: "15px 0",
          background: "linear-gradient(to bottom, rgba(11, 93, 59, 0.95), transparent)",
        }}
      >
        <div
          style={{
            background: "#0b5d3b",
            width: "95%",
            maxWidth: "2000px",
            borderRadius: "50px",
            padding: "clamp(10px, 2vw, 12px) clamp(20px, 4vw, 25px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="Krushidoot Logo"
              className="nav-logo"
              style={{
                height: "55px",
                width: "auto",
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <span onClick={() => handleNavigation("hero")}>Home</span>
            <span onClick={() => handleNavigation("about")}>About</span>
            <span onClick={() => handleNavigation("vision-mission")}>Vision & Mission</span>
            <span onClick={() => handleNavigation("products")}>Products</span>
            <Link to="/gallery" style={{ color: "white", textDecoration: "none" }}>Gallery</Link>
            <span onClick={() => handleNavigation("blog")}>Blog</span>
            <button className="contact-btn" onClick={() => handleNavigation("contact")}>Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <span onClick={() => handleNavigation("hero")}>Home</span>
          <span onClick={() => handleNavigation("about")}>About</span>
          <span onClick={() => handleNavigation("vision-mission")}>Vision & Mission</span>
          <span onClick={() => handleNavigation("products")}>Products</span>
          <Link to="/gallery" style={{ color: "white", textDecoration: "none" }}>Gallery</Link>
          <span onClick={() => handleNavigation("blog")}>Blog</span>
          <button className="contact-btn" onClick={() => handleNavigation("contact")}>Contact</button>
        </div>
      )}

      <style>{`
        .desktop-menu {
          display: flex;
          gap: clamp(20px, 3vw, 35px);
          align-items: center;
          color: white;
          font-size: clamp(13px, 2.5vw, 16px);
        }

        .desktop-menu span {
          cursor: pointer;
        }

        .contact-btn {
          background: #c6f05c;
          border: none;
          padding: clamp(6px, 1.5vw, 8px) clamp(16px, 3vw, 22px);
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          font-size: clamp(12px, 2vw, 16px);
        }

        .mobile-menu-button {
          display: none;
          cursor: pointer;
          color: white;
        }

        .mobile-menu {
          position: fixed;
          top: 85px;
          left: 0;
          width: 100%;
          background: #0b5d3b;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: clamp(15px, 3vw, 25px) 0;
          gap: 20px;
          border-radius: 0 0 25px 25px;
          animation: slideDown 0.3s ease-in-out;
          z-index: 999;
          overflowX: hidden;
        }

        .mobile-menu span {
          color: white;
          font-size: clamp(14px, 4vw, 18px);
          cursor: pointer;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .nav-logo {
            height: 50px !important;
          }
        }

        @media (max-width: 768px) {
          .nav-logo {
            height: 40px !important;
          }
          
          .desktop-menu {
            display: none;
          }
          .mobile-menu-button {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .nav-logo {
            height: 35px !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;