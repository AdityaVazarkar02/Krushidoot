import React, { useState, memo } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";

// Wormy Compost Images
import WormyCompost1 from "../assets/gallery/wormy-compost/VarmingCompost.jpeg";
import WormyCompost2 from "../assets/gallery/wormy-compost/VarmingCompost1.jpeg";
import WormyCompost3 from "../assets/gallery/wormy-compost/VarmingCompost2.jpeg";
import WormyCompost4 from "../assets/gallery/wormy-compost/Compost1.jpeg";
import WormyCompost5 from "../assets/gallery/wormy-compost/Compost2.jpeg";
import WormyCompost6 from "../assets/gallery/wormy-compost/Compost3.jpeg";

// Fresh Milk Images
import FreshMilk1 from "../assets/gallery/fresh-milk/WhatsApp Image 2026-02-28 at 2.22.52 PM.jpeg";
import FreshMilk2 from "../assets/gallery/fresh-milk/WhatsApp Image 2026-02-28 at 2.22.52 PM (1).jpeg";
import FreshMilk3 from "../assets/gallery/fresh-milk/WhatsApp Image 2026-02-28 at 2.22.52 PM (2).jpeg";
import FreshMilk4 from "../assets/gallery/fresh-milk/WhatsApp Image 2026-02-28 at 2.22.53 PM.jpeg";
import CowDung from "../assets/gallery/fresh-milk/image.png";
import CowDung1 from "../assets/gallery/fresh-milk/Dung2.jpeg";

// Farm Goat Images
import FarmGoat1 from "../assets/gallery/farm-goat/WhatsApp Image 2026-02-28 at 2.22.51 PM.jpeg";
import FarmGoat2 from "../assets/gallery/farm-goat/WhatsApp Image 2026-02-28 at 2.22.51 PM (1).jpeg";
import FarmGoat3 from "../assets/gallery/farm-goat/image.png";
import FarmGoat4 from "../assets/gallery/farm-goat/Gote1.jpeg";
import FarmGoat5 from "../assets/gallery/farm-goat/Gote2.jpeg";
import FarmGoat6 from "../assets/gallery/farm-goat/Gote3.jpeg";

// Organic Eggs Images
import OrganicEggs1 from "../assets/gallery/organic-eggs/egg1.jpeg";
import OrganicEggs2 from "../assets/gallery/organic-eggs/WhatsApp Image 2026-02-28 at 2.22.49 PM.jpeg";
import OrganicEggs3 from "../assets/gallery/organic-eggs/WhatsApp Image 2026-02-28 at 2.22.50 PM.jpeg";
import OrganicEggs4 from "../assets/gallery/organic-eggs/WhatsApp Image 2026-02-28 at 2.22.50 PM (1).jpeg";
import OrganicEggs5 from "../assets/gallery/organic-eggs/WhatsApp Image 2026-02-28 at 2.22.51 PM.jpeg";

// Fresh Vegetables Images
import FreshVegetables1 from "../assets/gallery/fresh-vegetables/WhatsApp Image 2026-02-23 at 3.29.45 PM.jpeg";
import FreshVegetables2 from "../assets/gallery/fresh-vegetables/WhatsApp Image 2026-02-23 at 3.29.46 PM.jpeg";
import FreshVegetables3 from "../assets/gallery/fresh-vegetables/WhatsApp Image 2026-02-23 at 3.29.46 PM (1).jpeg";
import FreshVegetables4 from "../assets/gallery/fresh-vegetables/WhatsApp Image 2026-02-23 at 3.29.46 PM (2).jpeg";
import FreshVegetables5 from "../assets/gallery/fresh-vegetables/demo.jpeg";
import FreshVegetables6 from "../assets/gallery/fresh-vegetables/demo2.jpeg";


