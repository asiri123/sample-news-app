import { Col, Container, Row } from "react-grid-system"
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material"
import "./Footer.scss"

const Footer = () => {
  const countries = [
    "Russia",
    "China",
    "India",
    "South Africa",
    "Brazil",
    "Saudi Arabia",
  ]

  const centers = [
    "Live centers",
    "Arcade",
    "North western studio",
    "Hill Country",
  ]

  return (
    <div className="footer-main-container">
      <Row>
        <Col sm={4} md={4} className="social-media-container">
          Follow us on:
          <br />
          <div className="social-icons">
            <br />
            <Row>
              <Facebook /> - Facebook
            </Row>
            <Row>
              <Instagram /> - Instagram
            </Row>
            <Row>
              <Twitter /> - Twitter
            </Row>
            <Row>
              <YouTube /> - Youtube
            </Row>
          </div>
        </Col>
        <Col sm={4} md={4} className="country-centers">
          Partner Countries
          <div>
            <br></br>
          </div>
          {countries.map((items) => (
            <Row className="country-items">{items}</Row>
          ))}
        </Col>
        <Col sm={4} md={4} className="centers-locations">
          News centers
          <div>
            <br></br>
          </div>
          {centers.map((items) => (
            <Row className="center-items">{items}</Row>
          ))}
        </Col>
      </Row>
    </div>
  )
}

export default Footer
