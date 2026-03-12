import React, { memo } from "react";
import OrganicFarming from "../assets/OrganicFarming.jpg";
import ImportanceOfCompost from "../assets/ImportanceOfCompost.jpg";
import NaturalDairyFarmingMethods from "../assets/NaturalDairyFarmingMethods.jpeg";

const BlogCard = memo(({ item, index }) => {
  return (
    <div
      key={index}
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        textAlign: "left",
      }}
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
          alt={item.title}
          style={{
            width: "100%",
            height: "280px",
            minHeight: "280px",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            backgroundColor: "#f0f0f0",
          }}
        />
      </div>

      {/* Content Section */}
      <div style={{ padding: "20px" }}>
        <h3
          style={{
            color: "#0a3d2c",
            marginBottom: "12px",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          {item.title}
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

        {/* <button
          style={{
            background: "#c8f169",
            border: "none",
            padding: "10px 20px",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          Read More →
        </button> */}
      </div>
    </div>
  );
});

BlogCard.displayName = "BlogCard";

function Blog() {
  const blogs = [
    {
      title: "Benefits of Organic Farming",
      image: OrganicFarming,
      desc: "Discover how organic farming practices improve soil health, produce nutritious food, and protect the environment for future generations.",
    },
    {
      title: "Importance of Compost in Farming",
      image: ImportanceOfCompost,
      desc: "Learn why compost is called 'black gold' by farmers and how it transforms your soil into a nutrient-rich growing medium.",
    },
    {
      title: "Natural Dairy Farming Methods",
      image: NaturalDairyFarmingMethods,
      desc: "Explore sustainable dairy farming practices that ensure animal welfare while producing high-quality, nutritious milk.",
    },
  ];

  return (
    <section
      style={{
        padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px)",
        background: "#eef3e6",
        textAlign: "center",
        overflowX: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(28px, 8vw, 40px)",
          color: "#0a3d2c",
          margin: "0 0 20px 0",
        }}
      >
        Latest from Our Blog
      </h2>

      <p
        style={{
          color: "#2f6d5b",
          marginBottom: "50px",
          fontSize: "clamp(14px, 4vw, 18px)",
        }}
      >
        Learn about organic farming, natural practices, and sustainable living
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {blogs.map((item, index) => (
          <BlogCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default memo(Blog);