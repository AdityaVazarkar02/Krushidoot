import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import FreshMilk from "../assets/gallery/Milk.jpeg";

const DairyFarmPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = {
    title: "Krushidoot Dairy Farm",
    image: FreshMilk,
    sections: [
      {
        heading: "Pure & Hygienic Dairy Production",
        description:
          "Our dairy farm maintains high standards of hygiene, proper feeding, and animal care. We ensure that our cows are well-nourished and kept in a clean environment to deliver high-quality milk. We focus on purity, freshness, and trust.",
      },
      {
        heading: "Fresh Cow Milk",
        features: [
          "100% pure and natural",
          "No preservatives",
          "No chemical additives",
          "Fresh daily milking",
          "Supply: Morning & Evening",
        ],
        rate: "₹_____ per litre",
        subscription: "Monthly subscription options available.",
      },
      {
        heading: "Cow Dung",
        uses: [
          "Organic farming manure",
          "Biogas production",
          "Compost preparation",
        ],
        rate: "₹_____ per kg",
        bulk: "Bulk orders available.",
      },
       {
        heading: "Open Shed Cow Dung",
        uses: [
          "Organic farming manure",
          "Biogas production",
          "Compost preparation",
        ],
        rate: "₹_____ per kg",
        bulk: "Bulk orders available.",
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
                  {section.uses && (
                    <ul style={{ marginLeft: "24px", marginBottom: "12px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      {section.uses.map((u, uidx) => (
                        <li key={uidx} style={{ marginBottom: "6px" }}>{u}</li>
                      ))}
                    </ul>
                  )}
                  {section.rate && (
                    <p style={{ marginBottom: "8px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      <span style={{ fontWeight: 600, color: "#0b5d3b" }}>Rate:</span> {section.rate}
                    </p>
                  )}
                  {section.subscription && (
                    <p style={{ marginBottom: "8px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      {section.subscription}
                    </p>
                  )}
                  {section.bulk && (
                    <p style={{ marginBottom: "8px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      {section.bulk}
                    </p>
                  )}
                </div>
              ))}
              <WhatsAppButton productName={product.title} style={{ marginTop: "20px" }} />
            </div>
          </div>
        </div>
      </section>
  );
};

export default DairyFarmPage;
