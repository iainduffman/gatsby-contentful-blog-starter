import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#f8f8f8`,
      marginBottom: `1.45rem`,
    }}
  >
  <nav className="uk-navbar-container uk-container" data-uk-navbar>
    <div className="uk-navbar-left">

        <ul className="uk-navbar-nav">
            <li className="uk-active"><Link to="/">Home</Link></li>
            <li>
                <Link to="/blogposts">Parent</Link>
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
