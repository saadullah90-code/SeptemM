// // 'use client';
// // import { home } from "@/assets/data/dummydata"
// // import Banner from "@/components/Banner"
// // import Expertise from "@/components/Expertise"
// // import ShowCase from "@/components/ShowCase"
// // import Testimonial from "@/components/Testimonial"
// // import Marquee from "@/components/marquee"
// // import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
// // import { BlogCard, Brand } from "@/components/router"
// // import React from "react"
// // import { useEffect, useRef, useState } from "react";
// // import gsap from "gsap";
// // import ScrollTrigger from "gsap/ScrollTrigger";
// // import SplitType from "split-type";
// // import flower from "@/public/images/flower.png"
// // gsap.registerPlugin(ScrollTrigger);


// // const Hero = () => {

// //   const textRef = useRef(null);

// //   useEffect(() => {
// //     if (textRef.current) {
// //       let splitText = new SplitType(textRef.current, { types: "chars, words, lines" });
  
// //       gsap.set(textRef.current, { perspective: 400 });
  
// //       let mm = gsap.matchMedia(); // Responsive animations ke liye
  
// //       // **Large Screens (Desktops)**
// //       mm.add("(min-width: 1025px)", () => {
// //         gsap.from(splitText.chars, {
// //           duration: 1,
// //           scale: 3,
// //           autoAlpha: 0,
// //           rotationX: -180,
// //           transformOrigin: "100% 50%",
// //           ease: "back",
// //           stagger: 0.02,
// //           scrollTrigger: {
// //             trigger: textRef.current,
// //             start: "top 80%",
// //             toggleActions: "play none none none",
// //           },
// //         });
  
// //         gsap.to(textRef.current, {
// //           rotation: 2,
// //           skewX: 5,
// //           duration: 2,
// //           ease: "sine.inOut",
// //           repeat: -1,
// //           yoyo: true,
// //           scrollTrigger: {
// //             trigger: textRef.current,
// //             start: "top 60%",
// //             toggleActions: "play none none none",
// //           },
// //         });
// //       });
  
// //       // **Small Screens (Tablets & Mobiles)**
// //       mm.add("(max-width: 1024px)", () => {
// //         gsap.from(splitText.chars, {
// //           duration: 1,
// //           scale: 1.5, // 👈 Scale kam ki taake layout distort na ho
// //           autoAlpha: 0,
// //           rotationX: -90, // 👈 Mobile pe halka animation rakha
// //           transformOrigin: "50% 50%",
// //           ease: "back",
// //           stagger: 0.03,
// //           scrollTrigger: {
// //             trigger: textRef.current,
// //             start: "top 85%",
// //             toggleActions: "play none none none",
// //           },
// //         });
  
// //         gsap.to(textRef.current, {
// //           rotation: 1, // 👈 Mobile pe halka rotation
// //           skewX: 2, // 👈 No harsh skewing
// //           duration: 2.5,
// //           ease: "sine.inOut",
// //           repeat: -1,
// //           yoyo: true,
// //           scrollTrigger: {
// //             trigger: textRef.current,
// //             start: "top 70%",
// //             toggleActions: "play none none none",
// //           },
// //         });
// //       });
  
// //       // **Fan Effect for Emojis**
// //       gsap.to(".emoji", {
// //         rotation: 360,
// //         duration: 2,
// //         ease: "linear",
// //         repeat: -1,
// //       });
// //     }
// //   }, []);
  
  
  
// //   return (
// //     <>
// // <section className="hero">
// //   <div className="split-text-container">

// // <div className="hero-logo">
// //   <h1>
// //     <span className="left-half">SEPTEM&nbsp;</span>
// //     <span className="right-half">MEDIA</span>
// //   </h1>
// // </div>


// //     <div className="split-text-container">
// //       <h1 className="hero-title">MEDIA MEANS BUSINESS</h1>
// //     </div>

// //     <div className="sub-heading">
// //       <span>DESIGN</span> <span>.</span>
// //       <span>SHOOTS</span> <span>.</span>
// //       <span>DIGITAL </span>
// //     </div>

// //   </div>
// // </section>
// //       <section className='hero-sec'>
// //         <div className='container'>
// //         <div className="heading-title">
       
