import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const siteData = graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `

  const data = useStaticQuery(siteData)
  const { title, author, description } = data.site.siteMetadata

  return (
    <div>
      <h1>{title}</h1>
      <h1>{author}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Header
