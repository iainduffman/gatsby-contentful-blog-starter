import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <h1>Bonjour</h1>
      <p>Latest Features...</p>
      <div>
        <div
          style={{
            maxWidth: `300px`,
            margin: "0 auto 1.45rem"
          }}
        >
          <Image />
        </div>
      </div>
      <Link to="/blogposts/">View all posts</Link>
    </div>
  </Layout>
);
export default IndexPage;