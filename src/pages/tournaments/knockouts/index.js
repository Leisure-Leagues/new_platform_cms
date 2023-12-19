import { useState, useEffect } from 'react'
import React from 'react'
import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const TournamentKnockouts = () => {
  const [tournamentTeams, setTournamentTeams] = useState(32)
  const [groups, setGroups] = useState(3)
  const [minTeams, setMinTeams] = useState(null)
  const [maxTeams, setMaxTeams] = useState(null)
  const [knockoutRounds, setKnockoutRounds] = useState(0)

  function calculateKnockoutTeams(groups, maxTeams) {
    // Ensure groups and maxTeams are positive integers
    groups = Math.max(0, Math.floor(groups))
    maxTeams = Math.max(0, Math.floor(maxTeams))

    // Find the next highest power of 2 to the number of groups
    let nextHighestGroups = 2
    while (nextHighestGroups < groups) {
      nextHighestGroups *= 2
    }

    // Find the next lowest power of 2 to the maximum number of teams
    let nextLowestTeams = 1
    while (nextLowestTeams * 2 <= maxTeams) {
      nextLowestTeams *= 2
    }
    setMaxTeams(nextLowestTeams)
    setMinTeams(nextHighestGroups)
  }

  useEffect(() => {
    calculateKnockoutTeams(groups, tournamentTeams)
  }, [])

  const knockoutFormat = [2, 4, 8, 16, 32, 64, 128]

  return (
    <>
      <Grid container spacing={5} alignItems='stretch'>
        <Grid item xs={12}>
          <Alert severity='warning'>
            You have a total of {tournamentTeams} teams across {groups} groups. At least 1 team must qualify from each
            group, meaning your knockout bracket must contain at least {minTeams} teams and a maximum of {maxTeams}.
          </Alert>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '1rem',
                    mb: 4
                  }}
                >
                  How many teams will be in your knockout bracket?
                </Typography>
              </Grid>
              <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {knockoutFormat.map((round, index) => {
                  if (round <= maxTeams && round >= minTeams) {
                    return <Button variant={index === knockoutRounds ? 'outlined' : 'contained'}>{round}</Button>
                  }
                })}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '1rem',
                    mb: 4
                  }}
                >
                  How many teams will automatically qualify from each group?
                </Typography>
              </Grid>
              <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Button variant='contained'>1</Button>
                <Button variant='contained'>1</Button>
                <Button variant='contained'>1</Button>
                <Button variant='contained'>1</Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default TournamentKnockouts
