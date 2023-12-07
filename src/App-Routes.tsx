import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./features/home/Home"
import NewsDetail from "./features/news-details/NewsDetail"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<NewsDetail />} />
        <Route path="*" element={"test"}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
