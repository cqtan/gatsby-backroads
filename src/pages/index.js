import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout.component"
import links from "../constants/links"
import Banner from "../components/banner.component"
import About from "../components/Home/about.component"
import Services from "../components/Home/services.component"
import StyledHero from "../components/styled-hero.component"
import { graphql } from "gatsby"
import FeaturedTours from "../components/Home/featuredTours.component"

export default ({ data }) => {
  return (
    <Layout>
      <StyledHero home={true} img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="continue exploring"
          info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
        >
          <AniLink swipe to="/tours" className="btn-white">
            explore tours
          </AniLink>
        </Banner>
      </StyledHero>
      Hello world!
      <AniLink paintDrip to={links[2].path}>
        Blog
      </AniLink>
      <About />
      <Services />
      <FeaturedTours />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
