import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/system'
import './App.css'
import { Navbar } from './components/navbar/Navbar'

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundCollor: '#000'}}>
      <Navbar />    
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:id" element={<SearchFeed />} />

      </Routes>
    </Box>
  </BrowserRouter>    
)

export default App
