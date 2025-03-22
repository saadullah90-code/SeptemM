import React from "react"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"

const Brand = () => {
  return (
    <>
       <section className="brand">
      <div className="container">
        <div className="heading-title">
          <Title title="WE ARE PROUD TO WORK WITH THESE COMPANIES" />
        </div>
        <div className="marquee">
          <div className="marquee-content">
            {brand.concat(brand).map((item, index) => ( // Duplicate for continuous effect
              <div className="images" key={index}>
                <img src={item.cover} alt={`brand-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Brand
