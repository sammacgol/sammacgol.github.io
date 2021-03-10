import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'

const Custom = () => {
    return (
      <Container fluid>
        <div class="my-5 p-5 rounded shadow">
        <Row>
          <Col className="text-center">
            <Row className="justify-content-md-center">
              <Col sm>
                <Row>
                  <Col>
                    <Link to="https://www.hackerrank.com/" style={{textDecoration: `none`,}}>
                        <FontAwesomeIcon icon={faCampground} size="2x"/>
                        <div style={{padding: `2.05rem 0 3.05rem 0`, color: `black`}}>
                        <strong class="d-block text-gray-dark">시설안내</strong></div>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="https://www.hackerrank.com/" style={{textDecoration: `none`,}}>
                        <FontAwesomeIcon icon={faInfoCircle} size="2x"/>
                        <div style={{padding: `2.05rem 0 3.05rem 0`, color: `black`}}>
                          <h6><strong class="d-block text-gray-dark">이용안내</strong></h6></div>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col sm>
              <Row>
                  <Col>
                    <Link to="https://www.hackerrank.com/" style={{textDecoration: `none`,}}>
                        <FontAwesomeIcon icon={faMapMarkedAlt} size="2x"/>
                        <div style={{padding: `2.05rem 0 0 0`, color: `black`}}>
                        <strong class="d-block text-gray-dark">오시는길</strong></div>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="https://www.hackerrank.com/" style={{textDecoration: `none`,}}>
                        <FontAwesomeIcon icon={faImages} size="2x"/>
                        <div style={{padding: `2.05rem 0 0 0`, color: `black`}}>
                        <strong class="d-block text-gray-dark">갤러리</strong></div>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        </div>
      </Container>
    );
}

export default Custom