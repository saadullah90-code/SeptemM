import { blog } from "@/assets/data/dummydata"
import BlogCard from "@/components/BlogCard"
import { Title } from "@/components/common/Title"
import React from "react"

const Blog = () => {
  return (
    <>
      <section className='blog-section'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='OUR PROJECTS' />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
