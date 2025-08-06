import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import Link from "next/link"


const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            {/* <TitleSm title='CONTACT' /> <br />
            <br /> */}
            <Title title="CONTACT US " className='title-bg' />
          </div>
          <div className='content flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>0306-0475488</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>MODEL TOWN</h3>
                  <span>McDonald's street, Model Town Link Rd, G.E.C.H.S. Phase 2, Lahore, 54600, Pakistan</span>
                </div>

                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>septemoriginal@gmail.com</h3>
                  <span>Career at SEPTEM MEDIA</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <Link href="https://www.facebook.com/share/1Byq6Ycdyx/" target="_blank">
              <BsFacebook size={30} />
            </Link>
                </li>
                
                <li className='icon'>
                  <Link href="https://www.instagram.com/septemmedia?igsh=eTk5cWp1ZDc2bGYw" target="_blank">
              <AiFillInstagram size={35} />
            </Link>
                </li>
                <li className='icon'>
                   <Link href='https://youtube.com/@septemoriginal?si=rQ9OsMxvB0x9vLBf' target='_blank'>
        <AiFillYoutube size={35} />
      </Link>
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
