import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillYoutube, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div>
              {/* <TitleLogo title='Media' caption='Septem' className='logobg' /> */}
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 9 pm
              </span>
              <br />
              <br />
              <h3>0306-0475488</h3>
              <br />
              <a href="https://wa.me/923060475488" target="_blank" rel="noopener noreferrer">
  <button className="button-primary">Contact Now</button>
</a>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/agency'>About agency</Link>
              </li>
              <li>
                <Link href='/team'>Our team</Link>
              </li>
              <li>
                <Link href='/showcase'>Our Clients</Link>
              </li>
              <li>
                <Link href='/Blog'>Projects</Link>
              </li>

              <li>
                <Link href='/'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>PROFILE</h3>
              <li>
              <Link href="/our-studio">Our Studio</Link>

              </li>
              <li>
            <Link href="/models" >Models</Link>

              </li>
              <li>
            <Link href="/films" >Films</Link>
              </li>
              <li>
            <Link href="/services">Services</Link>

              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
            <Link href="https://www.facebook.com/share/1Byq6Ycdyx/" target="_blank">
              <BsFacebook size={30} />
            </Link>
          </li>
                    <li>
            <Link href="https://www.instagram.com/septemmedia?igsh=eTk5cWp1ZDc2bGYw" target="_blank">
              <AiFillInstagram size={35} />
            </Link>
          </li>
          <li>
            <Link href='https://youtube.com/@septemoriginal?si=rQ9OsMxvB0x9vLBf' target='_blank'>
        <AiFillYoutube size={35} />
      </Link>
          </li>


              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© SEPTEM MEDIA. ALL RIGHTS RESERVED.</span>
            </div>
            {/* <div className='connect'>
              <span>GORKCODER COMPANY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
