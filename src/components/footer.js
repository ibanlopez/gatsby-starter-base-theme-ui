/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"

import Icon from './icons'

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
          display: `flex`,
          justifyContent: `space-between`
        }}
      >
        <Styled.p sx={{ color: `background`, m: 0 }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Styled.a
            sx={{ color: `background` }}
            href="https://www.gatsbyjs.org"
          >
            Gatsby
          </Styled.a>
        </Styled.p>
        <Styled.a
            sx={{ color: `background` }}
            href="https://github.com/ibanlopez/gatsby-starter-base-theme-ui"
          >
            <Icon IconName="github" />
          </Styled.a>
      </div>
    </footer>
  )
}

export default Footer
