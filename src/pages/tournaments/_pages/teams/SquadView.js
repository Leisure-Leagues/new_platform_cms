// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import CardHeader from '@mui/material/CardHeader'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const SquadView = () => {
  const players = [
    {
      name: 'Jordan Pickford',
      age: 26,
      position: 'Goalkeeper',
      image: 'https://sportsmanheight.com/wp-content/uploads/2021/11/13-4.png'
    },
    {
      name: 'Harry Maguire',
      age: 29,
      position: 'Defender',
      image: 'https://b.fssta.com/uploads/application/soccer/headshots/6318.png'
    },
    {
      name: 'Kyle Walker',
      age: 29,
      position: 'Defender',
      image: 'https://i.pinimg.com/1200x/03/67/1c/03671c2d57d38f34546c368280009e9b.jpg'
    },
    {
      name: 'Phil Foden',
      age: 29,
      position: 'Midfielder',
      image: 'https://b.fssta.com/uploads/application/soccer/headshots/49575.vresize.350.350.medium.39.png'
    },
    {
      name: 'Jude Bellingham',
      age: 29,
      position: 'Forward',
      image: 'https://b.fssta.com/uploads/application/soccer/headshots/71310.vresize.350.350.medium.12.png'
    },
    {
      name: 'Harry Kane',
      age: 29,
      position: 'Forward',
      image: 'https://i.pinimg.com/originals/32/43/3d/32433dade363bf766c66aeff2f34efbc.png'
    }
  ]

  return (
    <>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Squad Members'
            action={
              <Button variant='contained' sx={{ '& svg': { mr: 1 } }}>
                <Icon icon='mdi:plus' fontSize='1.125rem' />
                Add Player
              </Button>
            }
          />

          {players.map(player => (
            <CardContent>
              <Box
                sx={{
                  p: 5,
                  display: 'flex',
                  borderRadius: 1,
                  justifyContent: ['space-between'],
                  alignItems: ['flex-start', 'center'],
                  mb: 2,
                  border: theme => `1px solid ${theme.palette.divider}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={player.image} width='130px' />

                  <Box sx={{ mt: 1, mb: 2.5, ml: 5, display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600 }}>{player.name}</Typography>
                    <Typography variant='body2'>Age: {player.age}</Typography>
                    <Typography variant='body2'>Position: {player.position}</Typography>
                  </Box>
                </div>
                <Box sx={{ mt: [3, 0], textAlign: ['start', 'end'] }}>
                  <Button variant='outlined' sx={{ mr: 4 }}>
                    View Stats
                  </Button>
                  <Button variant='outlined' color='error'>
                    Remove
                  </Button>
                </Box>
              </Box>
            </CardContent>
          ))}
        </Card>
      </Grid>
    </>
  )
}

export default SquadView
