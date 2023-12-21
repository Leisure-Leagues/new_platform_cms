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
  const [teamsProgressing, setTeamsProgressing] = useState(null)
  const [thirdPlaceTeams, setThirdPlaceTeams] = useState(null)

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

  useEffect(() => {
    calculateThirdPlaces()
  }, [teamsProgressing, knockoutRounds])

  const handleKnockoutTeams = value => {
    setKnockoutRounds(value)
  }

  const handleTeamsProgressing = value => {
    setTeamsProgressing(value)
  }

  const calculateThirdPlaces = () => {
    const teamsGoingThrough = groups * teamsProgressing
    const thirdPlaceTeams = knockoutRounds - teamsGoingThrough

    setThirdPlaceTeams(thirdPlaceTeams)
  }

  const knockoutFormat = [2, 4, 8, 16, 32, 64, 128]
  const numberProgressing = ['1st', 'Top 2', 'Top 3', 'Top 4']

  return (
    <>
      <Grid container alignItems='stretch' spacing={5} sx={{ mt: 5 }}>
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
                    return (
                      <Button
                        key={index}
                        variant={round === knockoutRounds ? 'contained' : 'outlined'}
                        onClick={() => handleKnockoutTeams(round)}
                      >
                        {round}
                      </Button>
                    )
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
                  Which teams will automatically qualify from each group?
                </Typography>
              </Grid>
              <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {numberProgressing.map((value, index) => (
                  <Button
                    variant={index + 1 === teamsProgressing ? 'contained' : 'outlined'}
                    onClick={() => handleTeamsProgressing(index + 1)}
                  >
                    {value}
                  </Button>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            {teamsProgressing !== null && knockoutRounds !== null && thirdPlaceTeams > 0 && (
              <CardContent>
                <Grid item xs={12}>
                  <Alert severity='info'>
                    Along with the {numberProgressing[teamsProgressing]} from each group, the next {thirdPlaceTeams}{' '}
                    best teams will also qualify to the knockout stage
                  </Alert>
                </Grid>
              </CardContent>
            )}
            {teamsProgressing !== null && knockoutRounds !== null && thirdPlaceTeams < 0 && (
              <CardContent>
                <Grid item xs={12}>
                  <Alert severity='error'>
                    The number of teams progressing from the groups exceed the number of teams in your knockout bracket.
                  </Alert>
                </Grid>
              </CardContent>
            )}
          </Card>
        </Grid>
        {teamsProgressing !== null && knockoutRounds !== null && thirdPlaceTeams > 0 && (
          <Grid item xs={12}>
            <Button variant='contained' fullWidth>
              Generate Knockout Bracket
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default TournamentKnockouts
