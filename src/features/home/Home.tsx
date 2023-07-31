import { useEffect } from "react"
import { Header, Card, Footer } from "../../components"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectTopHeadlines, fetchTopNewsHeadlines,getCardData } from "./homeSlice"
import { Button, Paper } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import { useNavigate } from "react-router-dom"
import "./Home.scss"

const Home = (props: any) => {
  const newsHeadlines = useAppSelector(selectTopHeadlines)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchTopNewsHeadlines())
  }, [])

  const Item = (props: any) => {
    return (
      <div className="carousel-main-container">
        <Paper elevation={0} style={{ backgroundColor: "transparent" }}>
          <img
            src={props.item.urlToImage}
            alt={props.item.urlToImage}
            className="carousel-image"
          ></img>
          <div className="carousel-image-tile">{props.item.title}</div>
        </Paper>
      </div>
    )
  }

  const cardItemClickAction = () => {
    dispatch(getCardData())
    navigate("/details")
  }

  return (
    <div className="home-main-container">
      <div>
        <Header />
      </div>
      <div className="main-carousel-container">
        <Carousel>
          {newsHeadlines.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
      <div>
        {newsHeadlines.map((items, key) => (
          <Card
            headline={items.title}
            author={items.author}
            date={items.publishedAt}
            image={items.urlToImage}
            description={items.description}
            OnClickViewDetails={cardItemClickAction}
          />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
