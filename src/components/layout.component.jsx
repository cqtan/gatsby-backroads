import React from "react"
import Navbar from "./navbar.component"
import Footer from "./footer.component"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
