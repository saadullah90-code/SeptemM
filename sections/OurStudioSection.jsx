import React from "react";

const OurStudioSection = () => {
  return (
    <section className="studio-section">
      <div className="studio-container">

        {/* Colored Section Heading */}
        <div className="studio-intro">
          <h5 className="gradient-heading">OUR STUDIO</h5>
          <h1 className="gradient-heading">Where Creativity Meets Production</h1>
          <p className="studio-description">
            Welcome to Septem Studio — your creative playground in the heart of Model Town, Lahore. Designed for photographers, filmmakers, influencers, and content creators, our studio is a professional space built to meet the demands of modern production.
          </p>
        </div>

        {/* Features Section */}
        <div className="studio-content">
          <div className="studio-left">
            <h2 className="studio-heading gradient-heading">What’s Included:</h2>

            <div className="studio-features">
              <div className="feature-box">
                <span className="feature-icon">🎥</span>
                <div>
                  <h4>Fully Equipped Indoor Studio</h4>
                  <p>White & orange backdrops (8ft x 14ft) perfect for diverse shoot styles.</p>
                </div>
              </div>

              <div className="feature-box">
                <span className="feature-icon">💡</span>
                <div>
                  <h4>Studio Lights Included</h4>
                  <p>Professional lights available in hourly & daily rentals.</p>
                </div>
              </div>

              <div className="feature-box">
                <span className="feature-icon">📶</span>
                <div>
                  <h4>Comfort Facilities</h4>
                  <p>Free WiFi, car parking, private bathroom, and a clean outdoor space for natural light shoots.</p>
                </div>
              </div>

              <div className="feature-box">
                <span className="feature-icon">👥</span>
                <div>
                  <h4>On-Site Team Support</h4>
                  <p>Available upon request to ensure a seamless shoot experience.</p>
                </div>
              </div>

              <div className="feature-box">
                <span className="feature-icon">💰</span>
                <div>
                  <h4>Studio Rental Charges</h4>
                  <p>PKR 5,000/hour (inclusive of lights & backdrop use)</p>
                </div>
              </div>

              <div className="feature-box">
                <span className="feature-icon">✅</span>
                <div>
                  <h4>Ideal For</h4>
                  <p>Fashion & product shoots, brand videos & ads, content creation, model/portrait photography, pre-wedding or themed shoots.</p>
                </div>
              </div>
            </div>

          
          </div>

          <div className="studio-right">
            <div className="image-wrapper">
              <img src="/images/ayjay.png" alt="Septem Studio" />
            </div>
          </div>
        </div>

        {/* Studio Gallery Section */}
        <h2 className="studio-heading gradient-heading text-center">Our Studio Gallery</h2>
        <div className="studio-gallery">
          <div className="gallery-item">
            <img src="https://lh3.googleusercontent.com/p/AF1QipMl2iKKwqGiJvvJEMIG4NoxzSyhT4-Njsd5wPlk=s680-w680-h510-rw" alt="Studio Image 1" />
          </div>
          <div className="gallery-item">
            <img src="https://lh3.googleusercontent.com/p/AF1QipPz79Ym8jZ1SP88Tk1Ig40fuN5xsAXppwRCGIDi=s680-w680-h510-rw" alt="Studio Image 2" />
          </div>
          <div className="gallery-item">
            <img src="https://lh3.googleusercontent.com/p/AF1QipOB8Uvcw0vIKAnIYAb_QQCt5Keoh6U2Tiavseos=s680-w680-h510-rw" alt="Studio Image 3" />
          </div>
          <div className="gallery-item">
            <img src="https://lh3.googleusercontent.com/p/AF1QipOlWWM9eVXndyj2OuNEgtVL3z6-CBEvoho6X8VU=s680-w680-h510-rw" alt="Studio Image 4" />
          </div>
          <div className="gallery-item">
            <img src="https://lh3.googleusercontent.com/p/AF1QipMl2iKKwqGiJvvJEMIG4NoxzSyhT4-Njsd5wPlk=s680-w680-h510-rw" alt="Studio Image 5" />
          </div>
          <div className="gallery-item">
            <img src="https://lh3.googleusercontent.com/p/AF1QipPz79Ym8jZ1SP88Tk1Ig40fuN5xsAXppwRCGIDi=s680-w680-h510-rw" alt="Studio Image 6" />
          </div>
          <div className="gallery-item">
            <img src="/images/gallery3.jpg" alt="Studio Image 7" />
          </div>
          <div className="gallery-item">
            <img src="/images/gallery4.jpg" alt="Studio Image 8" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStudioSection;
