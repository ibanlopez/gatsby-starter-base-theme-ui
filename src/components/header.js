/** @jsx jsx */
import { Styled, useColorMode, jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Icon from "./icons"

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode()

  const newColorMode = colorMode === "light" ? "dark" : "light"

  return (
    <header
      sx={{
        width: `100%`,
        backgroundColor: `secondary`,
        marginBottom: `4`,
      }}
    >
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          py: 4,
          px: 3,
          display: `flex`,
          justifyContent: `space-between`,
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
        <button
          onClick={(e) => {
            setColorMode(newColorMode)
          }}
          sx={{
            background: "transparent",
            border: "transparent",
          }}
        >
          <Icon IconName={newColorMode} />
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
