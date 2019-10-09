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
    contentfulAsset(id: {eq: "26dca1aa-2468-54e9-acc9-a8a16adb347d"}) {
      title
      file {
        url
      }
    }
  } 
`)


return (

  <header style={{
      background: `#fff`,
    }}
  >

  <nav className="uk-container" data-uk-navbar>

  <div className="uk-navbar-left" style={{marginLeft: 120,}}>
  <Link to="/"><img id="logo" width="184" height="37" src={`/${data.contentfulAsset.file.url}`} /></Link>
    <ul className="uk-navbar-nav primary-nav">
	  <li><Link to="/">Offers</Link></li>
	  <li><Link to="/">Discounts</Link></li>
	  <li><Link to="/">Our Features</Link></li>
    <li><Link to="/">Features</Link></li>
    </ul>
    </div>

    <div className="uk-navbar-right">
    <ul id="social">
    <li><a href="#"><span uk-icon="icon: twitter; ratio: 1.5"></span></a></li>
    <li><a href="#"><span uk-icon="icon: facebook; ratio: 1.5"></span></a></li>
    <li><a href="#"><span uk-icon="icon: youtube; ratio: 1.5"></span></a></li>
    </ul>
	  <button className="uk-button uk-button-primary uk-button-large">Join</button>
    </div>


    {/* Right Hand Nav Menu - Hidden */}
    {/* <div className="uk-navbar-right">
    <ul className="uk-navbar-nav primary-nav">
	  <li><a href="http://dev.eurorescue.co.uk/why-choose-us/">Why Choose Euro Rescue?</a></li>
	  <li><a href="http://dev.eurorescue.co.uk/compare-breakdown-services/">Breakdown Cover</a></li>
	  <li><a href="http://dev.eurorescue.co.uk/contact/">Contact</a></li>
    </ul>
    </div> */}

</nav>
</header>
)}

export default Header
