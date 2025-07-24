import { showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const ShowCase = () => {
  return (
    <>
<section className='showcase'>
  <div className='container'>
    <div className='heading-title'>
      <Title title='OUR CLIENTS' />
    </div>
    <div className='hero-content grid-3 py'>
      {showcase.map((item) => (
        <a
          href={item.instagram}
          target='_blank'
          rel='noopener noreferrer'
          key={item.id}
          style={{ textDecoration: 'none', color: 'inherit' }} // Optional: remove underline and inherit text color
        >
          <Card data={item} caption={item.catgeory} />
        </a>
      ))}
    </div>
  </div>
</section>

    </>
  )
}

export default ShowCase
