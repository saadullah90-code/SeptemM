"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const textRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);
  const cardHeadingRefs = useRef([]);
  const cardParagraphRefs = useRef([]);

  useEffect(() => {
    // Your existing GSAP animations remain exactly the same
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        gsap.from(textRef.current, {
          opacity: 0,
          scale: 0.5,
          duration: 1.5,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        });

        cardsRef.current.forEach((card, index) => {
          if (!card) return;

          gsap.fromTo(
            card,
            {
              opacity: 0,
              scale: 0.8,
              x: index % 2 === 0 ? -200 : 200,
              y: 100,
            },
            {
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 50%",
                scrub: true,
              },
            }
          );
        });

        cardHeadingRefs.current.forEach((heading, index) => {
          if (!heading || !cardParagraphRefs.current[index]) return;

          gsap.set([heading, cardParagraphRefs.current[index]], { x: -400, opacity: 0 });

          gsap.to([heading, cardParagraphRefs.current[index]], {
            opacity: 1,
            x: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              end: "top 50%",
              scrub: true,
            },
          });
        });

      }, contentRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="expertise-section py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title Section */}
      <div className="title-container mb-12 md:mb-20 text-center">
        <h1 ref={textRef} className="title text-3xl sm:text-4xl md:text-5xl font-bold">
          Our Expertise
        </h1>
      </div>

      {/* Card & Text Section - Fixed layout for small screens */}
      <div ref={contentRef} className="content-container space-y-16 sm:space-y-20 md:space-y-24">
        {expertise.map((item, index) => (
          <div 
            key={item.id} 
            className="expertise-item flex flex-col md:flex-row gap-8 md:gap-12 items-stretch"
          >
            {/* Left Side Card - Fixed for mobile */}
            <div 
              ref={(el) => (cardsRef.current[index] = el)} 
              className="card-container w-full md:w-1/2 min-h-[250px] sm:min-h-[300px] md:h-auto"
            >
              <Card data={item} caption="Learn More" className="h-full w-full" />
            </div>

            {/* Right Side Text - Fixed for mobile */}
            <div className="text-container w-full md:w-1/2 flex flex-col justify-center">
              <h2 
                ref={(el) => (cardHeadingRefs.current[index] = el)}
                className="item-title text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4"
              >
                {item.title}
              </h2>
              <p 
                ref={(el) => (cardParagraphRefs.current[index] = el)}
                className="item-description text-base sm:text-lg text-gray-600"
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}