import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WormyCompost from "../assets/WormyCompost.jpeg";
import FreshMilk from "../assets/FreshMilk.webp";
import FarmGoat from "../assets/FarmGoat.jpg";
import OrganicEggs from "../assets/OrganicEggs.jpg";
import FreshVegetables from "../assets/FreshVegetables.jpg";

const products = [
  {
    title: "Vermicompost Unit",
    image: WormyCompost,
    description: "100% organic fertilizer rich in essential nutrients. Improves soil fertility and crop productivity naturally.",
    path: "/vermicompost",
  },
  {
    title: "Krushidoot Dairy Farm",
    image: FreshMilk,
    description: "Pure, hygienic dairy products including fresh cow milk and organic manure for farming.",
    path: "/dairy-farm",
  },
  {
    title: "Krushidoot Goat Farm",
    image: FarmGoat,
    description: "Healthy, well-fed farm-raised goats suitable for meat purposes with proper nutrition and care.",
    path: "/goat-farm",
  },
  {
    title: "Fresh Farm Vegetables",
    image: FreshVegetables,
    description: "Fresh seasonal vegetables grown using responsible farming practices. Pesticide-free and nutrient-rich.",
    path: "/vegetables",
  },
  {
    title: "Organic Eggs",
    image: OrganicEggs,
    description: "Fresh organic eggs from free-range chickens. Rich in omega-3 fatty acids and essential nutrients.",
    path: "/organic-eggs",
  },
];

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        ← Back to Home
      </Link>
      <h1 style={{ fontSize: "clamp(28px, 8vw, 40px)", color: "#0b5d3b", marginBottom: "40px", fontWeight: "700" }}>Our Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(20px, 4vw, 30px)",
        }}
      >
        {products.map((product, idx) => (
          <Link
            key={idx}
            to={product.path}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(11, 93, 59, 0.1)",
                border: "2px solid #c8f169",
                textAlign: "left",
                transition: "all 0.3s ease",
                height: "100%",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(11, 93, 59, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(11, 93, 59, 0.1)";
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "clamp(20px, 4vw, 25px)" }}>
                <h3
                  style={{
                    fontSize: "clamp(18px, 4vw, 22px)",
                    fontWeight: 700,
                    color: "#0b5d3b",
                    marginBottom: "12px",
                  }}
                >
                  {product.title}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(13px, 3vw, 15px)",
                    color: "#2f6d5b",
                    lineHeight: "1.6",
                    marginBottom: "16px",
                  }}
                >
                  {product.description}
                </p>
                <button
                  style={{
                    background: "#c8f169",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "25px",
                    cursor: "pointer",
                    fontWeight: "600",
                    color: "#0b5d3b",
                    fontSize: "clamp(12px, 3vw, 14px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0b5d3b";
                    e.currentTarget.style.color = "#c8f169";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#c8f169";
                    e.currentTarget.style.color = "#0b5d3b";
                  }}
                >
                  Learn More →
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
