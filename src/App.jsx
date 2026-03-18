import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Features from "./components/Features";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import VermicompostPage from "./Pages/VermicompostPage";
import DairyFarmPage from "./Pages/DairyFarmPage";
import GoatFarmPage from "./Pages/GoatFarmPage";
import FreshVegetablesPage from "./Pages/FreshVegetablesPage";
import OrganicEggsPage from "./Pages/OrganicEggsPage";
import SheepFarmPage from "./Pages/SheepFarmPage";
import FreshFruitPage from "./Pages/FreshFruitPage";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <div id="hero" style={{ marginTop: "90px" }}>
        <Hero />
      </div>
      <div id="about" style={{ marginTop: "" }}>
        <About />
      </div>
      <div id="vision-mission" style={{ marginTop: "" }}>
        <VisionMission />
      </div>
      <div id="features" style={{ marginTop: "" }}>
        <Features />
      </div>
      <div id="products" style={{ marginTop: "90px" }}>
        <Products />
      </div>
      <div id="blog" style={{ marginTop: "90px" }}>
        <Blog />
      </div>
      <div id="contact" style={{ marginTop: "90px" }}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/vermicompost" element={<VermicompostPage />} />
          <Route path="/dairy-farm" element={<DairyFarmPage />} />
          <Route path="/goat-farm" element={<GoatFarmPage />} />
          <Route path="/vegetables" element={<FreshVegetablesPage />} />
          <Route path="/organic-eggs" element={<OrganicEggsPage />} />
          <Route path="/sheep-farm" element={<SheepFarmPage />} />
          <Route path="/fruits" element={<FreshFruitPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;