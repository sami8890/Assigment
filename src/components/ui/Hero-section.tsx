"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../css/hero.css";

const HeroSection = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (nameRef.current && titleRef.current) {
      gsap.fromTo(
        nameRef.current,
        { x: -100, opacity: 0 }, // Start from left (100px) and invisible
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      gsap.fromTo(
        titleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power3.out", delay: 1 } // Fade in
      );
    }
  }, []);

  return (
    <section id="hero">
      <div className="container">
        <div className="mb-6">
          <h1 className="name" ref={nameRef}>
            Hello, I&apos;m Sami Gabol
          </h1>
          <h2 ref={titleRef}>Front-end Developer</h2>
        </div>
        <p className="description">
          I&apos;m from Pakistan and I have been working as a Front-end Developer
          for more than 1 year. I have a passion for creating beautiful and
          efficient web applications. I&apos;m always eager to learn new things
          and I&apos;m excited
          to see what the future holds.
        </p>
        <div className="call-to-action">
          <a href="mailto:samigabol12@gmail.com" className="button email-button">
            Email Me
          </a>
          <a href="/sami.pdf" className="button download-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12.75v6a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18.75v-6M7.5 12l4.5 4.5m0 0l4.5-4.5M12 3v13.5"
              />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
