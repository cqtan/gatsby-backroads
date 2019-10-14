import React from "react"
import Layout from "../components/layout.component"
import Images from "../examples/images"
import StyledHero from "../components/styled-hero.component"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}>Blog</StyledHero>
      <Images />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Blog
