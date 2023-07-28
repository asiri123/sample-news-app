import { Person, Search } from "@mui/icons-material"
import { Row, Col } from "react-grid-system"
import Logo from "../../assests/images/abc.png"
import Navbar from "../navbar/Navbar"

import "./Header.scss"

const Header: React.FC = () => {
  return (
    <div className="home-header-container">
      <Row className="header-main-container">
        <Col className="main-logo" sm={2}>
          <img src={Logo} width={100} height={40}></img>
        </Col>
        <Col className="second-logo" sm={2}>
          <div>
            <Person />
          </div>
          <div className="sign-in-text">Sign in</div>
        </Col>
        <Col className="third-logo" sm={5}>
          <Navbar />
        </Col>
        <Col className="search-container" sm={3}>
          <div className="search-bar" contentEditable="true">
            <Search />
            Search Here
          </div>
        </Col>
      </Row>
      <Row></Row>
    </div>
  )
}

export default Header
