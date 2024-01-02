import React from 'react'
import Grid from '@mui/material/Grid'
import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Box from '@mui/system/Box'
import { parse, format } from 'date-fns'

const FixtureList = ({ fixtures, date, group, sortBy }) => {
  //Filter the fixtures data based on the date and convert the date to human readable format eg. "Monday 16th Februray"

  const filteredFixturesByDate = fixtures.filter(fixture => fixture.date === date)
  const filteredFixturesByGroup = fixtures.filter(fixture => fixture.group === group)
  const dateObject = parse(date, 'dd/MM/yyyy', new Date())

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {sortBy === 'date' && (
          <Typography variant='h6' sx={{ mt: 5, mb: 0 }}>
            {format(dateObject, 'EEEE do MMMM')}
          </Typography>
        )}
        {sortBy === 'groups' && (
          <Typography variant='h6' sx={{ mt: 5, mb: 0 }}>
            {group}
          </Typography>
        )}
      </Grid>
      {sortBy === 'date' &&
        filteredFixturesByDate.map((fixture, index) => (
          <Grid key={index} item xs={6}>
            <Card sx={{ mt: 5 }}>
              <CardContent
                sx={{
                  p: theme => `${theme.spacing(3, 5.25, 4)} !important`,
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Image
                    src={fixture.homeTeam.image}
                    height='75'
                    width='75'
                    style={{ borderRadius: '50%', border: '1px solid black' }}
                    alt={fixture.homeTeam.name}
                  />
                  <Typography variant='h6'>{fixture.homeTeam.name}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant='subtitle'>{fixture.group}</Typography>
                  <Typography variant='subtitle1'>{fixture.time}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Image
                    src={fixture.awayTeam.image}
                    height='75'
                    width='75'
                    style={{ borderRadius: '50%', border: '1px solid black' }}
                    alt={fixture.awayTeam.name}
                  />
                  <Typography variant='h6'>{fixture.awayTeam.name}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}

      {sortBy === 'groups' &&
        filteredFixturesByGroup.map((fixture, index) => (
          <Grid key={index} item xs={6}>
            <Card sx={{ mt: 5 }}>
              <CardContent
                sx={{
                  p: theme => `${theme.spacing(3, 5.25, 4)} !important`,
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Image
                    src={fixture.homeTeam.image}
                    height='75'
                    width='75'
                    style={{ borderRadius: '50%', border: '1px solid black' }}
                    alt={fixture.homeTeam.name}
                  />
                  <Typography variant='h6'>{fixture.homeTeam.name}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant='subtitle'>
                    {format(parse(fixture.date, 'dd/MM/yyyy', new Date()), 'EEE do MMMM')}
                  </Typography>
                  <Typography variant='subtitle1'>{fixture.time}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Image
                    src={fixture.awayTeam.image}
                    height='75'
                    width='75'
                    style={{ borderRadius: '50%', border: '1px solid black' }}
                    alt={fixture.awayTeam.name}
                  />
                  <Typography variant='h6'>{fixture.awayTeam.name}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}

export default FixtureList
