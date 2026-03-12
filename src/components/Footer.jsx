import React from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

function Footer() {
  const navigate = useNavigate();

  // Scroll Navigation
  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      style={{
        background: "#064e3b",
        color: "white",
        padding: "clamp(40px, 8vw, 60px) clamp(20px, 5vw, 50px) clamp(20px, 4vw, 30px) clamp(20px, 5vw, 50px)",
        overflowX: "hidden",
      }}
    >
      {/* TOP SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "clamp(20px, 4vw, 40px)",
          marginBottom: "40px",
        }}
      >
        {/* COLUMN 1 */}
        <div>
          <h3 style={{ marginBottom: "15px", fontSize: "clamp(16px, 4vw, 20px)" }}>Krushidoot</h3>
          <p style={{ lineHeight: "1.6", color: "#d1fae5", fontSize: "clamp(12px, 3vw, 14px)" }}>
            Fresh, organic, and high-quality farm products directly from our farm
          </p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 style={{ marginBottom: "15px", fontSize: "clamp(14px, 3.5vw, 18px)" }}>Quick Links</h4>

          <p
            style={linkStyle}
            onClick={() => handleNavigation("hero")}
            onMouseEnter={(e) => (e.target.style.color = "#c8f169")}
            onMouseLeave={(e) => (e.target.style.color = "#d1fae5")}
          >
            Home
          </p>

          <p
            style={linkStyle}
            onClick={() => handleNavigation("about")}
            onMouseEnter={(e) => (e.target.style.color = "#c8f169")}
            onMouseLeave={(e) => (e.target.style.color = "#d1fae5")}
          >
            About Us
          </p>

          <p
            style={linkStyle}
            onClick={() => handleNavigation("vision-mission")}
            onMouseEnter={(e) => (e.target.style.color = "#c8f169")}
            onMouseLeave={(e) => (e.target.style.color = "#d1fae5")}
          >
            Vision & Mission
          </p>

          <p
            style={linkStyle}
            onClick={() => navigate("/products")}
            onMouseEnter={(e) => (e.target.style.color = "#c8f169")}
            onMouseLeave={(e) => (e.target.style.color = "#d1fae5")}
          >
            Products
          </p>

          <p
            style={linkStyle}
            onClick={() => navigate("/gallery")}
            onMouseEnter={(e) => (e.target.style.color = "#c8f169")}
            onMouseLeave={(e) => (e.target.style.color = "#d1fae5")}
          >
            Gallery
          </p>

          <p
            style={linkStyle}
            onClick={() => handleNavigation("blog")}
            onMouseEnter={(e) => (e.target.style.color = "#c8f169")}
            onMouseLeave={(e) => (e.target.style.color = "#d1fae5")}
          >
            Blog
          </p>

          <p
            style={linkStyle}
            onClick={() => handleNavigation("contact")}
            onMouseEnter={(e) => (e.target.style.color = "#c8f169")}
            onMouseLeave={(e) => (e.target.style.color = "#d1fae5")}
          >
            Contact
          </p>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 style={{ marginBottom: "15px", fontSize: "clamp(14px, 3.5vw, 18px)" }}>Contact Info</h4>

          <div style={contactRow}>
            📞 <span style={{ marginLeft: "10px", fontSize: "clamp(12px, 3vw, 14px)" }}>+91 9021390687</span>
          </div>

          <div style={contactRow}>
            ✉️ <span style={{ marginLeft: "10px", fontSize: "clamp(12px, 3vw, 14px)" }}>info.krushidoot@gmail.com</span>
          </div>

          <div style={contactRow}>
            📍
            <span style={{ marginLeft: "10px", fontSize: "clamp(12px, 3vw, 14px)" }}>
              Shree Ganesh Mitra Mandal <br />
              Mhasoba Wadi <br />
              Pune, Maharashtra 411000
            </span>
          </div>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h4 style={{ marginBottom: "15px", fontSize: "clamp(14px, 3.5vw, 18px)" }}>Follow Us</h4>

          <div style={{ display: "flex", gap: "15px" }}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIcon}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0b5d3b";
                e.currentTarget.style.color = "#c8f169";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#c8f169";
                e.currentTarget.style.color = "#064e3b";
              }}
            >
              <Facebook size={22} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIcon}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0b5d3b";
                e.currentTarget.style.color = "#c8f169";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#c8f169";
                e.currentTarget.style.color = "#064e3b";
              }}
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          marginBottom: "20px",
        }}
      />

      {/* COPYRIGHT */}
      <div style={{ textAlign: "center", color: "#a7f3d0", fontSize: "clamp(12px, 3vw, 14px)" }}>
        © 2026 Krushidoot. All Rights Reserved.
      </div>
    </footer>
  );
}

/* Styles */

const linkStyle = {
  marginBottom: "8px",
  cursor: "pointer",
  color: "#d1fae5",
  transition: "color 0.3s ease",
  fontSize: "clamp(12px, 3vw, 14px)",
};

const contactRow = {
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "12px",
  color: "#d1fae5",
};

const socialIcon = {
  width: "40px",
  height: "40px",
  background: "#c8f169",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#064e3b",
  cursor: "pointer",
  transition: "all 0.3s ease",
  textDecoration: "none",
};

export default Footer;