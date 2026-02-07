import React, { useState, useEffect, useRef } from "react";
import "../styles/ExploreServices.css";

const ExploreServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Product Screening & Repair",
      description:
        "Checking products, identifying faults, and repairing them to restore full functionality.",
      image: "/images/Services/service-1.jpg",
      delay: "0s",
    },
    {
      id: 2,
      title: "Product Refurbishment (ETN – Equal to New)",
      description:
        "Restoring damaged or returned units to a like-new condition.",
      image: "/images/Services/service-2.jpg",
      delay: "0.1s",
    },
    {
      id: 3,
      title: "Parts Cannibalization",
      description:
        "Harvesting working components from defective/old units to repair other products.",
      image: "/images/Services/service-3.jpg",
      delay: "0.2s",
    },
    {
      id: 4,
      title: "PCB / Component Level Repair",
      description:
        "L2/L3/L4 chip-level PCB diagnostics and repair instead of full board replacement.",
      image: "/images/Services/service-4.jpg",
      delay: "0.3s",
    },
    {
      id: 5,
      title: "Parts Swap Services",
      description:
        "Replacing non-working parts with new or refurbished parts to quickly restore functionality.",
      image: "/images/Services/service-5.jpg",
      delay: "0.4s",
    },
    {
      id: 6,
      title: "Failure Analysis (FA)",
      description:
        "Root-cause failure analysis performed on-site or at the facility to prevent repeat issues.",
      image: "/images/Services/service-6.jpg",
      delay: "0.5s",
    },
    {
      id: 7,
      title: "On-Site Sorting Services",
      description:
        "Sorting defective, refurbishable, and scrap items at the client's warehouse.",
      image: "/images/Services/service-7.jpg",
      delay: "0.6s",
    },
  ];

  // Auto-play effect for carousel
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, services.length]);

  const handleCarouselPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const handleCarouselNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const getVisibleServices = () => {
    const visibleCount = 3;
    const services_list = [];
    for (let i = 0; i < visibleCount; i++) {
      services_list.push(services[(currentIndex + i) % services.length]);
    }
    return services_list;
  };

  return (
    <section
      id="services-carousel-section"
      className="bt_bb_section services-carousel-section"
    >
      <div className="container">
        <div className="carousel-section-header">
          <h2 className="carousel-section-title">
            Explore Our Services
          </h2>
        </div>

        <div className="circular-carousel-wrapper">
          <button
            className="carousel-nav-btn carousel-nav-prev"
            onClick={handleCarouselPrev}
            aria-label="Previous services"
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>

          <div className="circular-carousel-container">
            <div className="carousel-track">
              {getVisibleServices().map((service, index) => (
                <div
                  key={service.id}
                  className={`carousel-item ${
                    index === 1 ? "active" : ""
                  } ${index === 0 ? "prev" : ""} ${
                    index === 2 ? "next" : ""
                  }`}
                >
                  <ServiceCarouselCard service={service} />
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-nav-btn carousel-nav-next"
            onClick={handleCarouselNext}
            aria-label="Next services"
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>

        <div className="carousel-indicators">
          {services.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 8000);
              }}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCarouselCard = ({ service }) => {
  return (
    <div className="carousel-service-card">
      <div className="carousel-service-image-wrapper">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="carousel-service-image"
        />
        <div className="carousel-service-overlay" />
      </div>
      <div className="carousel-service-content">
        <h3 className="carousel-service-title">{service.title}</h3>
        <p className="carousel-service-description">{service.description}</p>
      </div>
    </div>
  );
};

export default ExploreServices;
