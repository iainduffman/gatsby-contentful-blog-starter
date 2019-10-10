import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"

export default props => (

<div className="uk-inline hero">
            <img src={props.imageURL} />
            <div className="uk-overlay-primary uk-position-cover"></div>
            <div className="uk-overlay uk-position-bottom uk-light">
            <div className="uk-container heroContent uk-text-center">
            <h3>Want Amazing Deals + Special Offers?</h3>
            <h1>You’ve Come To The Right Place...</h1>
            <div className="buttonWrapper">
            <button className="uk-button uk-button-primary uk-button-large">Large button</button>
            <button className="uk-button uk-button-secondary uk-button-large">Large button</button>
            </div>
            </div>
            </div>
        </div>


)