import React from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown';
const BlogContent = ({blogs}) => {

  const {id} = useParams ();

//   const blogs = [
//     {
//         "id":1,
//         "title": "Blog 1",
//         "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         "coverImg":logomeu,
//         "authorName":"Osman Sarıbacak",
//         "authorImg":"https://media.licdn.com/dms/image/D4D03AQGHXONLWAOhWw/profile-displayphoto-shrink_800_800/0/1721982199348?e=1728518400&v=beta&t=fUDHFS7US4Yv-gGyk_TGgITVJNBACYNhgkpBbXYHAx8",
//         "authorDesc":"Developer"
//     },
//     {
//         "id":2,
//         "title": "Blog 2",
//         "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         "coverImg":logomeu,
//         "authorName":"Osman Sarıbacak",
//         "authorImg":"https://media.licdn.com/dms/image/D4D03AQGHXONLWAOhWw/profile-displayphoto-shrink_800_800/0/1721982199348?e=1728518400&v=beta&t=fUDHFS7US4Yv-gGyk_TGgITVJNBACYNhgkpBbXYHAx8",
//         "authorDesc":"Developer"
//     },{
//         "id":3,
//         "title": "Blog 3",
//         "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         "coverImg":logomeu,
//         "authorName":"Osman Sarıbacak",
//         "authorImg":"https://media.licdn.com/dms/image/D4D03AQGHXONLWAOhWw/profile-displayphoto-shrink_800_800/0/1721982199348?e=1728518400&v=beta&t=fUDHFS7US4Yv-gGyk_TGgITVJNBACYNhgkpBbXYHAx8",
//         "authorDesc":"Developer"
//     }
// ]
    let blog = {}
    if(blog){
      let arr = blogs.data.filter (blog => blog.id==id)
      blog = arr[0]
    }else{
      blog = {}
    }

  return (
    <div className='w-full pb-10 bg-[#f9f9f9]'>
      <div className='max-w-[1240px] mx-auto'>

        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 gap-8 px-4 sm-pt-20 md-mt-0 ss-pt-20 text-black'>
          
          <div className='col-span-2 gap-8'>
            <img className='h-56 object-cover w-full py-3' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
            <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes.blogTitle}</h1>
            <div className='pt-5'>
              <Markdown className='.line-break'>{blog.attributes.blogContent}</Markdown>
            </div>
          </div>

          <div className='w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h[250px]'>
            <div>
              <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`} />
              <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.attributes.authorName}</h1>
              <p className='text-center text-gray-900 font-medium'>{blog.attributes.authorDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogContent