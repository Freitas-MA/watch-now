import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'

const channelCard = ( { channelDetail }) => {
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { md: '320px', xs: '100%' },
      height: { md: '320px', xs: '100%' },
      margin: 'auto',
    }}>
      <Link to={`/channel/${channelDetail?.channelId}`}> 
        <CardContent sx={{ display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.medium?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title || 'Channel Name'}
            sx={{ borderRadius:'50%', width:'180px', height:'180px', margin:'auto'}}
          />
          <Typography variant='h6' fontWeight='bold' mt={2}>
            {channelDetail?.snippet?.title || 'Channel Name'}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant='body2' color='gray' mt={1}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
            </Typography>
          )}
        </CardContent>

      </Link>
    </Box>
  )
}

export default channelCard