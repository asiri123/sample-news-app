import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import axios from "axios"

export interface NewsSource {
  id: string
  name: string
}

export interface HeadlineItem {
  author: string
  content: string
  description: string
  publishedAt: string
  source: NewsSource
  title: string
  url: string
  urlToImage: string
}

export interface HeadlineState {
  newsItemList: HeadlineItem[]
  status: "idle" | "loading" | "failed"
}

const initialState: HeadlineState = {
  newsItemList: [],
  status: "idle",
}

export const fetchTopNewsHeadlines = createAsyncThunk(
  "get/topHeadlines",
  async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=152c13a883f249bfa56ed8510b770932",
      )
      return response.data.articles
    } catch (error) {
      console.log(error)
    }
  },
)

export const homeSlice = createSlice({
  name: "newsData",
  initialState,
  reducers: {
    getCardData: (state) => {
        
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopNewsHeadlines.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchTopNewsHeadlines.fulfilled, (state, action) => {
        state.status = "idle"
        state.newsItemList = action.payload
      })
      .addCase(fetchTopNewsHeadlines.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const { getCardData } = homeSlice.actions

export const selectTopHeadlines = (state: RootState) => state.news.newsItemList

export default homeSlice.reducer
