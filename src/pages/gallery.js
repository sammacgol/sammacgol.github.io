import React from "react"

import Layout from "../components/layout"
import Gallery from "../components/gallery"
import SEO from "../components/seo"

const GalleryMainPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Gallery />
  </Layout>
)

export default GalleryMainPage
