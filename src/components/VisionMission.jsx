import React, { memo } from "react";
import { Target, Lightbulb } from "lucide-react";

const VisionMission = memo(() => {
  return (
    <section
      style={{
        padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px)",
        background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",
        textAlign: "center",
        overflowX: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(28px, 8vw, 48px)",
          fontWeight: "700",
          color: "#0b5d3b",
          marginBottom: "50px",
          letterSpacing: "-0.5px",
        }}
      >
        Our Vision & Mission
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* VISION CARD */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "40px 30px",
            boxShadow: "0 10px 40px rgba(11, 93, 59, 0.12)",
            border: "2px solid #c8f169",
            textAlign: "left",
            transition: "transform 0.3s ease, boxShadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow =
              "0 20px 50px rgba(11, 93, 59, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 10px 40px rgba(11, 93, 59, 0.12)";
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                background: "#c8f169",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Lightbulb size={28} color="#0b5d3b" />
            </div>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#0b5d3b",
              }}
            >
              Our Vision
            </h2>
          </div>

          <p
            style={{
              fontSize: "16px",
              color: "#2f6d5b",
              lineHeight: "1.8",
              fontWeight: "500",
            }}
          >
            To become a trusted agricultural brand that promotes organic farming,
            healthy livestock practices, and chemical-free food production.
          </p>
        </div>

        {/* MISSION CARD */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "40px 30px",
            boxShadow: "0 10px 40px rgba(11, 93, 59, 0.12)",
            border: "2px solid #c8f169",
            textAlign: "left",
            transition: "transform 0.3s ease, boxShadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow =
              "0 20px 50px rgba(11, 93, 59, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 10px 40px rgba(11, 93, 59, 0.12)";
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                background: "#c8f169",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Target size={28} color="#0b5d3b" />
            </div>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#0b5d3b",
              }}
            >
              Our Mission
            </h2>
          </div>

          <ul
            style={{
              fontSize: "16px",
              color: "#2f6d5b",
              lineHeight: "1.8",
              fontWeight: "500",
              listStyle: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <li style={{ marginBottom: "12px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ color: "#c8f169", fontWeight: "bold", marginRight: "8px" }}>✓</span>
              Provide high-quality organic inputs to farmers
            </li>
            <li style={{ marginBottom: "12px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ color: "#c8f169", fontWeight: "bold", marginRight: "8px" }}>✓</span>
              Deliver pure dairy and farm products
            </li>
            <li style={{ marginBottom: "12px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ color: "#c8f169", fontWeight: "bold", marginRight: "8px" }}>✓</span>
              Encourage sustainable farming practices
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ color: "#c8f169", fontWeight: "bold", marginRight: "8px" }}>✓</span>
              Build long-term trust with customers
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, transparent, #c8f169, transparent)",
          margin: "60px auto",
          maxWidth: "200px",
        }}
      ></div>

      {/* BOTTOM TEXT */}
      <p
        style={{
          fontSize: "18px",
          color: "#2f6d5b",
          fontWeight: "500",
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.8",
        }}
      >
        At Krushidoot, we believe in the power of sustainable agriculture and pure products.
        Every decision we make is guided by our commitment to quality, purity, and environmental responsibility.
      </p>
    </section>
  );
});

VisionMission.displayName = "VisionMission";

export default VisionMission;
