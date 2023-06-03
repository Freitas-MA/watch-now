import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from '../channel/channelCard'
import Loader from './Loader'

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;

return (
    <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos && videos.map((item, idx) => (
        console.log(item.id?.videoId, item.id?.channelId),
        <Box key={idx}>
            {item.id && item.id.videoId && <VideoCard video={item} />}
            {item.id && item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;