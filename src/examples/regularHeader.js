import React from "react"
import { StaticQuery, graphql } from "gatsby"

const regularHeader = () => {
  const siteData = graphql`
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

  return (
    <StaticQuery
      query={siteData}
      render={data => {
        return (
          <div>
            <h1>title: {data.site.siteMetadata.title}</h1>
            <h1>author: {data.site.siteMetadata.author}</h1>
          </div>
        )
      }}
    />
  )
}

export default regularHeader
