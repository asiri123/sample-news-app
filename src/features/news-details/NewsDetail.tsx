import { Header, Footer, Button } from "../../components"
import { Row } from "react-grid-system"
import { ArrowBack } from "@material-ui/icons"
import { CalendarMonth, Navigation } from "@mui/icons-material"
import "./NewsDetail.scss"
import { useNavigate } from "react-router-dom"
import React from "react"

interface NewsDetailProps {
  header: string
  date: string
  author: string
  imageurl: string
  description: string
}

const NewsDetail: React.FC<NewsDetailProps> = ({
  header,
  date,
  author,
  imageurl,
  description,
}: NewsDetailProps) => {
  const navigate = useNavigate()

  return (
    <div className="news-detail-main-container">
      <div>
        <Header />
      </div>
      <div className="back-button-container" onClick={() => navigate("/")}>
        <Button icon={ArrowBack} children={"Back"} className={"back-button"} />
      </div>
      <div className="body-main-container">
        <Row>
          <div className="header-text-container">{header}</div>
        </Row>
        <Row>
          <div className="header-date-container">
            <CalendarMonth />
            {date}
          </div>
        </Row>
        <Row className="author-text-container">{author}</Row>
        <Row>
          <img src={imageurl} alt={imageurl}></img>
        </Row>
        <Row className="description-text-container">{description}</Row>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default NewsDetail
