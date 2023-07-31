import React from "react"
import { Container, Col, Row } from "react-grid-system"
import moment from "moment"
import "./Card.scss"

interface CardProps {
  headline: string
  author: string
  date: string
  image: string
  description: string
  OnClickViewDetails: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void
}

const card: React.FC<CardProps> = ({
  headline,
  author,
  date,
  image,
  description,
  OnClickViewDetails,
}: CardProps) => {
  return (
    <div
      className="main-card-container"
      onClick={OnClickViewDetails}
      style={{ cursor: "pointer" }}
    >
      <Row>
        <div className="main-card-header">{headline}</div>
      </Row>
      <Row>
        <div className="card-author">
          <b>By</b> : {author}
        </div>
      </Row>
      <Row>
        <div className="card-date">
          {moment(date).utc().format("YYYY-MM-DD")}
        </div>
      </Row>
      <Row nogutter style={{ marginTop: 15 }}>
        <Col sm={4} md={3}>
          <div className="card-image">
            <img
              src={image}
              alt={image}
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
        </Col>
        <Col sm={8} md={9}>
          <div className="card-description">{description}</div>
        </Col>
      </Row>
    </div>
  )
}

export default card
