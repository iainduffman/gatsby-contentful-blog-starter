/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./layout.css"
import "./ui-custom.css"

const Layout = ({ children }) => {
  
  const datax = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={datax.site.siteMetadata.title} />
      <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/css/uikit.min.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit-icons.min.js"></script>
      </Helmet>
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main>
        <div className="uk-container">
        {children}
        </div>
        </main>
        <footer>
        <div class="footer uk-section uk-section-primary tm-section-primary uk-section-xlarge uk-padding-remove-bottom uk-padding-remove-top" styles="background: #323232;">
    <div class="uk-container uk-text-center">
        <div class="uk-margin-top uk-margin-bottom">
            <div data-uk-grid="" className="uk-child-width-auto@m uk-flex-middle uk-grid uk-grid-stack">
                <div className="uk-first-column uk-hidden">
                    <ul className="uk-navbar-nav uk-navbar-nav footer-left uk-visible@l">
                        <li><a className="uk-text-bold" href="#"><span className="uk-margin-small-right uk-icon" data-uk-icon="receiver" styles="color: #fff;"></span><p>Call Us 0330 123 5961</p> <span></span></a></li>
                    </ul>
                </div>
                <div className="uk-flex-1 uk-margin-auto uk-visible@m uk-first-column">
                    <div data-uk-margin="" className="uk-flex-around uk-flex-center uk-margin-top uk-subnav footer-nav">
                        <ul className="uk-first-column">
                        <li><h4>Products</h4>
                        </li><li><a href="http://dev.eurorescue.co.uk/compare-breakdown-services">Eurorescue Breakdown Cover</a></li>
                        <li><a href="http://dev.eurorescue.co.uk/uk-breakdown-cover">UK Breakdown Cover</a></li>
                        </ul>

                        <ul>
                        <li><h4>About</h4>
                        </li><li><a href="http://dev.eurorescue.co.uk/why-choose-us">Why Choose Us?</a></li>
                        <li><a href="http://dev.eurorescue.co.uk/document-downloads">Document Downloads</a></li>
                        <li><a href="http://dev.eurorescue.co.uk/faq">FAQ's</a></li>
                        <li><a href="http://dev.eurorescue.co.uk/contact">Contact</a></li>
                        </ul>

                        <ul>
                        <li><h4>Members</h4>
                        </li><li><a href="https://eurorescue.co.uk/ChangeYourDetails.aspx">Change Details</a></li>
                        <li><a href="https://eurorescue.co.uk/ChangeVehicle.aspx">Change Vehicle</a></li>
                        </ul>

                        <ul>
                        <li><h4>Legal</h4>
                        </li><li><a href="http://dev.eurorescue.co.uk/terms-conditions">Terms &amp; Conditions</a></li>
                        <li><a href="http://dev.eurorescue.co.uk/privacy-policy">Privacy Policy</a></li>
                        <li><a href="http://dev.eurorescue.co.uk/cookie-policy">Cookie Policy</a></li>
                        </ul>

                        <ul>
                        <li><h4>Legal</h4>
                        </li><li><a href="http://dev.eurorescue.co.uk/terms-conditions">Terms &amp; Conditions</a></li>
                        <li><a href="http://dev.eurorescue.co.uk/privacy-policy">Privacy Policy</a></li>
                        <li><a href="http://dev.eurorescue.co.uk/cookie-policy">Cookie Policy</a></li>
                        </ul>

                    </div>
                </div>
                <div>
                    <div className="uk-text-right@m uk-text-center uk-hidden">
                        <div data-uk-grid="" className="uk-child-width-auto uk-grid-small uk-flex-center uk-grid">
                            <div className="uk-hidden uk-first-column"><a href="https://twitter.com/#" data-uk-icon="icon: twitter" className="uk-icon-link uk-icon"></a></div>
                            <div><a href="https://www.facebook.com/eurorescuebreakdown" target="_blank" data-uk-icon="icon: facebook" className="uk-icon-link uk-icon"></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-uk-grid="" className="uk-child-width-auto@m uk-flex-middle uk-grid uk-grid-stack">
                <div className="uk-margin-auto uk-first-column">

                <div className="uk-width-medium-1-1 copyright-text">
                <p>This Website is made available to you by Right Choice Insurance Brokers Limited. Registered Office: St James House, 27-43 Eastern Road, Romford, Essex, RM1 3NH. Registered in England &amp; Wales No. 6423401. EuroRescue is arranged and administered by Right Choice Insurance Brokers Limited which is authorised and regulated by the Financial Conduct Authority under reference number 475620.</p>

                <div className="uk-hidden uk-width-medium-1-1">
                <p><a href="https://www.facebook.com/eurorescuebreakdown/" target="_blank"><span data-uk-icon="icon: facebook; ratio: 2" className="uk-icon"></span></a></p>

                </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
</div>
    

</div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
