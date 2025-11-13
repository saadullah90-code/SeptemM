

// export default Banner;
import React, { useEffect, useRef, useState } from "react";
import { pricingData } from "@/assets/data/dummydata";

import { Title, TitleLogo } from "./common/Title";

const Counter = ({ target, label, delay }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const stepTime = Math.max(20, Math.floor(duration / target));
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, target]);

  return (
    <div ref={ref} className="counter-box">
      <h2 className="counter-number">{count}+</h2>
      <p className="counter-label">{label}</p>
    </div>
  );
};

const Banner = () => {
  return (
    <>
  <section className="banner-section">
  <div className="banner-container">
    <div className="banner-content">
      {/* <div className="banner-text">
        <Title className="text-left" title="Ready to build something great?" />
        <TitleLogo title="Let's elevate your brand together." />
      </div> */}

      <div className="counter-wrapper">
        <Counter target={120} label="Projects Completed" delay={0} />
        <Counter target={20} label="Happy Clients" delay={200} />
        <Counter target={15} label="Team Members" delay={400} />
        <Counter target={8} label="Years of Experience" delay={600} />
      </div>
    </div>
  </div>
</section>

     <section className="pricing-section">
      <div className="pricing-container">
        <h1 className="pricing-main-title">OUR PLANS</h1>
        {pricingData.map((section, idx) => (
          <div key={idx} className="pricing-category">
            <h2 className="pricing-title">{section.section}</h2>
            <div className="pricing-cards">
              {section.plans.map((plan, index) => (
                <div key={index} className="pricing-card">
                  <h3 className="pricing-card-title">{plan.title}</h3>
<p className="price">
  {plan.price}
  {plan.period && <span className="per-period">{plan.period}</span>}
</p>

                  <ul className="pricing-features">
                    {plan.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  



</>
  );
};

export default Banner;
