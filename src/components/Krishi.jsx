import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Krishi.css";
import "../Features/Theme.css";
import { useNavigate } from "react-router-dom";

import logoImage from "../assets/logo.png";
import { useClerk } from "@clerk/clerk-react";
import ThemeButton from "../Features/themeButton.jsx";
import ChatbotButton from "../Features/ChatbotButton"; // Your import is correct
import "./Chatbot.css";
import { NavBar } from "../Features/NavBar.jsx";
import { Footer } from "../Features/Footer.jsx";
import AiCropPredict from "./AiCropPredict.jsx";
import "./AiCropPredict.css";
import WeatherAlerts from "./WeatherAlerts.jsx";
import "./WeatherAlerts.css";
const initialSchemes = [
  {
    logoIcon: "award",
    tag: "PM-KISAN",
    title: "Income Support Scheme",
    description:
      "₹6,000 per year in three equal installments to all landholding farmer families.",
  },
  {
    logoIcon: "droplet",
    tag: "PMKSY",
    title: "Irrigation Scheme",
    description:
      "Harnessing water resources efficiently to expand cultivable area under irrigation.",
  },
  {
    logoIcon: "shield",
    tag: "PMFBY",
    title: "Crop Insurance",
    description:
      "Comprehensive risk insurance against natural calamities for food crops.",
  },
  {
    logoIcon: "truck",
    tag: "e-NAM",
    title: "National Agricultural Market",
    description:
      "Online trading platform for agricultural commodities to ensure better prices.",
  },
];

const KrishiSahayak = () => {
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const schemesCarouselRef = useRef(null);
  const [schemes, setSchemes] = useState(initialSchemes);
  const [isLoading, setIsLoading] = useState(false);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme || (userPrefersDark ? "dark" : "light");
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // --- FUNCTION TO LOAD MORE SCHEMES ---
  const loadMoreSchemes = () => {
    if (isLoading) return; // Prevent multiple loads at once
    setIsLoading(true);

    // Simulate a network request delay
    setTimeout(() => {
      setSchemes((prevSchemes) => [...prevSchemes, ...initialSchemes]);
      setIsLoading(false);
    }, 500); // 0.5 second delay
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    feather.replace();

    const carousel = schemesCarouselRef.current;
    if (carousel) {
      let isDown = false;
      let startX;
      let scrollLeft;

      const handleMouseDown = (e) => {
        isDown = true;
        carousel.classList.add("active");
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      };

      const handleMouseLeave = () => {
        isDown = false;
        carousel.classList.remove("active");
      };

      const handleMouseUp = () => {
        isDown = false;
        carousel.classList.remove("active");
      };

      const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;

        // --- INFINITE SCROLL CHECK ---
        const {
          scrollLeft: currentScrollLeft,
          clientWidth,
          scrollWidth,
        } = carousel;
        if (
          !isLoading &&
          currentScrollLeft + clientWidth >= scrollWidth - 100
        ) {
          loadMoreSchemes();
        }
      };

      carousel.addEventListener("mousedown", handleMouseDown);
      carousel.addEventListener("mouseleave", handleMouseLeave);
      carousel.addEventListener("mouseup", handleMouseUp);
      carousel.addEventListener("mousemove", handleMouseMove);

      return () => {
        carousel.removeEventListener("mousedown", handleMouseDown);
        carousel.removeEventListener("mouseleave", handleMouseLeave);
        carousel.removeEventListener("mouseup", handleMouseUp);
        carousel.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isLoading]);

  const services = [
    {
      icon: "cpu",
      title: "AI Crop Prediction",
      description:
        "Get accurate crop yield predictions using our advanced AI models tailored to your farm's conditions.",
      path: "/AiCropPredict",
    },
    
    {
      icon: "cloud",
      title: "Weather Alerts",
      description:
        "Hyper-local weather forecasts and alerts to protect your crops from adverse conditions.",
      path: "/WeatherAlerts",
    },
  ];

  const steps = [
    {
      step: 1,
      icon: "bar-chart-2",
      title: "Yield Optimization",
      description:
        "Our AI analyzes soil, weather, and crop data to recommend optimal planting strategies.",
    },
    {
      step: 2,
      icon: "alert-triangle",
      title: "Risk Management",
      description:
        "Get early warnings for pests, diseases, and adverse weather to protect your crops.",
    },
    {
      step: 3,
      icon: "refresh-cw",
      title: "Sustainable Practices",
      description:
        "Implement eco-friendly farming techniques that improve soil health and reduce costs.",
    },
  ];

  return (
    <div className="krishi Sahayak">
      <div className="hero">
        <div className="container hero-content" data-aos="fade-up">
          <h1 className="hero-title">
            AI Powered Insights for Modern Agriculture
          </h1>
          <p className="hero-subtitle">
            Cultivate Prosperity, Harvesting the Future
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="services-section">
        <h2 className="section-title" data-aos="fade-up">
          Our Services
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="card service-card"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
              onClick={() => navigate(service.path)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-icon-wrapper">
                <i data-feather={service.icon} className="card-icon"></i>
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Government Schemes Carousel */}
   
     

      {/* How It Works Section */}
      <div className="section how-it-works-section">
        <h2 className="section-title" data-aos="fade-up">
          How It Works
        </h2>
        <div className="how-it-works-grid">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card how-it-works-card"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="step-number-wrapper">
                <span className="step-number">{step.step}</span>
              </div>
              <div className="card-icon-wrapper">
                <i data-feather={step.icon} className="card-icon"></i>
              </div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title" data-aos="fade-up">
            Ready to Transform Your Farming?
          </h2>
          <p className="cta-subtitle" data-aos="fade-up" data-aos-delay="100">
            Join thousands of farmers who are already benefiting from our
            AI-powered agriculture platform.
          </p>
          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
            <button onClick={(e) => openSignIn()} className="btn btn-cta-white">
              Sign Up Free
            </button>
          </div>
        </div>
      </div>

      {/* --- CHATBOT BUTTON ADDED HERE --- */}
      <ChatbotButton />
    </div>
  );
};

export default KrishiSahayak;
