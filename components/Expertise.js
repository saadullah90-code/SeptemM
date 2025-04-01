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
              x: index % 2 === 0 ? "-5vw" : "5vw", // 🔥 Fix: Reduce movement to avoid overflow
              opacity: 0,
            },
            {
              x: "0vw",
              opacity: 1,
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
    <section className="expertise-section w-screen overflow-x-hidden py-16 px-4 md:px-8 lg:px-12 bg-white relative">
      <div className="max-w-screen-xl mx-auto">
        <div ref={textRef} className="title items-center justify-center">
          <h1 className="">
            Our Expertise
          </h1>
          
        </div>

        <div ref={contentRef} className="content-container w-full space-y-24">
          {expertise.map((item, index) => (
            <div
              key={item.id}
              className={`expertise-item flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-8 md:gap-12 w-full min-h-[300px] items-center`}
            >
              {/* Image/Card Section */}
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="card-container w-full md:w-1/2 h-[300px] md:h-[400px] relative"
              >
                <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                  <Card data={item} caption="Learn More" className="h-full w-full object-cover" />
                </div>
              </div>

              {/* Text Section */}
              <div className="text-container w-full md:w-1/2 flex flex-col justify-center text-left">
                <h2
                  ref={(el) => (cardHeadingRefs.current[index] = el)}
                  className="item-title text-left text-2xl md:text-3xl font-bold mb-4 text-gray-900 opacity-0"
                >
                  {item.title}
                </h2>
                <p
                  ref={(el) => (cardParagraphRefs.current[index] = el)}
                  className="item-description  text-lg text-gray-600 leading-relaxed opacity-0"
                >
                         <div className="item-description text-lg text-gray-600 leading-relaxed opacity-0">
                {item.desc.map((descItem, descIndex) => (
                  <p key={descIndex}>{descItem.text}</p>
                ))}
              </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
