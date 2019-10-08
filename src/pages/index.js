import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <SEO title="Library Items" />
      <h1>{"A list of Concepts"}</h1>
      <div class="uk-grid-match uk-grid-column-medium uk-grid-row-medium uk-child-width-1-3@s uk-text-center" data-uk-grid>
        {blogPosts.map(({ node: post }) => (
          <div>
          <div className="uk-card uk-card-default uk-card-body">
          <div key={post.id}>
            <div className="cardHero" style={{backgroundImage: `url(${post.image.file.url})`, backgroundSize: `cover`,}}></div>
            <h3>{post.title}</h3>
            <p>{post.childContentfulBlogPostDescriptionTextNode.description}</p>
            <Link to={`/blogpost/${post.slug}`}>Read More</Link>
            </div>
          </div>
          </div>
        ))}
        </div>
        <span className="mgBtm__24" />
    </Layout>
  );
};
export default BlogPosts;

export const query = graphql`
  query IndexPageQuery {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          title
          childContentfulBlogPostDescriptionTextNode {
            description
          }
          slug
          body {
            body
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;