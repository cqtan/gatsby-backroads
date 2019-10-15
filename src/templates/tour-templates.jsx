import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.component"
import StyledHero from "../components/styled-hero.component"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleTour/day.component"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const TourTemplates = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.tour

  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      {" "}
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single tour"
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.info} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.info} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days}</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />
            })}
          </div>
          <AniLink paintDrip to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

// $slug is passed from gatsby-node, context. Also accessible through props.pageContext
export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd Do MMMM, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default TourTemplates
