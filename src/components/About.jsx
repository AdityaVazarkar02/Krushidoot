import React from "react";
import farmerImg from "../assets/Farmer.webp";

function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Krushidoot</h2>

      <p className="about-description">
        Krushidoot is a natural farming initiative started by Ketan Hinge,
        a B.Sc Agriculture graduate. Our mission is to provide fresh,
        organic, and high-quality farm products directly to customers.
      </p>

      <div className="about-card">
        {/* Circular Image */}
        <div className="about-image">
          <img src={farmerImg} alt="Farmer" />
        </div>

        {/* Content */}
        <div className="about-content">
          <h3>Ketan Hinge</h3>
          <h4>B.Sc Agriculture</h4>

          <p>
            Ketan Hinge, founder of Krushidoot, holds a Bachelor’s degree in
            Agriculture and carries a deep passion for farming and nature.
            While many chose city careers, he chose the soil — driven by his
            belief in sustainable agriculture and rural development.

            With a vision to promote organic farming, quality livestock
            management, and farm-direct products, he established Krushidoot
            as a model agricultural enterprise rooted in purity,
            responsibility, and respect for nature.

            For him, agriculture is not just a profession — it is a way of life.
          </p>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
          background: #e9f1e3;
          text-align: center;
          overflowX: hidden;
        }

        .about-title {
          font-size: clamp(28px, 8vw, 48px);
          color: #0f5132;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .about-description {
          max-width: 850px;
          margin: 0 auto 60px;
          font-size: clamp(14px, 4vw, 20px);
          color: #1b4332;
          line-height: 1.8;
        }

        .about-card {
          background: #f3f4f6;
          border-radius: 30px;
          padding: clamp(30px, 6vw, 50px);
          display: flex;
          align-items: center;
          gap: clamp(20px, 5vw, 50px);
          max-width: 1200px;
          margin: auto;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        /* PERFECT CIRCLE IMAGE WITHOUT CROPPING */
        .about-image {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          border: 8px solid #b5e048;
          overflow: hidden;
          flex-shrink: 0;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-image img {
          width: 90%;
          height: 90%;
          object-fit: contain; /* 🔥 Prevents cutting */
        }

        .about-content {
          text-align: left;
          max-width: 700px;
        }

        .about-content h3 {
          font-size: clamp(24px, 6vw, 36px);
          color: #064e3b;
          margin-bottom: 8px;
        }

        .about-content h4 {
          font-size: clamp(16px, 4vw, 20px);
          margin-bottom: 20px;
          color: #1b4332;
          font-weight: 500;
        }

        .about-content p {
          font-size: clamp(14px, 4vw, 18px);
          line-height: 1.8;
          color: #1b4332;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .about-image {
            width: 200px;
            height: auto;
            border-radius: 0;
            border: none;
          }
          
          .about-image img {
            width: 100%;
            height: auto;
            object-fit: contain;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .about-section {
            padding: clamp(30px, 6vw, 50px) clamp(15px, 4vw, 20px);
          }

          .about-title {
            font-size: clamp(24px, 7vw, 32px);
          }

          .about-description {
            font-size: clamp(12px, 3vw, 16px);
          }

          .about-card {
            flex-direction: column;
            padding: clamp(20px, 5vw, 30px);
            text-align: center;
          }

          .about-content {
            text-align: center;
          }

          .about-image {
            width: 100%;
            height: auto;
            max-width: 250px;
            border-radius: 0;
            border: none;
            margin: 0 auto 20px;
          }

          .about-image img {
            width: 100%;
            height: auto;
            object-fit: contain;
          }

          .about-content h3 {
            font-size: clamp(18px, 5vw, 24px);
          }

          .about-content h4 {
            font-size: clamp(14px, 4vw, 16px);
          }

          .about-content p {
            font-size: clamp(12px, 3.5vw, 15px);
          }
        }
      `}</style>
    </section>
  );
}

export default About;