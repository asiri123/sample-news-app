import React, { useState, useEffect } from "react"
import { Paper } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import { Header, Card, Footer, Loader } from "../../components"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  selectNews,
  fetchTopNewsHeadlines,
  setSelectedNewsItem,
  HeadlineItem,
} from "./homeSlice"
import { useNavigate } from "react-router-dom"
import "./Home.scss"

const Home = () => {
  const { newsItemList, status } = useAppSelector(selectNews)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchTopNewsHeadlines())
  }, [])

  const cardItemClickAction = (item: HeadlineItem) => {
    dispatch(setSelectedNewsItem(item))
    navigate("/details")
  }

  const renderItem = (item: HeadlineItem) => {
    return (
      <div key={item?.title} className="carousel-main-container">
        <Paper elevation={0} style={{ backgroundColor: "transparent" }}>
          <img
            src={item?.urlToImage}
            alt={item?.urlToImage}
            className="carousel-image"
          ></img>
          <div className="carousel-image-tile">{item?.title}</div>
        </Paper>
      </div>
    )
  }

  return (
    <div className="home-main-container">
      <div>
        <Header />
      </div>
      <div className="main-carousel-container">
        <Carousel>{newsItemList?.map((item) => renderItem(item))}</Carousel>
      </div>
      {status === "loading" && <Loader />}
      <div>
        {newsItemList?.map((item) => (
          <Card
            key={item?.title}
            item={item}
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
