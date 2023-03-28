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

      const { isLoading, error, data } = useQuery("launches", () => {
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

            <section>
                <div className="flex flex-col gap-2 p-20 items-center">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cipher-light tracking-widest font-inter">MY ARTICLES</p>
                    </div>
                    <p className="text-cinder-dark font-bold text-3xl font-pjs ml-36">PERSONAL BLOG</p>
                </div>
            </section>

            <section>
                {/* <div>
                    <h2>My Hashnode Articles</h2>
                    {data.user.publication.posts?.map((post, i) => (
                        <div key={i}>
                            <h3>Title:{post.title}</h3>
                            <p>Link: {`https://cheehdevworkshop.hashnode.dev/${post.slug}`}</p>
                            <p>imgUrl: {post.coverImage}</p>
                            <p>{post.brief}</p>
                            <img src={post.coverImage} alt=" " />
                        </div>
                    ))}
                </div> */}
            </section>

        </>
    )
}
export default Articles

