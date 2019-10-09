import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Process from "../components/process";
import Hero from "../components/hero";
import MobilePromo from "../components/mobilePromo";
import Image from "../components/image";
import SEO from "../components/seo";

{/* ------------------------- Post Query ------------------------- */}
const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <SEO title="Home" />

      {/* ------------------------- Hero ------------------------- */}
      <Hero imageURL="http://dev.eurorescue.co.uk/wp-content/uploads/2019/10/heroHomepage-1.jpg" />
      
      {/* ------------------------- Homepage Deal Tabs ------------------------- */}
      <div className="dealContainer uk-container uk-padding-large uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right uk-padding-remove-top">
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
            </div>
            </div>
          </div>
          </div>
        ))}
        </div>
        </div>
        </div>

    {/* ------------------------- Process Content Component ------------------------- */}
    <Process ProcessHeading="Join The Club Today" ProcessSubHeading="Club RCIB is so easy to use - get started in 3 easy steps!" />
    
    {/* ------------------------- Mobile Access Promo ------------------------- */}
    <MobilePromo PromoHeading="The Best Bit?" PromoSubHeading="Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue." />

    </Layout>
  );
};
export default BlogPosts;


{/* ------------------------- Queries ------------------------- */}
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