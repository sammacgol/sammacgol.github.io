import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapSigns } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faRoute } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'

const Custom = () => {
    return (
      <Container fluid className="bg-info">
        <div class="my-4 pt-4">
        <Row>
          <Col className="text-center">
            <Row className="justify-content-md-center">
              <Col sm>
                <Row>
                  <Col>
                    <Link to="/room-information01" style={{textDecoration: `none`, }} hoverstyle={{ color: "red" }}>
                        <FontAwesomeIcon icon={faMapSigns} size="2x"  color="white" />
                        <div style={{padding: `1.05rem 0 2.05rem 0`, color: `white`}}>
                        객실정보</div>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/guide" style={{textDecoration: `none`,}}>
                        <FontAwesomeIcon icon={faInfoCircle} size="2x" color="white" />
                        <div style={{padding: `1.05rem 0 2.05rem 0`, color: `white`}}>
                          이용안내</div>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col sm>
              <Row>
                  <Col>
                    <Link to="/waytocome" style={{textDecoration: `none`,}}>
                        <FontAwesomeIcon icon={faRoute} size="2x" color="white" />
                        <div style={{padding: `1.05rem 0 2.05rem 0`, color: `white`}}>
                        오시는길</div>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/gallery" style={{textDecoration: `none`,}}>
                        <FontAwesomeIcon icon={faImages} size="2x" color="white" />
                        <div style={{padding: `1.05rem 0 2.05rem 0`, color: `white`}}>
                        갤러리</div>
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