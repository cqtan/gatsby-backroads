import React from "react"
import Layout from "../components/layout.component"
// import Images from "../examples/images"
import StyledHero from "../components/styled-hero.component"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/blog-list.component"
import SEO from "../components/SEO"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <StyledHero img={data.blogBcg.childImageSharp.fluid}></StyledHero>
      {/* <Images /> */}
      <BlogList />
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
