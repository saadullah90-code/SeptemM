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
    if (typeof window !== "undefined") {
      document.body.style.overflowX = "hidden"; // Ensure no horizontal scroll
  
      const ctx = gsap.context(() => {
        gsap.set(
          [
            textRef.current,
            ...cardHeadingRefs.current,
            ...cardParagraphRefs.current,
          ],
          { opacity: 0 }
        );
  
        gsap.to(textRef.current, {
          opacity: 1,
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
              x: index % 2 === 0 ? "-2vw" : "2vw", // Further reduce horizontal movement
              opacity: 0,
              rotation: index % 2 === 0 ? -10 : 10, // Starting rotation for a smoother spin effect
            },
            {
              x: "0vw", // Ensure it stops at the center
              opacity: 1,
              rotation: 0, // Smooth rotation back to normal position
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 55%",
                scrub: true,
              },
            }
          );
        });
  
        cardHeadingRefs.current.forEach((heading, index) => {
          if (!heading || !cardParagraphRefs.current[index]) return;
  
          gsap.to([heading, cardParagraphRefs.current[index]], {
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
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
<section className="expertise-section">
  <div className="container">
    <div ref={textRef} className="title">
      <h1>Our Expertise</h1>
    </div>

    <div ref={contentRef} className="content-container">
      {expertise.map((item, index) => (
        <div
          key={item.id}
          className={`expertise-item ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div
            ref={(el) => (cardsRef.current[index] = el)}
            className="card-container"
          >
            <div className="card-inner">
              <Card data={item} caption="Learn More" className="card-image" />
            </div>
          </div>

          <div className="text-container">
            <h2
              ref={(el) => (cardHeadingRefs.current[index] = el)}
              className="item-title"
            >
              {item.title}
            </h2>
            <div
              ref={(el) => (cardParagraphRefs.current[index] = el)}
              className="item-description"
            >
              {item.desc.map((descItem, descIndex) => (
                <p key={descIndex}>{descItem.text}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  );
}
