import React from 'react'
import  logomeu from '../assets/logo-meu.svg'


const BlogContent = () => {

  const blog = {
    "id":1,
    "title": "MND",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "coverImg":logomeu
  }

  return (
    <div className='w-full pb-10 bg-[#f9f9f9]'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gay-y-8 px-4 sm-pt-20 md-mt-0 ss-pt-20 text-black'>
          <div className='col-span-2 gap-x-8 gap-y-8'>
            <img className='h-56 object-cover w-full py-3' src={blog.coverImg} />
            <h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
            <div className='pt-5'>
              <p>{blog.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogContent