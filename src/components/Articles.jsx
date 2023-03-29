import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

// fetching articles using the hashnode graphql API
const endpoint = 'https://api.hashnode.com/'

const ARTICLE_QUERY = `{
    user(username: "Cheeh") {
      publication {
        posts(page: 0) {
          title
          brief
          slug
          coverImage
          dateAdded
        }
      }
    }
  }`

const Articles = () => {

    const { isLoading, error, data } = useQuery("article", () => {
        return axios({
            url: endpoint,
            method: "POST",
            data: {
                query: ARTICLE_QUERY
            }
        }).then((response) => response.data.data)
    })

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error: {error.message}</div>

    return (
        <>

            <section className='my-28 bg-[#FBFBFB]'>
                <div className="flex flex-col py-14 gap-2 items-center">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cipher-light tracking-widest font-inter">MY ARTICLES</p>
                    </div>
                    <p className="text-cinder-dark font-bold text-3xl font-pjs ml-36">PERSONAL BLOG</p>
                </div>

                <div className='flex justify-evenly items-center py-16'>
                    {data.user.publication.posts?.map((post, i) => (
                        <div key={i} className='flex flex-col gap-5 border rounded-sm'>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <img className='w-96 h-full' src={post.coverImage} alt='blog-img-1' />
                                </div>
                                <div className='flex flex-col gap-2 pl-5'>
                                    <h3 className='text-md font-bold text-cinder-dark font-pjs'>{post.title}</h3>
                                    {/* <p className='text-cinder-light text-xs font-inter'>{post.dateAdded}</p> */}
                                    <p className='text-cinder-light text-sm w-80 font-inter'>{`${post.brief}`}</p>
                                </div>
                            </div>
                            <a className='text-cinder-light text-xs font-inter font-semibold text-center pb-5' href={`https://cheehdevworkshop.hashnode.dev/${post.slug}`} target='_blank'>Continue Reading</a>
                        </div>
                    ))}
                </div>
            </section>

            <section>

            </section>

        </>
    )
}
export default Articles

