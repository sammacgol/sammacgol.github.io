import React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteOuthor }) => (
  <footer className="footer mt-auto py-3 bg-dark text-white text-center">
  © {new Date().getFullYear()}, Built with
  {` `}
  <a href="https://www.gatsbyjs.org">Gatsby, bootstrap</a>
</footer>
)

Footer.propTypes = {
    siteOuthor: PropTypes.string,
}

export default Footer;