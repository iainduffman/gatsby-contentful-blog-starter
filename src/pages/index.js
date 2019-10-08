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
{/* 
      <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage: `url(http://dev.eurorescue.co.uk/wp-content/uploads/2019/04/AdobeStock_168162190-1-e1554371498170.jpg)`,}}>
      <p class="uk-h4">Cover</p>
      </div>

      <div id="header-hero" class="uk-cover-container">
      <img src="http://dev.eurorescue.co.uk/wp-content/uploads/2019/04/AdobeStock_168162190-1-e1554371498170.jpg" data-uk-cover className="uk-cover" style={{ height: 568, width: 1680,}}></img>
      </div> */}


      <div className="uk-inline hero">
            <img src="http://dev.eurorescue.co.uk/wp-content/uploads/2019/04/AdobeStock_168162190-1-e1554371498170.jpg" />
            <div className="uk-overlay-primary uk-position-cover"></div>
            <div className="uk-overlay uk-position-bottom uk-light">
            <div className="uk-container heroContent uk-text-center">
            <h3>Want Amazing Deals + Special Offers?</h3>
            <h1>You’ve Come To The Right Place</h1>
            <div className="buttonWrapper">
            <button className="uk-button uk-button-primary uk-button-large">Large button</button>
            <button className="uk-button uk-button-secondary uk-button-large">Large button</button>
            </div>
            </div>
            </div>
        </div>
      
      <div className="dealContainer uk-container uk-padding-large uk-padding-remove-left uk-padding-remove-right uk-padding-remove-top">
      <ul className="tabs uk-child-width-expand" data-uk-tab>
        <li className="uk-active"><a href="#">Latest Offers</a></li>
        <li><a href="#">Why Join?</a></li>
        <li><a href="#">How It Works</a></li>
    </ul>
      <div className="dealWrapper">
      <div className="uk-grid-match uk-grid-column-medium uk-grid-row-medium uk-child-width-1-3@s uk-text-center" data-uk-grid>
        {blogPosts.map(({ node: post }) => (
          <div>
          <div className="uk-card uk-card-default uk-card-body">
          <div key={post.id}>
            <div className="cardHero" style={{backgroundImage: `url(${post.image.file.url})`, backgroundSize: `cover`,}}></div>
            <div className="cardContents">
            <h3>{post.title}</h3>
            <p>{post.childContentfulBlogPostDescriptionTextNode.description}</p>
            <a target="_blank" href={post.link}>Redeem Offer</a>
            {/* <Link to={`/blogpost/${post.slug}`}>Read More</Link> */}
            </div>
            </div>
          </div>
          </div>
        ))}
        </div>
        </div>
        </div>
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
          link
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