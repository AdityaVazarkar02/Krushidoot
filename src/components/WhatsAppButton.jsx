import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ productName, style = {} }) => {
  const phoneNumber = "9021390687";
  const message = `Hello, I would like to order ${productName}. Please provide more details.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: "#25D366",
        color: "white",
        padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 30px)",
        borderRadius: "30px",
        textDecoration: "none",
        fontWeight: "600",
        fontSize: "clamp(14px, 3vw, 16px)",
        boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
        transition: "all 0.3s ease",
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(37, 211, 102, 0.3)";
      }}
    >
      <MessageCircle size={20} />
      Order on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
