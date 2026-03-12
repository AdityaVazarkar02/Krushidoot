import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import OrganicEggs from "../assets/OrganicEggs.jpg";

const OrganicEggsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = {
    title: "Organic Eggs",
    image: OrganicEggs,
    sections: [
      {
        heading: "Fresh & Nutritious Organic Eggs",
        description:
          "Our farm raises free-range chickens in a natural and stress-free environment. The chickens are fed with organic feed without any antibiotics or harmful chemicals. This results in fresh, nutritious eggs that are rich in omega-3 fatty acids and other essential nutrients.",
      },
      {
        heading: "Organic Farm Eggs",
        features: [
          "100% organic and free-range",
          "No antibiotics or medications",
          "No artificial feed additives",
          "Rich in Omega-3 fatty acids",
          "Fresh eggs daily",
        ],
        rate: "₹_____ per dozen",
        supply: "Daily supply available.",
      },
      {
        heading: "Nutritional Benefits",
        benefits: [
          "Higher protein content",
          "Rich in antioxidants",
          "Better cholesterol profile",
          "Contains essential amino acids",
          "Superior taste and quality",
        ],
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
                  {section.features && (
                    <ul style={{ marginLeft: "24px", marginBottom: "12px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      {section.features.map((f, fidx) => (
                        <li key={fidx} style={{ marginBottom: "6px" }}>{f}</li>
                      ))}
                    </ul>
                  )}
                  {section.benefits && (
                    <ul style={{ marginLeft: "24px", marginBottom: "12px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      {section.benefits.map((b, bidx) => (
                        <li key={bidx} style={{ marginBottom: "6px" }}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {section.rate && (
                    <p style={{ marginBottom: "8px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      <span style={{ fontWeight: 600, color: "#0b5d3b" }}>Rate:</span> {section.rate}
                    </p>
                  )}
                  {section.supply && (
                    <p style={{ marginBottom: "8px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      {section.supply}
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

export default OrganicEggsPage;
