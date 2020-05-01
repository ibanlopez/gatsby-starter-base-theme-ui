/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      role="document"
      sx={{
        display: `flex`,
        flexFlow: `column wrap`,
        justifyContent: `flex-start`,
        alignItems: `center`,
        width: `100%`,
        height: `100%`,
        minHeight: `100vh`,
        p: 0,
        m: 0,
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        sx={{
          margin: `0 auto`,
          width: `100%`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
