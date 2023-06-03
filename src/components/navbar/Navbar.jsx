import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from '../searchBar/SearchBar'

const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        background: '#000',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1,
        maxWidth: '100vw',
        padding: '5px -5px',
      }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='logo' height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar