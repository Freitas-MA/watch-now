import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from '../index'
import useYouTubeStore from "../../zustand/store" // Ajuste o caminho conforme necessário

/**
 * ChannelDetail component fetches and displays the details and videos of a YouTube channel.
 *
 * @component
 * @example
 * return (
 *   <ChannelDetail />
 * )
 *
 * @returns {JSX.Element} The rendered ChannelDetail component.
 *
 * @description
 * This component uses the `useParams` hook to get the channel ID from the URL,
 * and the `useYouTubeStore` hook to fetch channel details and videos. It uses
 * `useEffect` to load the channel data when the component mounts or when the
 * channel ID changes. The component renders a gradient background, a `ChannelCard`
 * with the channel details, and a list of videos using the `Videos` component.
 */
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