import React from "react";

function Contact() {
  return (
    <section
      style={{
        padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px)",
        background: "#eef1f7",
        textAlign: "center",
        overflowX: "hidden",
      }}
    >
      <h2 style={{ fontSize: "clamp(28px, 8vw, 40px)", color: "#0a3d2c", margin: "0 0 20px 0" }}>Contact Us</h2>

      <p
        style={{
          color: "#2f6d5b",
          marginBottom: "50px",
          fontSize: "clamp(14px, 4vw, 18px)",
        }}
      >
        Get in touch with us for orders or any inquiries
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(20px, 4vw, 40px)",
          alignItems: "start",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {/* CONTACT CARD */}
          <div
            style={{
              background: "#ffffff",
              padding: "clamp(25px, 6vw, 40px)",
              borderRadius: "25px",
              textAlign: "left",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ color: "#0a3d2c", marginBottom: "30px", fontSize: "clamp(18px, 5vw, 24px)" }}>
              Get In Touch
            </h3>

            {/* Phone */}
            <div style={{ display: "flex", marginBottom: "25px" }}>
              <div style={iconStyle}>📞</div>
              <div>
                <p style={{ margin: 0, fontWeight: "bold" }}>Phone</p>
                <p style={{ margin: 0, color: "#2f6d5b" }}>+91 9021390687</p>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", marginBottom: "25px" }}>
              <div style={iconStyle}>✉️</div>
              <div>
                <p style={{ margin: 0, fontWeight: "bold" }}>Email</p>
                <p style={{ margin: 0, color: "#2f6d5b" }}>
                  info.krushidoot@gmail.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div style={{ display: "flex" }}>
              <div style={iconStyle}>📍</div>
              <div>
                <p style={{ margin: 0, fontWeight: "bold" }}>Address</p>
                <p style={{ margin: 0, color: "#2f6d5b" }}>
                  near Ganesh Mitra mandal, <br />
                  Mhase Kh., <br />
                  Maharashtra 414306
                </p>
              </div>
            </div>
          </div>

          {/* MAP CARD */}
          {/* MAP CARD */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "25px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <iframe
              title="Shroomium Mushroom Farm Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.947049174286!2d74.3165674!3d18.889430100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc32d33962aa6bd%3A0x773359c2a3c1eaec!2sShroomium%20Mushroom%20Farm!5e0!3m2!1sen!2sin!4v1772031447071!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div
          style={{
            background: "#ffffff",
            padding: "clamp(25px, 6vw, 40px)",
            borderRadius: "25px",
            textAlign: "left",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ color: "#0a3d2c", marginBottom: "30px", fontSize: "clamp(18px, 5vw, 24px)" }}>
            Send us a Message
          </h3>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <label>Name</label>
              <input type="text" placeholder="Your name" style={inputStyle} />
            </div>

            <div>
              <label>Phone</label>
              <input
                type="text"
                placeholder="Your phone number"
                style={inputStyle}
              />
            </div>

            <div>
              <label>Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                style={inputStyle}
              />
            </div>

            <button
              style={{
                background: "#0a3d2c",
                color: "white",
                border: "none",
                padding: "14px",
                borderRadius: "30px",
                cursor: "pointer",
                fontWeight: "500",
                marginTop: "10px",
              }}
            >
              ✈ Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Reusable Styles */
const iconStyle = {
  width: "50px",
  height: "50px",
  background: "#c8f169",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "15px",
  fontSize: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  outline: "none",
};

export default Contact;
