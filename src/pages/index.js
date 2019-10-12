import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.component"
import { FaAdobe } from "react-icons/fa"
import links from "../constants/links"

export default () => {
  return (
    <>
      <Layout>
        <FaAdobe />
        Hello world!
        <Link to={links[2].path}>Blog</Link>
      </Layout>
    </>
  )
}
