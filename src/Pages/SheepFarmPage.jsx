import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import Sheep from "../assets/Sheep.jpg";

const SheepFarmPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = {
    title: "Sheep Farm",
    image: Sheep,
  };

  const isComingSoon = true; // 👉 toggle this later

  return (
    <section
      style={{
        padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px)",
        background: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)",
        textAlign: "center",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Back Button */}
      <Link
        to="/"
        style={{
          background: "#0b5d3b",
          color: "white",
          border: "2px solid #c8f169",
          padding: "clamp(8px, 2vw, 12px) clamp(18px, 4vw, 25px)",
          borderRadius: "30px",
          cursor: "pointer",
          fontWeight: "600",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "30px",
          marginTop: "20px",
          transition: "all 0.3s ease",
          fontSize: "clamp(12px, 3vw, 16px)",
        }}
      >
        ← Back to Products
      </Link>

      {/* Main Card */}
      <div
        style={{
          marginBottom: "60px",
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(11, 93, 59, 0.1)",
          padding: "clamp(40px, 8vw, 80px)",
          border: "2px solid #c8f169",
          textAlign: "center",
        }}
      >
        {/* Image */}
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "clamp(120px, 30vw, 180px)",
            height: "clamp(120px, 30vw, 180px)",
            objectFit: "cover",
            borderRadius: "16px",
            border: "3px solid #0b5d3b",
            boxShadow: "0 4px 12px rgba(11, 93, 59, 0.15)",
            marginBottom: "20px",
          }}
        />

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(28px, 8vw, 40px)",
            fontWeight: 700,
            color: "#0b5d3b",
            marginBottom: "10px",
          }}
        >
          {product.title}
        </h1>

        {/* Conditional Rendering */}
        {isComingSoon ? (
          <>
            <h2
              style={{
                fontSize: "clamp(20px, 6vw, 28px)",
                color: "#2f6d5b",
                marginBottom: "15px",
              }}
            >
              🚧 Coming Soon 🚧
            </h2>

            <p
              style={{
                color: "#2f6d5b",
                fontSize: "clamp(14px, 3vw, 16px)",
                lineHeight: "1.6",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              We are working hard to bring you healthy farm-raised sheep directly from
              our farm. Stay tuned for updates!
            </p>
          </>
        ) : (
          <>
            {/* FUTURE CONTENT (when product is ready) */}
            <p>Product details will be shown here.</p>
          </>
        )}
        <div style={{ marginTop: "20px" }}>
          <WhatsAppButton productName={product.title} />
        </div>
      </div>
    </section>
  );
};

export default SheepFarmPage;
