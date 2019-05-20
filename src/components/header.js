import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss'

const Header = () => (
  <header >
    <h1>
      <Link to="/">
        Santiago Beltrán Caicedo
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
