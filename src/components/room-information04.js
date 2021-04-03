import { Link } from "gatsby"
import React from "react"

import { Container} from "react-bootstrap"

const RoomInfomation04 = () => {
    return (
    <Container fluid>
        <div
          style={{
            margin: `0 0 1.0875rem 0`,
            textAlign: `center`
          }}
        >
          <p style={{ margin: 0, color: `gray`}}> 
            <Link to="/room-information01" className="btn btn-light">1층독채</Link>{' '}
            <Link to="/room-information02" className="btn btn-light">301호/305호(침대)</Link>{' '}
            <Link to="/room-information03" className="btn btn-light">303호(온돌)</Link>{' '}
            <Link to="/room-information04" className="btn btn-light" style={{color: `deeppink`}}>바비큐장/도예체험장</Link>
          </p>   
        </div>
    </Container>
    );
}

export default RoomInfomation04