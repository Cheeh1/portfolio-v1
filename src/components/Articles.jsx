import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

// Fetching articles using the hashnode graphql API
const endpoint = "https://gql.hashnode.com";

const ARTICLE_QUERY = `
  query GetUserArticles($username: String!) {
    user(username: $username) {
      publications(first: 1) {
        edges {
          node {
            posts(first: 10) {
              edges {
                node {
                  title
                  brief
                  slug
                  coverImage {
                    url
                  }
                  publishedAt
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;


const Articles = () => {
  // Using react-query to fetch and cache the data
  const { isLoading, error, data } = useQuery("article", async () => {
    const response = await axios({
          url: endpoint,
          method: "POST",
          data: {
              query: ARTICLE_QUERY,
              variables: {
                username: "Cheeh"
              }
          },
      });
      return response.data.data;
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section className="my-28 bg-grey dark:bg-gray-900" id="blog">
        <div className="flex flex-col py-8 gap-2 items-center">
          <div className="flex gap-3">
            <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
            <p className="text-md font-light text-cinder-light dark:text-white tracking-widest font-inter">
              MY ARTICLES
            </p>
          </div>
          <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">
            PERSONAL BLOG
          </p>
        </div>

        {/* Using flex wrap for layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 place-items-center py-8">
          {/* Mapping through the fetched articles */}
          {data?.user?.publications?.edges?.[0]?.node?.posts?.edges?.map((postEdge, i) => {
            const post = postEdge.node;
            return (
              <div
                key={i}
                className="flex flex-col gap-5 border dark:border-gray-700 rounded-md"
              >
                <div className="flex flex-col gap-3">
                  <div>
                    <img
                      className="w-80 xl:w-96"
                      src={post.coverImage?.url}
                      alt="blog-img-1"
                    />
                  </div>
                  <div className="flex flex-col gap-2 pl-5">
                    <h3 className="text-sm w-72 xl:w-full xl:text-md font-bold text-cinder-dark dark:text-cinder-dark-mode font-pjs">
                      {post.title}
                    </h3>
                    <p className="text-cinder-light dark:text-white text-sm w-72 xl:w-80 font-inter">{post.brief}</p>
                  </div>
                </div>
                <a
                  className="text-cinder-light dark:text-gray-400 text-xs font-inter font-semibold text-center pb-5"
                  href={post.url}
                  target="_blank" rel="noreferrer"
                >
                  Continue Reading
                </a>
              </div>
            );
          })}
        </div>

       
      </section>
    </>
  );
};
export default Articles;
