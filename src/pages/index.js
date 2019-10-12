import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.component"
import links from "../constants/links"
import SimpleHero from "../components/simple-hero.component"
import Banner from "../components/banner.component"
import Button from "../examples/Button"
import About from "../components/Home/about.component"
import Services from "../components/Home/services.component"

export default () => {
  return (
    <>
      <Layout>
        <SimpleHero>
          <Banner
            title="continue exploring"
            info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
          >
            <Link to="/tours" className="btn-white">
              explore tours
            </Link>
            <Button color="yellow" big>
              Button
            </Button>
          </Banner>
        </SimpleHero>
        Hello world!
        <Link to={links[2].path}>Blog</Link>
        <About />
        <Services />
      </Layout>
    </>
  )
}
