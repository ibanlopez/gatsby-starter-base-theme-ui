/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      width: `100%`,
      backgroundColor: `primary`,
      marginBottom: `4`,
    }}
  >
    <div
      sx={{
        margin: `0 auto`,
        maxWidth: 960,
        py: 4,
        px: 3,
      }}
    >
      <Styled.h1 sx={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            color: `background`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Styled.h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
