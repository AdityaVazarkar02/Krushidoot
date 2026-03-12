import React from "react";
import { Leaf, Truck, HeartPulse, Sprout, ShieldCheck } from "lucide-react";

function Features() {
const features = [
  {
    icon: <Leaf size={32} />,
    title: "100% Organic",
    desc: "Naturally grown products free from chemicals, pesticides, and artificial fertilizers.",
  },
  {
    icon: <Truck size={32} />,
    title: "Farm Fresh",
    desc: "Freshly harvested products delivered directly from our farm to your doorstep.",
  },
  {
    icon: <HeartPulse size={32} />,
    title: "Hygienic Animal Care",
    desc: "Our livestock is raised in clean, stress-free environments with proper nutrition and care.",
  },
  {
    icon: <Sprout size={32} />,
    title: "Sustainable Farming Practices",
    desc: "We follow eco-friendly farming methods that protect soil health and preserve nature.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Trusted Local Brand",
    desc: "A reliable and community-focused brand committed to quality, freshness, and customer satisfaction.",
  },
];

  return (
    <div>
      <section
        style={{
          padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 60px)",
          background: "#e9f1e3",
          display: "flex",
          justifyContent: "space-between",
          gap: "clamp(20px, 3vw, 30px)",
          flexWrap: "wrap",
          overflowX: "hidden",
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 calc(20% - 20px)",
              minWidth: "200px",
              background: "#f3f4f6",
              borderRadius: "25px",
              padding: "clamp(30px, 5vw, 50px) clamp(20px, 4vw, 30px)",
              textAlign: "center",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
            }}
          >
            {/* Icon Circle */}
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "#b5e048",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 25px",
                color: "#064e3b",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                fontSize: "clamp(16px, 4vw, 24px)",
                marginBottom: "15px",
                color: "#064e3b",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontSize: "clamp(13px, 3.5vw, 16px)",
                lineHeight: "1.7",
                color: "#1b4332",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </section>
      
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 40px 20px !important;
            flex-direction: column !important;
          }
          div[style*="flex: 1"] {
            margin-bottom: 20px !important;
          }
          h3 {
            font-size: 1.5rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          section {
            padding: 60px 30px !important;
          }
          h3 {
            font-size: 1.8rem !important;
          }
          p {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Features;