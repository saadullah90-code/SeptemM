import React from "react"
import { Title } from "./common/Title"
import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

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
        <a href={item.instagram} target='_blank' rel='noopener noreferrer' key={item.id}>
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
