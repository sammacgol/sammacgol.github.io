import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <><header class="sticky-top flex-md-nowrap p-0 shadow">   
      <Navbar bg="light" variant="light" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span"> 경주 김종필펜션 </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                시설안내
              </Nav.Link>
            </Link>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                이용안내
              </Nav.Link>
            </Link>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                오시는길
              </Nav.Link>
            </Link>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                갤러리
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Form inline onSubmit={e => e.preventDefault()}>
              <Form.Group>
                <FormControl
                  type="text"
                  placeholder="Fake Search"
                  className="mr-2"
                />
              </Form.Group>
              <Button>Fake Button</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
      </header>  
    </>
  )
}

export default CustomNavbar