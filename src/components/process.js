import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./footer.css"

export default props => (
<>
<div className="uk-inline transparentSection uk-margin-large-top">
<div className="uk-container uk-text-center">
<h1 className="massiveHeading">{props.ProcessHeading}</h1>
<h3 className="massiveSubHeading">{props.ProcessSubHeading}</h3>
</div>
</div>

<div className="uk-inline blueSection">
<div className="uk-container">

<div id="process" className="dealContainer uk-container uk-padding-large uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right uk-padding-remove-top">
<ul className="tabs uk-child-width-expand" data-uk-tab>
<li><a href="#">Step 1</a></li>
<li><a href="#">Step 2</a></li>
<li><a href="#">Step 3</a></li>
</ul>
<div className="dealWrapper">
<div className="uk-grid-match uk-grid-column-medium uk-grid-row-medium uk-child-width-1-3@s uk-text-center" data-uk-grid>
<div>
<div className="uk-card">
<div className="cardHero"></div>
<div className="cardContents">
<h3>Login</h3>
<p>Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.</p>
</div>
</div>
</div>

<div>
<div className="uk-card">
<div className="cardHero"></div>
<div className="cardContents">
<h3>Select Offer</h3>
<p>Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.</p>
</div>
</div>
</div>

<div>
<div className="uk-card">
<div className="cardHero"></div>
<div className="cardContents">
<h3>Reedeem</h3>
<p>Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.</p>
</div>
</div>
</div>
</div>
<button class="uk-button uk-button-primary uk-button-large">Join Club RCIB Today</button>
</div>

</div>

</div>
</div>
</>
)