import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

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
      <section className="py-20 bg-white dark:bg-gray-900" id="blog">
        <div className="flex flex-col gap-2 items-center mb-16">
          <div className="flex gap-3">
            <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
            <p className="text-md font-light text-cinder-light dark:text-gray-100 tracking-widest font-inter">
              MY ARTICLES
            </p>
          </div>
          <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">
            PERSONAL BLOG
          </p>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.user?.publications?.edges?.[0]?.node?.posts?.edges?.map((postEdge, i) => {
            const post = postEdge.node;
            return (
              <div
                key={i}
                className="flex flex-col bg-grey dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full"
              >
                <div className="overflow-hidden">
                  <img
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                    src={post.coverImage?.url}
                    alt="blog-img-1"
                  />
                </div>
                <div className="flex flex-col p-6 flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-cinder-dark dark:text-gray-100 font-pjs line-clamp-2 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-cinder-light dark:text-gray-300 text-sm font-inter line-clamp-3 leading-relaxed">
                      {post.brief}
                    </p>
                  </div>
                  <a
                    className="text-cinder-dark-mode dark:text-blue-400 text-sm font-inter font-semibold hover:underline mt-6"
                    href={post.url}
                    target="_blank" rel="noreferrer"
                  >
                    Continue Reading →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

       
      </section>
    </>
  );
};
export default Articles;