const GalleryCategory = memo(({ title, images, onImageClick }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = document.getElementById(`scroll-${title}`);
    const scrollAmount = 300;
    if (container) {
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setScrollPosition(container.scrollLeft - scrollAmount);
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setScrollPosition(container.scrollLeft + scrollAmount);
      }
    }
  };

  return (
    <div style={{ marginBottom: "60px" }}>
      <h3
        style={{
          fontSize: "clamp(22px, 5vw, 28px)",
          color: "#0a3d2c",
          marginBottom: "20px",
          fontWeight: "600",
        }}
      >
        {title}
      </h3>

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {/* Left Scroll Button */}
        {scrollPosition > 0 && (
          <button
            onClick={() => scroll("left")}
            style={{
              position: "absolute",
              left: "0",
              zIndex: "10",
              background: "rgba(11, 93, 59, 0.8)",
              border: "none",
              color: "white",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0a3d2c")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(11, 93, 59, 0.8)")}
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Images Container */}
        <div
          id={`scroll-${title}`}
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            paddingBottom: "10px",
            width: "100%",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
        >
          {images.length > 0 ? (
            images.map((image, index) => (
              <div
                key={index}
                onClick={() => onImageClick(image)}
                style={{
                  minWidth: "250px",
                  height: "250px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  cursor: "pointer",
                  scrollSnapAlign: "start",
                  transition: "all 0.3s ease",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))
          ) : (
            <div
              style={{
                width: "100%",
                height: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f0f0f0",
                borderRadius: "15px",
                color: "#999",
                fontSize: "16px",
              }}
            >
              No images available yet. Add images to the {title} gallery folder.
            </div>
          )}
        </div>

        {/* Right Scroll Button */}
        {images.length > 0 && (
          <button
            onClick={() => scroll("right")}
            style={{
              position: "absolute",
              right: "0",
              zIndex: "10",
              background: "rgba(11, 93, 59, 0.8)",
              border: "none",
              color: "white",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0a3d2c")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(11, 93, 59, 0.8)")}
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>
    </div>
  );
});

GalleryCategory.displayName = "GalleryCategory";

// Modal Component for Full Screen View
const ImageModal = memo(({ image, onClose }) => {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "2000",
        animation: "fadeIn 0.3s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-40px",
            right: "0",
            background: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
        >
          <X size={24} />
        </button>
        <img
          src={image}
          alt="Full view"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "10px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        />
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
});

ImageModal.displayName = "ImageModal";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery categories with empty arrays - users will add images to these folders
  const galleryData = [
    {
      title: "Vermicompost",
      path: "gallery/wormy-compost",
      images: [WormyCompost1, WormyCompost3 , WormyCompost4, WormyCompost5, WormyCompost6],
    },
    {
      title: "Cow Products",
      path: "gallery/fresh-milk",
      images: [ FreshMilk2, FreshMilk3, FreshMilk4 , CowDung, CowDung1] ,
    },
    {
      title: "Farm Goat",
      path: "gallery/farm-goat",
      images: [FarmGoat6, FarmGoat1, FarmGoat2 , FarmGoat3 , FarmGoat4 , FarmGoat5],
    },
    {
      title: "Fresh Vegetables & Fruits",
      path: "gallery/fresh-vegetables",
      images: [FreshVegetables1, FreshVegetables2, FreshVegetables3, FreshVegetables4 , FreshVegetables5, FreshVegetables6],
    },
    {
      title: "Organic Eggs",
      path: "gallery/organic-eggs",
      images: [OrganicEggs1, OrganicEggs2, OrganicEggs3, OrganicEggs4, OrganicEggs5],
    },
  ];

  return (
    <>
      <div style={{ marginTop: "90px" }}>
        <section
          style={{
            padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 60px)",
            background: "linear-gradient(135deg, #f1f3f7 0%, #e8f5e9 100%)",
            minHeight: "100vh",
          }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            {/* Back Button */}
            <div style={{ textAlign: "center", marginBottom: "30px", marginTop: "20px" }}>
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
                  transition: "all 0.3s ease",
                  fontSize: "clamp(12px, 3vw, 16px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#c8f169";
                  e.currentTarget.style.color = "#0b5d3b";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0b5d3b";
                  e.currentTarget.style.color = "white";
                }}
              >
                ← Back to Home
              </Link>
            </div>
            
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h1
                style={{
                  fontSize: "clamp(32px, 7vw, 48px)",
                  color: "#0a3d2c",
                  marginBottom: "15px",
                  fontWeight: "700",
                }}
              >
                Our Farm Gallery
              </h1>

              <p
                style={{
                  fontSize: "clamp(16px, 4vw, 20px)",
                  color: "#2f6d5b",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: "1.6",
                }}
              >
                Explore our beautiful farm and our premium products. Each image tells a story of our dedication to organic farming and quality.
              </p>
            </div>

            {/* Floating WhatsApp Button */}
            <WhatsAppButton 
              productName="Farm Products" 
              style={{
                position: "fixed",
                bottom: "30px",
                right: "30px",
                zIndex: "2000",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)"
              }}
            />
            
            {/* Gallery Categories */}
            <div>
              {galleryData.map((category, index) => (
                <GalleryCategory
                  key={index}
                  title={category.title}
                  images={category.images}
                  onImageClick={setSelectedImage}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
}

export default memo(Gallery);
