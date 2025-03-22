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
            <TitleSm title='OUR PROJECTS' /> <br />
            <br />
            <Title title='Our views on marketing, design & technology' />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
