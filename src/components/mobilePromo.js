import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./footer.css"

export default props => (
<>
<div className="uk-inline blueSection section">
    <div className="uk-container uk-margin-large-top" style={{height: '100%', width: '100%', paddingLeft: '40px', paddingRight: '40px',}}>
    
    <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid>
    <div>
        <div className="phone uk-padding uk-height-large"></div>
    </div>
    <div>
        <div className="uk-padding uk-light uk-height-large" style={{padding: '40px',}}>
          
        <h1 className="massiveHeading">{props.PromoHeading}</h1>
        <h3 className="massiveSubHeading">{props.PromoSubHeading}</h3>
        <button class="uk-button uk-button-primary uk-button-large">Join Club RCIB Today</button>
        </div>
    </div>
</div>

    </div>
    </div>
    </>
)