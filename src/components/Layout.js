import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import SocialMenu from "./SocialMenu"
import theme from '../../config/theme'

import FooterWidgets from "./FooterWidgets"
import MenuModal from "./MenuModal"
import "@wordpress/block-library/build-style/style.css"

const backdropClasses = " backdrop"

const Layout = ({ children, bodyClass }) => {
  const [backdropActive, setBackdropActive] = useState(false)

  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    setBackdropActive(active)
  }

  return (
    <div
      id={"GatsbyBody"}
      className={
        bodyClass +
        " showing-menu-modal showing-modal" +
        (backdropActive ? backdropClasses : "")
      }
    >
      <Header toggleBackdrop={toggleBackdrop} />

      <MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />

      <main id="site-content" role="main">
        {children}
      </main>

      <div className="wp-block-group">
        <h3 className="has-text-align-center">WE NEED YOU</h3>
        <p className="has-text-align-center">With your support, we can make an even bigger impact</p>
        <div className="wp-block-buttons aligncenter">
          <div className="wp-block-button">
            <a className="wp-block-button__link" href="/support-us/get-involved">SUPPORT US</a>
          </div>
        </div>
      </div>
      <div className="wp-block-group">
        <h3 className="has-text-align-center">BE THE FIRST TO KNOW</h3>
        <p className="has-text-align-center">Get exclusive updates about our work</p>
        <div className="wp-block-buttons aligncenter">
          <div className="wp-block-button">
            <a className="wp-block-button__link" href="/subscribe">JOIN OUR MAILING LIST</a>
            <SocialMenu />
          </div>
        </div>
      </div>

      <a className="donate-widget" href="https://www.globalgiving.org/projects/building-community-fire-fightering-capacity-in-mgl/">
        <img src="/images/heart-solid.png" /> DONATE
      </a>

      <Footer />
    </div>
  )
}

export default Layout
