import React from 'react'
import  logomeu from '../assets/logo-meu.svg'
import { Link } from 'react-router-dom'

const Blogs = () => {

    const blogs = [
        {
            "id":1,
            "title": "Blog 1",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "coverImg":logomeu,
            "authorName":"Osman Sarıbacak",
            "authorImg":"https://media.licdn.com/dms/image/D4D03AQGHXONLWAOhWw/profile-displayphoto-shrink_800_800/0/1721982199348?e=1728518400&v=beta&t=fUDHFS7US4Yv-gGyk_TGgITVJNBACYNhgkpBbXYHAx8",
            "authorDesc":"Developer"
        },
        {
            "id":2,
            "title": "Blog 2",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "coverImg":logomeu,
            "authorName":"Osman Sarıbacak",
            "authorImg":"https://media.licdn.com/dms/image/D4D03AQGHXONLWAOhWw/profile-displayphoto-shrink_800_800/0/1721982199348?e=1728518400&v=beta&t=fUDHFS7US4Yv-gGyk_TGgITVJNBACYNhgkpBbXYHAx8",
            "authorDesc":"Developer"
        },{
            "id":3,
            "title": "Blog 3",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "coverImg":logomeu,
            "authorName":"Osman Sarıbacak",
            "authorImg":"https://media.licdn.com/dms/image/D4D03AQGHXONLWAOhWw/profile-displayphoto-shrink_800_800/0/1721982199348?e=1728518400&v=beta&t=fUDHFS7US4Yv-gGyk_TGgITVJNBACYNhgkpBbXYHAx8",
            "authorDesc":"Developer"
        }
    ]

  return (
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid md:grid-cols-3 ss:grid-cols-2 gap-8 px-4 text-black'>
                
                {/* BLOGS */}
                {blogs.map((blog)=>
                    <Link to={`/blog/${blog.id}`}>
                        <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                            <img className='h-56 w-full object-cover' src={blog.coverImg}/>
                            <div className='p-5'>
                                <h3 className='font-bold text-lg my-1 text-center'>{blog.title}</h3>
                                <p className='text-gray-600 text-sm'>{blog.desc}</p>
                            </div>
                        </div>
                    </Link>
                )}
                

            </div>
        </div>
    </div>
  )
}

export default Blogs