// import Link from "next/link"
// import { TitleLogo } from "./Title"
// import { useRouter } from "next/router"
// import { useEffect, useState } from "react"
// import { RiMenu4Line } from "react-icons/ri"
// import { AiOutlineClose } from "react-icons/ai"
// import Image from 'next/image'

// const Header = () => {
//   const [activeLink, setActiveLink] = useState("")
//   const [open, setOpen] = useState(false)

//   const router = useRouter()
//   useEffect(() => {
//     setActiveLink(router.pathname)
//   }, [router.pathname])
//   return (
//     <>
//       <header>
//         <div className='container'>
//           <div className='logo'>
//   <Link href='/'>
//     <Image
//       src='/images/seplogo2.png'  // ✅ start with /
//       alt='Media Septem Logo'
//       width={180}
//       height={80}
//       className='logomin'
//     />
//   </Link>
//           </div>
//           <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
//             <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
//               Home
//             </Link>
//             <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
//               About
//             </Link>
//             <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
//               Team
//             </Link>
//             <Link href='/our-studio' className={activeLink == "/studio" ? "activeLink" : "none"}>
//               Our Studio
//             </Link>
//              <Link href='/models' className={activeLink == "/studio" ? "activeLink" : "none"}>
//               models
//             </Link>
//             <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
//               Services
//             </Link>
//             <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>
//               Our Clients
//             </Link>
//                         <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>
//               Our films
//             </Link>

//             <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>
//               Projects
//             </Link>
//              <Link href='/our-projects' className={activeLink == "/our-projects" ? "activeLink" : "none"}>
//               Websites
//             </Link>

//             <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
//               Contact
//             </Link>



//             {/* <button className='button-primary'>book a consultation</button> */}
//           </nav>
//           <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
//         </div>
//       </header>
//     </>
//   )
// }

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <header>
      <div className="container">
        {/* ✅ Logo fully left with new class */}
        <div className="logo-left">
          <Link href="/">
            <Image
              src="/images/seplogo.png"
              alt="Media Septem Logo"
              width={180}
              height={80}
              className="logomin"
            />
          </Link>
        </div>

        {/* Centered nav */}
        <div className="nav-wrapper">
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href="/" className={activeLink === "/" ? "activeLink" : ""}>Home</Link>
            <Link href="/agency" className={activeLink === "/agency" ? "activeLink" : ""}>About</Link>
            <Link href="/team" className={activeLink === "/team" ? "activeLink" : ""}>Team</Link>
            <Link href="/services" className={activeLink === "/services" ? "activeLink" : ""}>Services</Link>
            <Link href="/our-studio" className={activeLink === "/our-studio" ? "activeLink" : ""}>Our Studio</Link>
            <Link href="/showcase" className={activeLink === "/showcase" ? "activeLink" : ""}>Our Clients</Link>
            <Link href="/films" className={activeLink === "/films" ? "activeLink" : ""}> Our Films</Link>
            <Link href="/models" className={activeLink === "/models" ? "activeLink" : ""}>Models</Link>
            <Link href="/blogs" className={activeLink === "/blogs" ? "activeLink" : ""}>Projects</Link>
            <Link href="/our-projects" className={activeLink === "/our-projects" ? "activeLink" : ""}>Websites</Link>
            <Link href="/contact" className={activeLink === "/contact" ? "activeLink" : ""}>Contact</Link>
          </nav>
        </div>

        {/* Mobile menu icon on the right */}
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </div>
    </header>
  );
};

export default Header;

