import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"

const Header = () => {

  const data = useStaticQuery(graphql`
  query LogoQ {
    site {
      siteMetadata {
        description
      }
    }
    contentfulAsset(id: {eq: "deca7039-15b8-5353-8d50-f0b5b96a5b6f"}) {
      title
      file {
        fileName
        url
      }
    }
  } 
`)


return (

  <header style={{
      background: `#f8f8f8`,
      marginBottom: `1.35rem`,
    }}
  >

  <nav className="uk-navbar-container uk-container" data-uk-navbar>
    <div className="uk-navbar-left">

        <ul className="uk-navbar-nav">
        <li><p className="uk-text-lead">{data.site.siteMetadata.description}</p></li>
        <li><p className="uk-text-lead">{data.contentfulAsset.file.fileName}</p></li>
        <li className="uk-active"><Link to="/">Home</Link></li>
        <li><Link to="/blogposts">Article</Link>
                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li className="uk-active"><Link to="/">Home</Link></li>
                        <li><Link to="/">Item</Link></li>
                        <li><Link to="/">Item</Link></li>
                    </ul>
                </div>
            </li>
            <li><a href="/">Item</a></li>
        </ul>

    </div>
</nav>
  </header>
)}

export default Header
