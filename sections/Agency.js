import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Welcome Message' />
              <p className='misson-p'>On behalf of the entire team at As Septem Media, I'd like to
extend a very warm welcome!</p> <p className='desc-p'>I'm Ay Jay, the CEO here, and
I've had the pleasure of leading this talented group of
filmmakers for the past ten years. During that time, I've seen
our team grow tremendously, not only in size but also in
expertise and creativity. We've had the opportunity to work
with a diverse range of clients on a variety of projects, and
each experience has helped us hone our skills and refine our
approach to video production.
For the past decade, we've honed our skills and expertise in a
wide range of video production and post-production
services, from product demos to heart-warming
documentaries. We believe in fostering a close, collaborative
partnership with our clients, ensuring every step of the
process is tailored to your specific needs and goals.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/ayjay.png' alt='Img' className='round' width='100%' height='80%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission & vision' />
              <br />
              <p className='misson-p'>To be the leading provider of innovative and impactful video
solutions, shaping the future of storytelling and marketing
through the power of visual and social media.</p>
<br></br>
<p className='misson-p'>To empower our clients with exceptional video production,
post-production, and marketing services in transforming
their visions into captivating stories that connect, engage,
inspire, and sell.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
