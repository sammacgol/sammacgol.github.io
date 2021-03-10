import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"

const Custom = () => {
  const data = useStaticQuery(graphql `
    query {
      img01ql: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img02ql: file(relativePath: { eq: "2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img03ql: file(relativePath: { eq: "3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`)
    return (
      <Carousel>
        <Carousel.Item>
          <Img fluid={data.img01ql.childImageSharp.fluid} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Img fluid={data.img02ql.childImageSharp.fluid} alt="First slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Img fluid={data.img03ql.childImageSharp.fluid} alt="First slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Custom

