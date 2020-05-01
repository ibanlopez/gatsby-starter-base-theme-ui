/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Styled.h1>Hi people</Styled.h1>
    <Styled.p>
      Welcome to your new Gatsby site. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Delectus, quas voluptate sunt, dolore corporis quidem
      vel iusto maiores esse ex molestiae fugit cupiditate. Dolor nulla,
      voluptatum earum harum eos eum!
    </Styled.p>
    <Styled.p>Now go build something great.</Styled.p>
    <div sx={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Styled.p>
      <Styled.a as={Link} to="/page-2/">
        Go to page 2
      </Styled.a>
    </Styled.p>
  </Layout>
)

export default IndexPage
