import React from "react"
import Navbar from "./navbar.component"
import Footer from "./footer.component"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
