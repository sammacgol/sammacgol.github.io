import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <><header class=" flex-md-nowrap p-0">
      <Navbar variant="dark" expand="sm" id="site-navbar" style={{background: `#20232a`, padding: `0.765rem 2.0875rem`,}}>
        <Link to="/">
          <Navbar.Brand as="span"> 삼막골 카라반펜션</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/room-information01" style={{textDecoration: `none`}}>
              <Nav.Link as="span" eventKey="room-information">
                객실정보
              </Nav.Link>
            </Link>
            <Link to="/guide" style={{textDecoration: `none`}}>
              <Nav.Link as="span" eventKey="guide">
                이용안내
              </Nav.Link>
            </Link>
            <Link to="/waytocome" style={{textDecoration: `none`}}>
              <Nav.Link as="span" eventKey="waytocome">
                오시는길
              </Nav.Link>
            </Link>
            <Link to="/gallery" style={{textDecoration: `none`}}>
              <Nav.Link as="span" eventKey="gallery">
                갤러리
              </Nav.Link>
            </Link>
          </Nav>        
        </Navbar.Collapse>
      </Navbar>
      </header>  
    </>
  )
}

export default CustomNavbar