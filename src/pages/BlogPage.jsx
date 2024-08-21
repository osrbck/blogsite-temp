import React from 'react'
import { Navbar, BlogContent, Footer } from "../components";

const BlogPage = ({blogs}) => {

  

  return (
    <div>
      <Navbar />
      <BlogContent blogs = {blogs} />
      <Footer />
    </div>
  )
}

export default BlogPage