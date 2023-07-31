import { Header, Footer, Button } from "../../components"
import { Row } from "react-grid-system"
import { ArrowBack } from "@material-ui/icons"
import { CalendarMonth } from "@mui/icons-material"
import "./NewsDetail.scss"
import { useNavigate } from "react-router-dom"
import React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectNews, setSelectedNewsItem } from "../home/homeSlice"
import moment from "moment"

const NewsDetail: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { selectedNewsItem } = useAppSelector(selectNews)

  const backButtonOnClick = () => {
    dispatch(setSelectedNewsItem(null))
    navigate("/")
  }

  return (
    <div className="news-detail-main-container">
      <div>
        <Header />
      </div>
      <div
        className="back-button-container"
        onClick={() => backButtonOnClick()}
      >
        <Button icon={ArrowBack} children={"Back"} className={"back-button"} />
      </div>
      <div className="body-main-container">
        <Row>
          <div className="header-text-container">{selectedNewsItem?.title}</div>
        </Row>
        <Row>
          <div className="header-date-container">
            <CalendarMonth />
            {moment(selectedNewsItem?.publishedAt).utc().format("YYYY-MM-DD")}
          </div>
        </Row>
        <Row className="author-text-container">{selectedNewsItem?.author}</Row>
        <Row className="image-container">
          <img
            style={{ width: "100%", height: "100%" }}
            src={selectedNewsItem?.urlToImage}
            alt={selectedNewsItem?.title}
          ></img>
        </Row>
        <Row className="description-text-container">
          {selectedNewsItem?.description}
        </Row>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default NewsDetail
