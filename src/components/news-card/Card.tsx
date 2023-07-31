import React from "react"
import { Container, Col, Row } from "react-grid-system"
import moment from "moment"
import "./Card.scss"
import { HeadlineItem } from "../../features/home/homeSlice"

interface CardProps {
  item: HeadlineItem
  OnClickViewDetails: (
    data: HeadlineItem,
  ) => void
}

const card: React.FC<CardProps> = ({
  item,
  OnClickViewDetails,
}: CardProps) => {
  return (
    <div
      className="main-card-container"
      onClick={() => OnClickViewDetails(item)}
      style={{ cursor: "pointer" }}
    >
      <Row>
        <div className="main-card-header">{item?.title}</div>
      </Row>
      <Row>
        <div className="card-author">
          <b>By</b> : {item?.author}
        </div>
      </Row>
      <Row>
        <div className="card-date">
          {moment(item?.publishedAt).utc().format("YYYY-MM-DD")}
        </div>
      </Row>
      <Row nogutter style={{ marginTop: 15 }}>
        <Col sm={4} md={3}>
          <div className="card-image">
            <img
              src={item?.urlToImage}
              alt={item?.title}
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
        </Col>
        <Col sm={8} md={9}>
          <div className="card-description">{item?.description}</div>
        </Col>
      </Row>
    </div>
  )
}

export default card
