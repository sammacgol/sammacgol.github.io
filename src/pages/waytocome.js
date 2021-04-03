import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, ResponsiveEmbed, Container } from "react-bootstrap";

const Waytocome = () => (
  <Layout>
    <SEO title="Waytocome" />
    <Card>
      <Card.Body>
        <ResponsiveEmbed aspectRatio="16by9">
          <embed type="image/svg+xml" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16312.934128591975!2d129.28989064690808!3d35.8910555201926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35665313aed48d4b%3A0xb02b61540168d0b3!2z6rK97IOB67aB64-EIOqyveyjvOyLnCDsspzrtoHrqbQg6rCI6rOh66asIDE2OS0y!5e1!3m2!1sko!2skr!4v1617428641505!5m2!1sko!2skr" />
        </ResponsiveEmbed>
      </Card.Body>
      <Card.Footer className="bg-white">
        <small className="text-muted">삼막골카라반펜션</small>
        <Card.Text>경상북도 경주시 삼막길 43-115</Card.Text>
      </Card.Footer>
    </Card>
    <Container fluid>
      <div class="my-4 pt-4">
        <Link to="https://youtu.be/2AFmWJTntEs" style={{textDecoration: `none`, }}>
        <h5>오시는 길 - 동영상으로 보기</h5>
        </Link>
      </div>
      <hr />
      <div class="my-4 pt-4">
        <h5>자동차</h5>
        <h6>경상북도 포항시 남구 송도동 송도로 62</h6>
        <h6>경상북도 포항시 남구 송도동 송도로 62</h6>
      </div>
      <hr />
      <div class="my-4 pt-4">
        <h5>버스</h5>
        <h6>경상북도 포항시 남구 송도동 송도로 62</h6>
        <h6>경상북도 포항시 남구 송도동 송도로 62</h6>
      </div>
      <hr />
    </Container>
  </Layout>
)

export default Waytocome