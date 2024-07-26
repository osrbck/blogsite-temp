import React from 'react'
import  logomeu from '../assets/logo-meu.svg'

const Blogs = () => {

    const blogs = [
        {
            "id":1,
            "title": "Blog 1",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "coverImg":logomeu
        },
        {
            "id":2,
            "title": "Blog 2",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "coverImg":logomeu
        },{
            "id":3,
            "title": "Blog 3",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "coverImg":logomeu
        }

    ]

  return (
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid md:grid-cols-3 ss:grid-cols-2 gap-8 px-4 text-black'>
                
                {/* BLOGS */}
                {blogs.map((blog)=>
                    <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                        <img className='h-56 w-full object-cover' src={blog.coverImg}/>
                        <div className='p-5'>
                            <h3 className='font-bold text-lg my-1 text-center'>{blog.title}</h3>
                            <p className='text-gray-600 text-sm'>{blog.desc}</p>
                        </div>
                    </div>
                )}
                

            </div>
        </div>
    </div>
  )
}

export default Blogs