// //     </div>
// //           <div className='hero-content grid-4'>
// //             {home.map((item, i) => (
// //               <div className='box' key={i}>
// //                 <span className='green'>{item.icon}</span> <br />
// //                 <br />
// //                 <h3>{item.title}</h3>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //       <Expertise />
// //       <Banner />
// //       <Testimonial />
// //       <Marquee />
// //       <ShowCase />
// //       <Brand />

// //       <div className='text-center'>
// //         <Title title='OUR PROJECTS' />
        
// //       </div>
// //       <br></br>
// //       <BlogCard />
// //     </>
// //   )
// // }

// // export default Hero
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { home } from "@/assets/data/dummydata";
// import Banner from "@/components/Banner";
// import Expertise from "@/components/Expertise";
// import ShowCase from "@/components/ShowCase";
// import Testimonial from "@/components/Testimonial";
// import Marquee from "@/components/marquee";
// import { Title } from "@/components/common/Title";
// import { BlogCard, Brand } from "@/components/router";

// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import SplitType from "split-type";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const headingRef = useRef(null);
//   const changingWordRef = useRef(null);
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const words = ["BUSINESS", "BRANDING", "FILMS", "SCALING",  "SHOOTS"];

//   // Animate "MEDIA MEANS" static text with SplitType
//   useEffect(() => {
//     if (headingRef.current) {
//       const split = new SplitType(headingRef.current, {
//         types: "chars, words",
//       });

//       gsap.set(headingRef.current, { perspective: 400 });

//       const mm = gsap.matchMedia();

//       mm.add("(min-width: 1025px)", () => {
//         gsap.from(split.chars, {
//           duration: 1,
//           scale: 3,
//           autoAlpha: 0,
//           rotationX: -180,
//           transformOrigin: "100% 50%",
//           ease: "back",
//           stagger: 0.02,
//           scrollTrigger: {
//             trigger: headingRef.current,
//             start: "top 80%",
//           },
//         });
//       });

//       mm.add("(max-width: 1024px)", () => {
//         gsap.from(split.chars, {
//           duration: 1,
//           scale: 1.5,
//           autoAlpha: 0,
//           rotationX: -90,
//           transformOrigin: "50% 50%",
//           ease: "back",
//           stagger: 0.03,
//           scrollTrigger: {
//             trigger: headingRef.current,
//             start: "top 85%",
//           },
//         });
//       });
//     }
//   }, []);

//   // Animate changing word smoothly
//   useEffect(() => {
//     const changeWord = () => {
//       if (!changingWordRef.current) return;

//       const tl = gsap.timeline();

//       tl.to(changingWordRef.current, {
//         y: -10,
//         opacity: 0,
//         duration: 0.4,
//         ease: "power1.in",
//         onComplete: () => {
//           setCurrentWordIndex((prev) => (prev + 1) % words.length);
//         },
//       });

//       tl.fromTo(
//         changingWordRef.current,
//         { y: 10, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.5,
//           ease: "power2.out",
//           delay: 0.1,
//         }
//       );
//     };

//     const interval = setInterval(changeWord, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <section className="hero">
//         <div className="split-text-container">
//           <div className="hero-logo">
//             <h1>
//               <span className="left-half">SEPTEM&nbsp;</span>
//               <span className="right-half">MEDIA</span>
//             </h1>
//           </div>

//           <div className="split-text-container">
//             <h1 className="hero-title">
//               <span ref={headingRef}>MEDIA MEANS&nbsp;</span>

//               <span className="changing-word" ref={changingWordRef}>
//                 {words[currentWordIndex]}
//               </span>
//             </h1>
//           </div>

//           <div className="sub-heading">
//             <span>DESIGN</span> <span>.</span>
//             <span>SHOOTS</span> <span>.</span>
//             <span>DIGITAL</span>
//           </div>
//         </div>
//       </section>

//       <section className="hero-sec">
//         <div className="container">
//           <div className="hero-content grid-4">
//             {home.map((item, i) => (
//               <div className="box" key={i}>
//                 <span className="green">{item.icon}</span> <br />
//                 <br />
//                 <h3>{item.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Expertise />
//       <Banner />
//       <Testimonial />
//       <Marquee />
//       <ShowCase />
//       <Brand />

//       <div className="text-center">
//         <Title title="OUR PROJECTS" />
//       </div>
//       <br />
//       <BlogCard />
//     </>
//   );
// };

// export default Hero;

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
