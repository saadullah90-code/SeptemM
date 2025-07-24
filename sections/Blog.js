import { blog } from "@/assets/data/dummydata"
import BlogCard from "@/components/BlogCard"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Blog = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='We’ve created standout media across industries, capturing stories that connect and engage:
' /> <br />
            <br />
            <Title title='OUR PROJECTS ' />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
