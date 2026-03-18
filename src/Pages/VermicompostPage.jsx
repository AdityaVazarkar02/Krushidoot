import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import WormyCompost from "../assets/WormyCompost.jpeg";

const VermicompostPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = {
    title: "Vermicompost Unit",
    image: WormyCompost,
    sections: [
      {
        heading: "Organic Vermicompost Production",
        description:
          "At Krushidoot, we produce high-quality organic vermicompost using natural agricultural waste and earthworms. Our composting process enhances soil fertility, improves microbial activity, and increases crop productivity naturally. We follow a controlled and hygienic composting method to ensure nutrient-rich and chemical-free output.",
      },
      {
        heading: "Vermicompost",
        description:
          "100% organic fertilizer rich in essential nutrients like Nitrogen (N), Phosphorus (P), and Potassium (K).",
        benefits: [
          "Improves soil structure and aeration",
          "Enhances water retention capacity",
          "Boosts crop yield and quality",
          "Promotes root development",
          "Safe for all crops",
        ],
        packaging: "5 kg / 25 kg / 50 kg bags",
        rate: "₹_____ per kg",
      },
      {
        heading: "Vermiwash",
        description:
          "A natural liquid organic growth enhancer extracted during the vermicomposting process.",
        benefits: [
          "Improves plant immunity",
          "Enhances leaf growth",
          "Increases flowering and fruiting",
          "Acts as a natural pest repellent",
        ],
        usage: "Dilute with water (1:10 ratio) and spray on crops.",
        packaging: "1 litre / 5 litre",
        rate: "₹_____ per litre",
      },
      {
        heading: "Worms (Eisenia fetida)",
        description:
          "High-quality composting worms used in the vermicomposting process.",
        benefits: [
          "Improves soil structure and aeration",
          "Enhances water retention capacity",
          "Increases flowering and fruiting",
          "Acts as a natural pest repellent",
        ],
        usage: "Dilute with water (1:10 ratio) and spray on crops.",
        packaging: "1 litre / 5 litre",
        rate: "₹_____ per litre",
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
                  {section.benefits && (
                    <ul style={{ marginLeft: "24px", marginBottom: "12px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      {section.benefits.map((b, bidx) => (
                        <li key={bidx} style={{ marginBottom: "6px" }}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {section.packaging && (
                    <p style={{ marginBottom: "8px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      <span style={{ fontWeight: 600, color: "#0b5d3b" }}>Packaging:</span> {section.packaging}
                    </p>
                  )}
                  {section.rate && (
                    <p style={{ marginBottom: "8px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      <span style={{ fontWeight: 600, color: "#0b5d3b" }}>Rate:</span> {section.rate}
                    </p>
                  )}
                  {section.usage && (
                    <p style={{ marginBottom: "8px", color: "#2f6d5b", fontSize: "clamp(14px, 3vw, 16px)" }}>
                      <span style={{ fontWeight: 600, color: "#0b5d3b" }}>Usage:</span> {section.usage}
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

export default VermicompostPage;
