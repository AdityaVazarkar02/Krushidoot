import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FreshVegetables from "../assets/FreshVegetables.jpg";

const FreshVegetablesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = {
    title: "Fresh Farm Vegetables",
    image: FreshVegetables,
    sections: [
      {
        heading: "Direct From Farm to You",
        description:
          "We grow seasonal vegetables using responsible and controlled farming practices. Our vegetables are harvested fresh and supplied directly to customers.",
      },
      {
        heading: "Available Vegetables (Seasonal)",
        vegetables: [
          "Onion",
          "Tomato",
          "Leafy Vegetables",
          "Other seasonal crops",
        ],
        supply: "Retail and wholesale supply available.",
        contact: "For daily rates, please contact us.",
      },
    ],
  };

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
        <div
          style={{
            marginBottom: "60px",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(11, 93, 59, 0.1)",
            padding: "clamp(25px, 5vw, 40px) clamp(20px, 4vw, 30px)",
            border: "2px solid #c8f169",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              marginBottom: "24px",
              gap: "clamp(16px, 4vw, 32px)",
              flexWrap: "wrap",
            }}
          >
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
                minWidth: "120px",
              }}
            />
            <div style={{ flex: 1, minWidth: "250px" }}>
              <h1
                style={{
                  fontSize: "clamp(28px, 8vw, 40px)",
                  fontWeight: 700,
                  color: "#0b5d3b",
                  marginBottom: "24px",
                }}
              >
                {product.title}
              </h1>
              {product.sections.map((section, sidx) => (
                <div key={sidx} style={{ marginBottom: "24px" }}>
                  <h2
                    style={{
                      fontSize: "clamp(18px, 5vw, 24px)",
                      fontWeight: 700,
                      color: "#0b5d3b",
                      marginBottom: "8px",
                      borderBottom: "2px solid #c8f169",
                      paddingBottom: "8px",
                    }}
                  >
                    {section.heading}
                  </h2>
                  {section.description && (
                    <p style={{ marginBottom: "12px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)", lineHeight: "1.6" }}>
                      {section.description}
                    </p>
                  )}
                  {section.vegetables && (
                    <ul style={{ marginLeft: "24px", marginBottom: "12px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      {section.vegetables.map((v, vidx) => (
                        <li key={vidx} style={{ marginBottom: "6px" }}>{v}</li>
                      ))}
                    </ul>
                  )}
                  {section.supply && (
                    <p style={{ marginBottom: "8px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      {section.supply}
                    </p>
                  )}
                  {section.contact && (
                    <p style={{ marginBottom: "8px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      {section.contact}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default FreshVegetablesPage;
