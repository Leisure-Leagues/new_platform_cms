import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from 'src/hooks/useAuth'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import InputAdornment from '@mui/material/InputAdornment'
import LinearProgress from '@mui/material/LinearProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'
import Icon from 'src/@core/components/icon'
import ProfileTimeline from './ProfileTimeline'

const Page = () => {
  const [profileLoaded, setProfileLoaded] = useState(false)
  const [userData, setUserData] = useState(false)
  const auth = useAuth()

  const retrieveProfile = async () => {
    const request = await auth.requests.get('/api/auth/profile')
    setUserData(request.data.user)
    setProfileLoaded(true)
  }

  useEffect(() => {
    retrieveProfile()
  }, [])

  if (profileLoaded) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12} md={5} lg={7}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <CardContent sx={{ pt: 15, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <CustomAvatar
                    skin='light'
                    variant='rounded'
                    color='success'
                    sx={{ width: 120, height: 120, fontWeight: 600, mb: 4, fontSize: '3rem' }}
                  >
                    {getInitials('Daniel Earp')}
                  </CustomAvatar>
                  <Typography variant='h6' sx={{ mb: 4 }}>
                    {userData.first_name} {userData.last_name}
                  </Typography>
                </CardContent>

                <CardContent sx={{ my: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ mr: 8, display: 'flex', alignItems: 'center' }}>
                      <CustomAvatar skin='light' variant='rounded' sx={{ mr: 4, width: 44, height: 44 }}>
                        <Icon icon='mdi:check' />
                      </CustomAvatar>
                      <div>
                        <Typography variant='h6'>Joined</Typography>
                        <Typography variant='body2'>1st January 2023</Typography>
                      </div>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CustomAvatar skin='light' variant='rounded' sx={{ mr: 4, width: 44, height: 44 }}>
                        <Icon icon='mdi:star-outline' />
                      </CustomAvatar>
                      <div>
                        <Typography variant='h6'>Role</Typography>
                        <Typography variant='body2'>Area Manager</Typography>
                      </div>
                    </Box>
                  </Box>
                </CardContent>

                <CardContent>
                  <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
                  <Box sx={{ pb: 1 }}>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Username:</Typography>
                      <Typography variant='body2'>Username</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Email:</Typography>
                      <Typography variant='body2'>{userData.email}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Address:</Typography>
                      <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
                        Address
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Contact:</Typography>
                      <Typography variant='body2'>Phone Number</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Language:</Typography>
                      <Typography variant='body2'>English</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Country:</Typography>
                      <Typography variant='body2'>England</Typography>
                    </Box>
                  </Box>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button variant='contained' sx={{ mr: 2 }}>
                    Edit Details
                  </Button>
                  <Button variant='contained' sx={{ mr: 2 }}>
                    Update Password
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <ProfileTimeline />
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default Page
