import React from "react"
import Layout from "../components/layout.component"
import styles from "../css/error.module.css"
// import { Link } from "gatsby"
import Banner from "../components/banner.component"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"

export default function error() {
  return (
    <Layout>
      <SEO title="Error" />
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink paintDrip to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
