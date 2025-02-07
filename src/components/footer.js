import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./footer.css"


export default () => (

<div className="footer uk-section uk-section-primary tm-section-primary uk-section-xlarge uk-padding-remove-bottom uk-padding-remove-top" styles="background: #323232;">
    <div className="uk-container uk-text-center">
        <div className="uk-margin-top uk-margin-bottom">
            <div className="uk-child-width-auto@m uk-flex-middle uk-grid uk-grid-stack">
                <div className="uk-first-column uk-hidden">
                    <ul className="uk-navbar-nav uk-navbar-nav footer-left uk-visible@l">
                        <li><a className="uk-text-bold" href="#"><span className="uk-margin-small-right uk-icon" data-uk-icon="receiver" styles="color: #fff;"></span><p>Call Us 0330 123 5961</p> <span></span></a></li>
                    </ul>
                </div>
                <div className="uk-flex-1 uk-margin-auto uk-visible@m uk-first-column">
                    <div className="uk-flex-around uk-flex-center uk-margin-top uk-subnav footer-nav">
                        <ul>
                        <li><h4>Site Nav Title</h4></li>
                        <li><a href="#">Link Title</a></li>
                        <li><a href="#">Link Title</a></li>
                        </ul>

                        <ul>
                        <li><h4>Site Nav Title</h4></li>
                        <li><a href="#">Link Title</a></li>
                        <li><a href="#">Link Title</a></li>
                        </ul>

                        <ul>
                        <li><h4>Site Nav Title</h4></li>
                        <li><a href="#">Link Title</a></li>
                        <li><a href="#">Link Title</a></li>
                        </ul>

                        <ul>
                        <li><h4>Site Nav Title</h4></li>
                        <li><a href="#">Link Title</a></li>
                        <li><a href="#">Link Title</a></li>
                        </ul>

                        <ul>
                        <li><h4>Site Nav Title</h4></li>
                        <li><a href="#">Link Title</a></li>
                        <li><a href="#">Link Title</a></li>
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

)