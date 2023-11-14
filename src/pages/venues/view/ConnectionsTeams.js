// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useState } from 'react'
import { TextField } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

const ConnectionsTeams = ({ connections, teams }) => {
  const [isNameFocused, setIsNamedFocused] = useState(false)
  const [description, setDescription] = useState(
    ' Start your journey towards great 6-a-side football in Coventry . Located at Coventry Sports Center our venue has got great facilities and the players to match. Leisure Leagues are the largest nationwide provider of small sided football leagues. With over 184,000 games played a year, youll become a part of a massive community and a vibrant network of players dedicated to the beautiful game. League Winners will receive a Winners Trophy and medals and Medals for the Runners Up.'
  )

  return (
    <>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Venue Facilities'
            action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Add Facility']} />}
          />
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:not(:last-of-type)': { mb: 4 }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon='mdi:parking' />
                <div>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, marginLeft: '20px' }}>
                    On-site Parking
                  </Typography>
                </div>
              </Box>
              <Button
                size='small'
                color='error'
                variant='outlined'
                sx={{ minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
              >
                <Icon icon='mdi:delete' />
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:not(:last-of-type)': { mb: 4 }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon='mdi:shower' />
                <div>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, marginLeft: '20px' }}>
                    Showers Avilable{' '}
                  </Typography>
                </div>
              </Box>
              <Button
                size='small'
                color='error'
                variant='outlined'
                sx={{ minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
              >
                <Icon icon='mdi:delete' />
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:not(:last-of-type)': { mb: 4 }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon='mdi:wifi' />
                <div>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, marginLeft: '20px' }}>
                    Wifi Access
                  </Typography>
                </div>
              </Box>
              <Button
                size='small'
                color='error'
                variant='outlined'
                sx={{ minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
              >
                <Icon icon='mdi:delete' />
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:not(:last-of-type)': { mb: 4 }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon='mdi:local-dining' />
                <div>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, marginLeft: '20px' }}>Cafe</Typography>
                </div>
              </Box>
              <Button
                size='small'
                color='error'
                variant='outlined'
                sx={{ minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
              >
                <Icon icon='mdi:delete' />
              </Button>
            </Box>
            <Box sx={{ mt: 3.5, width: '100%', textAlign: 'center' }}>
              <Typography
                href='/'
                component={Link}
                onClick={e => e.preventDefault()}
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              ></Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Venue Description' />
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                '&:not(:last-of-type)': { mb: 4 }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'top', minHeight: '220px' }}>
                {!isNameFocused ? (
                  <Typography
                    sx={{ fontSize: '0.875rem', fontWeight: 400 }}
                    onDoubleClick={() => {
                      setIsNamedFocused(true)
                    }}
                  >
                    {description}
                  </Typography>
                ) : (
                  <TextField
                    style={{ width: 400 }}
                    maxRows={10}
                    multiline
                    autoFocus
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    onBlur={event => setIsNamedFocused(false)}
                  />
                )}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default ConnectionsTeams
