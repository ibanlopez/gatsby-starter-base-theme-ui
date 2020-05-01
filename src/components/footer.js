/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <footer
      sx={{
        width: `100%`,
        backgroundColor: `primary`,
        mt: `auto`,
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
        <Styled.p sx={{ color: `background` }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Styled.a
            sx={{ color: `background` }}
            href="https://www.gatsbyjs.org"
          >
            Gatsby
          </Styled.a>
        </Styled.p>
      </div>
    </footer>
  )
}

export default Footer
