"use client";

import React, { useEffect, useRef } from "react";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { gsap } from "gsap";
import "../../css/service.css";

// Service interface to define structure of each service item
interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string; 
}

// Array of service items with their respective icons, titles, and descriptions
const services: Service[] = [
  {
    id: 1,
    icon: FaCode,
    title: "Front-End Development",
    description:
      "Building responsive and user-friendly websites using modern technologies.",
  },
  {
    id: 2,
    icon: MdDesignServices,
    title: "Graphic Designing",
    description:
      "Creating visually appealing graphics for branding and marketing purposes.",
  },
  {
    id: 3,
    icon: IoVideocam,
    title: "Video Editing",
    description: "Editing videos to create engaging and professional content.",
  },
];

// Props interface for ServiceBox component to type the icon, title, and description props
interface ServiceBoxProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

// ServiceBox component to render individual service items with an icon, title, and description
const ServiceBox: React.FC<ServiceBoxProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="service-box">
    <div className="service-icon">
      <Icon size={40} aria-label={title} />
    </div>
    <p className="service-text">{title}</p>
    <p className="service-description">{description}</p>
  </div>
);

// Main section component that renders experience and services
const SecondSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // GSAP animation to animate heading text on initial load
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
          stagger: 0.2,
        }
      );
    }
  }, []);

  return (
    <section id="work">
      {/* Experience heading section */}
      <div className="experience-text">
        <div className="text-left">
          <h2 className="experience-heading" ref={headingRef}>
            <span>1+</span>
            <span> years</span>
            <span> experience</span>
            <br />
            <span>working</span>
          </h2>
        </div>
        {/* Services introduction section */}
        <div className="services-section">
          <div className="service-line">
            <div></div>
            <h3 className="service-title">Services</h3>
          </div>
          <p className="service-description">
            Discover the best services I offer, designed to ensure the success
            of your project.
          </p>
        </div>
      </div>
      {/* Service boxes for each service item */}
      <div className="service-boxes">
        {services.map(({ id, icon, title, description }) => (
          <ServiceBox
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
