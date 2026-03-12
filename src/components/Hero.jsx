import React from "react";
import farmBg from "../assets/farm.webp";

function Hero() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundImage:
          `url(${farmBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(11, 93, 59, 0.55)",
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 8vw, 80px)",
            fontWeight: "bold",
            lineHeight: "1.1",
            textShadow: "0 5px 15px rgba(0,0,0,0.4)",
            margin: "0",
          }}
        >
          Welcome to <br /> Krushidoot
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 5vw, 26px)",
            marginTop: "25px",
            textShadow: "0 3px 10px rgba(0,0,0,0.4)",
          }}
        >
          Pure. Organic. Natural Farming Products
        </p>

        {/* <button
          style={{
            marginTop: "40px",
            background: "#c6f05c",
            border: "none",
            padding: "clamp(10px 20px, 2vw 4vw, 18px 45px)",
            borderRadius: "40px",
            fontSize: "clamp(14px, 4vw, 18px)",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            color: "black",
          }}
        >
          View Our Products →
        </button> */}
      </div>
    </div>
  );
}

export default Hero;