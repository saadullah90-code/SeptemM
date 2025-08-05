"use client";
import React, { useEffect, useRef, useState } from "react";
import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import Marquee from "@/components/marquee";
import { Title } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import gsap from "gsap";

const Hero = () => {
  const changingWordRef = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["BUSINESS", "BRANDING", "FILMS", "SCALING", "SHOOTS"];

  useEffect(() => {
    const changeWord = () => {
      if (!changingWordRef.current) return;

      const tl = gsap.timeline();

      tl.to(changingWordRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.4,
        ease: "power1.in",
        onComplete: () => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        },
      });

      tl.fromTo(
        changingWordRef.current,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    };

    const interval = setInterval(changeWord, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="split-text-container">
          <div className="hero-logo">
            <h1>
              <span className="left-half">SEPTEM&nbsp;</span>
              <span className="right-half">MEDIA</span>
            </h1>
          </div>

          {/* Updated title split in separate divs */}
          <div className="hero-title-wrapper">
            <h1 className="hero-title">
              <div className="static-part">MEDIA MEANS</div>
              <div className="changing-word-wrapper">
                <span className="changing-word" ref={changingWordRef}>
                  {words[currentWordIndex]}
                </span>
              </div>
            </h1>
          </div>

          <div className="sub-heading">
            <span>DESIGN</span> <span>.</span>
            <span>SHOOTS</span> <span>.</span>
            <span>DIGITAL</span>
          </div>
        </div>
      </section>

      <section className="hero-sec">
        <div className="container">
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Expertise />
      <Banner />
      <Testimonial />
      <Marquee />
      <ShowCase />
      <Brand />

      <div className="text-center">
        <Title title="OUR PROJECTS" />
      </div>
      <br />
      <BlogCard />
    </>
  );
};

export default Hero;
