import React, { memo } from "react";
import { Link } from "react-router-dom";

import WormyCompost from "../assets/WormyCompost.jpeg";
import FreshMilk from "../assets/FreshMilk.webp";
import FarmGoat from "../assets/FarmGoat.jpg";
import OrganicEggs from "../assets/OrganicEggs.jpg";
import FreshVegetables from "../assets/FreshVegetables.jpg";

const ProductCard = memo(({ item }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-5px)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(0px)")
      }
    >
      {/* Image Section */}
      <div
        style={{
          width: "100%",
          height: "280px",
          minHeight: "280px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: "100%",
            height: "280px",
            minHeight: "280px",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      {/* Content Section */}
      <div
        style={{
          padding: "20px",
          textAlign: "left",
        }}
      >
        <h3
          style={{
            color: "#0a3d2c",
            marginBottom: "10px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          {item.name}
        </h3>

        <p
          style={{
            fontSize: "14px",
            color: "#555",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          {item.desc}
        </p>

        <Link
          to={item.path}
          style={{
            background: "#c8f169",
            padding: "10px 22px",
            borderRadius: "30px",
            fontWeight: "500",
            textDecoration: "none",
            display: "inline-block",
            color: "#000",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#b4e651")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "#c8f169")
          }
        >
          Read More →
        </Link>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

function Products() {
  const products = [
    {
      name: "Wormy Compost",
      image: WormyCompost,
      desc: "Organic fertilizer made from natural composting. 100% chemical-free and rich in nutrients for your plants.",
      path: "/vermicompost",
    },
    {
      name: "Fresh Milk",
      image: FreshMilk,
      desc: "Fresh farm cow milk. Pure and unprocessed, delivered daily from our farm.",
      path: "/dairy-farm",
    },
    {
      name: "Farm Goat",
      image: FarmGoat,
      desc: "Healthy farm-raised goats. Grown naturally with proper care and nutrition.",
      path: "/goat-farm",
    },
    {
      name: "Organic Eggs",
      image: OrganicEggs,
      desc: "Fresh organic farm eggs from free-range chickens. Rich in nutrients and taste.",
      path: "/organic-eggs",
    },
    {
      name: "Fresh Vegetables",
      image: FreshVegetables,
      desc: "Fresh seasonal vegetables grown organically on our farm. Pesticide-free and nutrient-rich.",
      path: "/vegetables",
    },
  ];

  return (
    <section
      style={{
        padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 60px)",
        background: "#f1f3f7",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(28px, 6vw, 40px)",
          color: "#0a3d2c",
          marginBottom: "15px",
        }}
      >
        Our Products
      </h2>

      <p
        style={{
          color: "#2f6d5b",
          marginBottom: "50px",
          fontSize: "clamp(14px, 3vw, 18px)",
        }}
      >
        Fresh, organic, and naturally grown products from our farm
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default memo(Products);