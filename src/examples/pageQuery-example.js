import React from "react"
import Layout from "../components/layout.component"
import { graphql } from "gatsby"

const Blog = props => {
  console.log("TCL: props", props)
  const {
    data: {
      site: { siteMetadata },
    },
  } = props

  return (
    <Layout>
      <div>Blog</div>
      <p>{siteMetadata.title}</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default Blog
