import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Card, Row, Col } from "react-bootstrap";

class GalleryPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
    <Layout>
    <SEO title="gallery" />
    <Container>
      <Row>
        {posts.map(({ node }) => {
          return (
            <Col lg={4} key={node.id}>
              <Card className="mb-4">
                <Img 
                  fluid={node.frontmatter.Image01.childImageSharp.fluid} 
                  alt={node.frontmatter.image01alt} />
                <Card.Body>
                  <small className="text-muted">{node.frontmatter.date}</small>
                  <Card.Title> {node.frontmatter.title} </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )
        })} 
      </Row>     
    </Container>
    </Layout>
    )
  }
}

export default GalleryPage

export const pageQuery = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            image01alt
            date(formatString: "MMMM DD, YYYY")
            Image01 {
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 400, cropFocus: CENTER, fit: COVER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`