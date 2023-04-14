import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Feed from './components/Feed'
import VideoDetails from './components/VideoDetails'
import ChannelDetails from './components/ChannelDetails'
import SearchFeed from './components/SearchFeed'
import Navbar from './components/Navbar'

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="video/:id" element={<VideoDetails />} />
            <Route path="channels/:id" element={<ChannelDetails />} />
            <Route path="search/:query" element={<SearchFeed />} />
        </Routes>     
    </Box>
  </BrowserRouter>
);
   
  


export default App