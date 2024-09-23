import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from '../index'
import useYouTubeStore from "../../zustand/store" // Ajuste o caminho conforme necessário

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()
  const { fetchChannelDetails, fetchChannelVideos } = useYouTubeStore()
  
  useEffect(() => {
    const loadChannelData = async () => {
      const channelData = await fetchChannelDetails(id)
      setChannelDetail(channelData)

      const channelVideos = await fetchChannelVideos(id)
      setVideos(channelVideos)
    }

    loadChannelData()
  }, [id, fetchChannelDetails, fetchChannelVideos])

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-red-500 to-blue-500 h-72 z-10"/>
      <ChannelCard 
        channelDetail={channelDetail}
        className="mt-[-6rem]"
      />
      <div className="flex p-2">
        <div className="mr-24 "/>
        <Videos videos={videos}/>
      </div>
    </div>
  )
}

export default ChannelDetail