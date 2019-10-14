import React from "react"
import Layout from "../components/layout.component"
import StyledHero from "../components/styled-hero.component"
import { graphql } from "gatsby"
import Contact from "../components/Contact/contact.component"

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid}></StyledHero>{" "}
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
