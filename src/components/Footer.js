import React from "react"
import { Link } from "gatsby"

const config = require('../../config/site')

const Footer = ({}) => {
  return (
    <footer id="site-footer" role="contentinfo" className="header-footer-group">
      <div className="section-inner">
        <div className="footer-credits">
          <p className="footer-copyright">
            © {new Date().getFullYear()}{" "}
            <Link to={"/"}>{config.company}</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
