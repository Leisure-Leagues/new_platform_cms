// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// ** Third Party Imports
import axios from 'axios'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ProfilePicture = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: theme.shape.borderRadius,
  border: `5px solid ${theme.palette.common.white}`,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  }
}))

const UserProfileHeader = () => {
  // ** State
  const [data, setData] = useState(null)
  const designationIcon = data?.designationIcon || 'mdi:briefcase-outline'

  const [age, setAge] = useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <Card>
      <CardMedia
        component='img'
        alt='profile-header'
        image='https://activenation.org.uk/wp-content/uploads/2019/10/Outdoor-Sports-Centre-0595-scaled.jpg'
        sx={{
          height: { xs: 150, md: 250 }
        }}
      />
      <CardContent
        sx={{
          pt: 0,
          mt: -8,
          display: 'flex',
          alignItems: 'flex-end',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            ml: { xs: 0, md: 6 },
            mt: { xs: 15 },
            alignItems: 'flex-end',
            flexWrap: ['wrap', 'nowrap'],
            justifyContent: ['center', 'space-between']
          }}
        >
          <Box sx={{ mb: [6, 0], display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'] }}>
            <Typography variant='h5' sx={{ mb: 4 }}>
              Coventry Sports Center
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: ['center', 'flex-start']
              }}
            >
              <Box sx={{ mr: 5, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                <Icon icon='mdi:map-marker-outline' />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>
                  Coventry Sports Center, Coventry Road, Coventry, CV1 8QQ
                </Typography>
              </Box>
            </Box>
          </Box>
          <FormControl sx={{ m: 1, minWidth: 450 }}>
            <InputLabel id='demo-simple-select-helper-label'>Choose League to Manage</InputLabel>
            <Select
              labelId='demo-simple-select-helper-label'
              id='demo-simple-select-helper'
              value={age}
              label='Choose League to Manage'
              onChange={handleChange}
            >
              <MenuItem selected value=''>
                <em>Switch League</em>
              </MenuItem>
              <MenuItem value='1'>Monday 16:00 - 19:00</MenuItem>
              <MenuItem value='2'>Tuesday 17:00 - 20:00</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  )
}

export default UserProfileHeader
