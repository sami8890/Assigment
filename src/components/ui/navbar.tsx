"use client";
import "@/css/navbar.css";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";

const NextLinks = {
  links: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
   
  ],
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"; // Toggle body scroll
  };

  useEffect(() => {
    if (logoRef.current) {
      // Logo animation from the top
      gsap.fromTo(
        logoRef.current,
        { y: -100, opacity: 0 },  // Start off-screen at the top and hidden
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" } // Slide in and fade in
      );
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isMenuOpen]);

  return (
    <div className="navbar">
      <div className="logo" ref={logoRef}>
        <div className="dot"></div>
        <span className="logo-text">Sami Gabol .</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line line1 ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`line line2 ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`line line3 ${isMenuOpen ? "active" : ""}`}></div>
      </div>

      <div className="nav-links">
        {NextLinks.links.map((link) => (
          <Link key={link.name} href={link.href} className="nav-link">
            {link.name}
          </Link>
        ))}
        <Link href="/contact" className="contact-button">
          Contact
        </Link>
      </div>

      {isMenuOpen && (
        <motion.div
          className="mobile-menu open"
          ref={mobileMenuRef}
        >
          <button className="close-button" onClick={toggleMenu}>
            &times; {/* Close icon */}
          </button>
          {NextLinks.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="mobile-contact-button" onClick={toggleMenu}>
            Contact
          </Link>
        </motion.div>
      )}
    </div>
  );
};
