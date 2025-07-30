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
            <div className="title-wrapper">
  <Title title="About Us" className="title-bg" />
</div>

          </div>

          <div className='content flex1'>
            <div className='left w-60'>
              <TitleSm title='Welcome Message' />
              <p className='misson-p'>On behalf of the entire team at As Septem Media, I'd like to
extend a very warm welcome!</p> <p className='desc-p'>At Septem Media & Studio, we don’t just build brands — we bring them to life. Based in Lahore, Pakistan, we are a full-service creative agency and production house driven by storytelling, design, and results. From social media management to full-scale film production, our diverse team turns ideas into powerful digital experiences. Whether you're a startup, fashion label, or enterprise, we tailor creative solutions that make an impact.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>8+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>120+</h1>
                  <h3>Successful Projects</h3>
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
              <p className='misson-p'>To become Pakistan’s leading creative and production agency, crafting timeless digital experiences and setting new standards in media, marketing, and storytelling.</p>
<br></br>
<p className='misson-p'>To empower brands with bold visuals, strategic storytelling, and data-driven digital solutions. We aim to be the creative force behind brands that want to connect, engage, and grow.</p>
            </div>
          </div>
        </div>
      </section>


      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
