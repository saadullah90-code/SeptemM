'use client';
import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import Marquee from "@/components/marquee"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import flower from "@/public/images/flower.png"
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      let splitText = new SplitType(textRef.current, { types: "chars, words, lines" });

      gsap.set(textRef.current, { perspective: 400 });

      // Characters Animation
      gsap.from(splitText.chars, {
        duration: 1,
        scale: 3,
        autoAlpha: 0,
        rotationX: -180,
        transformOrigin: "100% 50%",
        ease: "back",
        stagger: 0.02,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Words Animation
      gsap.from(splitText.words, {
        duration: 1.2,
        opacity: 0,
        y: 40,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Lines Animation
      gsap.from(splitText.lines, {
        duration: 1.5,
        opacity: 0,
        x: -80,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // ✨ Smooth Waving Effect ✨
      gsap.to(textRef.current, {
        rotation: 2,
        skewX: 5,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      // 🚀 Fan Effect for Emojis Inside <span>, <strong>, <em>
      gsap.to(".emoji", {
        rotation: 360,
        duration: 2,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);
  
  return (
    <>
      <section className='hero'>
        <div className='container' class="split-text-container">
          <TitleLogo title='SEPTEM MEDIA OFFICIAL' caption='' className='logobg' />
          <div className="split-text-container">
  <h1 className="hero-title">
    <span className="text-part left">WE BUILD DIGITAL</span>
    <span className="text-part right">EXPERIENCES</span>
  </h1>
</div>

          

          <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='BRANDING' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
        <div className="heading-title">
        <div id="quote" ref={textRef}>
        From web development to brand shoots, <strong>we bring your vision to life with <span className="emoji">❀</span></strong> like
        {/* <span className="code"> <span className="emoji">💨</span></span>, */}
        <span className="code"> <span className="emoji">🌸</span></span> and
        <span className="code"> <span className="emoji">🔶</span></span>. vision to life with creativity and precision
        <a href="https://www.greensock.com" target="_blank"> No problem</a>.
        Let's build, design, <em className="highlight"> Grow your brand together<span className="emoji">🔥</span></em>  
      </div>
    </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
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

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
