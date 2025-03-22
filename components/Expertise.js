import React, { useEffect, useRef } from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        // Heading Animation
        gsap.from(headingRef.current, {
          x: -200,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        });

        // Ensure all refs are assigned before running animations
        if (cardsRef.current.length > 0) {
          cardsRef.current.forEach((card, index) => {
            if (!card) return; // Avoid null elements
            gsap.from(card, {
              opacity: 0,
              x: index % 2 === 0 ? -300 : 300, // Alternate movement
              y: 150,
              rotate: index % 2 === 0 ? -45 : 45,
              scale: 0.5,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 40%",
                scrub: true,
              },
            });
          });
        }
      }, contentRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="expertise" ref={sectionRef}>
      <div className="container">
        <div className="heading-title" ref={headingRef}>
          <Title title="Our expertise" />
          <p>
            Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac
            volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula
            at, molestie dolor.
          </p>
        </div>
        <div className="hero-content grid-4" ref={contentRef}>
          {expertise.map((item, index) => (
            <Card
              data={item}
              key={item.id}
              caption="learn more"
              ref={(el) => (cardsRef.current[index] = el)} // Store refs properly
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
