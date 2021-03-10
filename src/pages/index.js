import React from "react"
//import { Link } from "gatsby"

//import { Carousel } from "react-bootstrap";
import Layout from "../components/layout"
import SEO from "../components/seo"
//import CustomCarousel from "../components/customCarousel"
import Slider from "../components/slider"
import IconBox from "../components/iconBox"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" />
    <Slider />
    <hr className="my-3 w-25" />
    <IconBox />
  </Layout>
)

export default IndexPage
