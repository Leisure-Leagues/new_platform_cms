'use client'

import React, { useState } from 'react'
import Team from './Team'
import Grid from '@mui/material/Grid'
import Group from './Group'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Icon from 'src/@core/components/icon'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import Divider from '@mui/material/Divider'

export default function index() {
  const [searchTerm, setSearchTerm] = useState('')
  const [groupRounds, setGroupRounds] = useState(1)
  const [groupRoundsOptions, setGroupRoundsOptions] = useState([1, 2, 3, 4])
  const [groups, setGroups] = useState([
    {
      groupID: '1',
      name: 'A',
      teams: []
    }
  ])

  const [teamList, setTeamList] = useState([
    {
      id: '1',
      team: 'England'
    },
    {
      id: '2',
      team: 'Spain'
    },
    {
      id: '3',
      team: 'France'
    },
    {
      id: '4',
      team: 'Germany'
    },
    {
      id: '5',
      team: 'Italy'
    },
    {
      id: '6',
      team: 'Brazil'
    },
    {
      id: '7',
      team: 'Argentina'
    },
    {
      id: '8',
      team: 'Mexico'
    },
    {
      id: '9',
      team: 'United States'
    },
    {
      id: '10',
      team: 'Belgium'
    }
  ])

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  const filterTeams = () => {
    return teamList.filter(team => team.team.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  const addGroup = () => {
    const groupName = String.fromCharCode('A'.charCodeAt(0) + groups.length)

    const blankGroup = {
      groupID: 'ID',
      name: groupName,
      teams: []
    }

    setGroups(prev => [...prev, blankGroup])
  }

  const teamPlacedInGroup = id => {
    const oldList = teamList.filter(team => id !== team.id)
    setTeamList(oldList)
  }

  const removeTeamFromGroup = team => {
    setTeamList(teamList => [...teamList, team[0]])
  }

  const updateGroup = (index, teamsArray) => {
    const updatedGroups = [...groups]

    updatedGroups[index].teams = teamsArray
    setGroups(updatedGroups)
  }

  const removeGroup = () => {
    const currentGroups = [...groups]
    const newGroups = currentGroups.pop()
    const addTeamsToPool = []
    newGroups.teams.forEach(team => {
      setTeamList(prev => [...prev, team])
    })
    setGroups(currentGroups)
  }

  const totalFixtures = () => {
    let fixtures = 0

    for (let i = 0; i < groups.length; i++) {
      let groupFixturesCount = (groups[i].teams.length * (groups[i].teams.length - 1)) / 2
      fixtures += groupFixturesCount
    }

    return fixtures
  }

  const handleRoundMatches = NoOfMatches => {
    console.log(NoOfMatches)
    setGroupRounds(NoOfMatches)
  }

  return (
    <>
      <Grid container spacing={5} alignItems='stretch'>
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
                  Number of Groups
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-evenly', alignContent: 'center' }}>
                <Icon
                  icon='mdi:minus-circle-outline'
                  fontSize={50}
                  style={{ cursor: 'pointer' }}
                  onClick={removeGroup}
                />
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '2rem'
                  }}
                >
                  {groups.length}
                </Typography>
                <Icon icon='mdi:add-circle-outline' fontSize={50} style={{ cursor: 'pointer' }} onClick={addGroup} />{' '}
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
                    mb: 7
                  }}
                >
                  How many rounds of matches should there be in each group?
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {groupRoundsOptions.map((round, index) => (
                  <Button
                    key={index}
                    variant={groupRounds === round ? 'contained' : 'outlined'}
                    onClick={() => handleRoundMatches(round)}
                  >
                    {round}
                  </Button>
                ))}
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
                  Group Stage Fixtures
                </Typography>
              </Grid>
              <Typography
                sx={{
                  fontWeight: '800',
                  fontSize: '2rem'
                }}
              >
                {totalFixtures() * groupRounds}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 10 }} />
      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant='h6'
            sx={{
              fontWeight: '500',
              fontSize: '0.8rem',
              mr: 3
            }}
          >
            Teams to be assigned ({teamList.length} remaining)
          </Typography>
          <OutlinedInput
            sx={{ height: 40 }}
            placeholder='Search Teams...'
            onChange={handleSearchChange}
            startAdornment={
              <InputAdornment position='start'>
                <Icon icon='mdi:search' />
              </InputAdornment>
            }
          />
        </Grid>
        {filterTeams().map(team => (
          <Grid item xs={3} md={2} key={team.id}>
            <Team team={team} grouped={false} />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ marginTop: 10 }} />
      <Grid container spacing={2} sx={{ marginTop: '40px' }} alignItems='stretch' display='flex'>
        {groups.map((group, index) => (
          <Group
            key={index}
            removeFunction={teamPlacedInGroup}
            groupRounds={groupRounds}
            group={group}
            teams={teamList}
            removeTeamFromList={teamPlacedInGroup}
            addTeamToList={removeTeamFromGroup}
            updateGroups={updateGroup}
            groupIndex={index}
          />
        ))}
      </Grid>
    </>
  )
}
