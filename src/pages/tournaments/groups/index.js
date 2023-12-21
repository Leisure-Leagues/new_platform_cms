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
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

export default function index() {
  const [searchTerm, setSearchTerm] = useState('')
  const [groupRounds, setGroupRounds] = useState(1)
  const [groupRoundsOptions, setGroupRoundsOptions] = useState([1, 2, 3, 4])
  const [firstDecider, setFirstDecider] = useState('10')
  const [secondDecider, setSecondDecider] = useState('20')
  const [thirdDecider, setThirdDecider] = useState('30')
  const [openFirst, setOpenFirst] = useState(false)
  const [openSecond, setOpenSecond] = useState(false)
  const [openThird, setOpenThird] = useState(false)
  const [groups, setGroups] = useState([
    {
      groupID: '1',
      name: 'A',
      teams: []
    }
  ])

  const [teamList, setTeamList] = useState([
    {
      id: 1,
      team: 'England'
    },
    {
      id: 2,
      team: 'Mexico'
    },
    {
      id: 3,
      team: 'United States'
    },
    {
      id: 4,
      team: 'Canada'
    },
    {
      id: 5,
      team: 'Guatemala'
    },
    {
      id: 6,
      team: 'Honduras'
    },
    {
      id: 7,
      team: 'Nicaragua'
    },
    {
      id: 8,
      team: 'Panama'
    },
    {
      id: 9,
      team: 'Costa Rica'
    },
    {
      id: 10,
      team: 'Haiti'
    },
    {
      id: 11,
      team: 'Suriname'
    },
    {
      id: 12,
      team: 'Brasil'
    },
    {
      id: 13,
      team: 'Argentina'
    },
    {
      id: 14,
      team: 'Chile'
    },
    {
      id: 15,
      team: 'Colombia'
    },
    {
      id: 16,
      team: 'Ecuador'
    },
    {
      id: 17,
      team: 'Peru'
    },
    {
      id: 18,
      team: 'Uruguay'
    },
    {
      id: 19,
      team: 'Marrocco'
    },
    {
      id: 20,
      team: 'Oman'
    },
    {
      id: 21,
      team: 'EAU'
    },
    {
      id: 22,
      team: 'Hungary'
    },
    {
      id: 23,
      team: 'Spain'
    },
    {
      id: 24,
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

  const handleFirstChange = event => {
    setFirstDecider(event.target.value)
  }

  const handleSecondChange = event => {
    setSecondDecider(event.target.value)
  }

  const handleThirdChange = event => {
    setThirdDecider(event.target.value)
  }

  const handleFirstClose = () => {
    setOpenFirst(false)
  }

  const handleFirstOpen = () => {
    setOpenFirst(true)
  }

  const handleSecondClose = () => {
    setOpenSecond(false)
  }

  const handleSecondOpen = () => {
    setOpenSecond(true)
  }

  const handleThirdClose = () => {
    setOpenThird(false)
  }

  const handleThirdOpen = () => {
    setOpenThird(true)
  }

  const handleRoundMatches = NoOfMatches => {
    console.log(NoOfMatches)
    setGroupRounds(NoOfMatches)
  }

  return (
    <>
      <Grid container spacing={5} alignItems='stretch' sx={{ mt: 5 }}>
        <Grid item xs={12} md={3}>
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
        <Grid item xs={12} md={3}>
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
                  How many times will teams play each other
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
        <Grid item xs={12} md={6}>
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
                  How should teams be ranked in groups
                </Typography>
              </Grid>
              <Select
                labelId='demo-controlled-open-select-label'
                id='demo-controlled-open-select'
                open={openFirst}
                onClose={handleFirstClose}
                onOpen={handleFirstOpen}
                value={firstDecider}
                label='Age'
                onChange={handleFirstChange}
              >
                <MenuItem value={10} selected>
                  Points
                </MenuItem>
                <MenuItem value={20}>Goal Difference</MenuItem>
                <MenuItem value={30}>Goals scored</MenuItem>
                <MenuItem value={40}>Head to Head</MenuItem>
              </Select>{' '}
              then{' '}
              <Select
                labelId='demo-controlled-open-select-label'
                id='demo-controlled-open-select'
                open={openSecond}
                onClose={handleSecondClose}
                onOpen={handleSecondOpen}
                value={secondDecider}
                label='Age'
                onChange={handleSecondChange}
              >
                <MenuItem value={10} selected>
                  Points
                </MenuItem>
                <MenuItem value={20}>Goal Difference</MenuItem>
                <MenuItem value={30}>Goals scored</MenuItem>
                <MenuItem value={40}>Head to Head</MenuItem>
              </Select>{' '}
              then{' '}
              <Select
                labelId='demo-controlled-open-select-label'
                id='demo-controlled-open-select'
                open={openThird}
                onClose={handleThirdClose}
                onOpen={handleThirdOpen}
                value={thirdDecider}
                label='Age'
                onChange={handleThirdChange}
              >
                <MenuItem value={10} selected>
                  Points
                </MenuItem>
                <MenuItem value={20}>Goal Diff</MenuItem>
                <MenuItem value={30}>Goals scored</MenuItem>
                <MenuItem value={40}>Head to Head</MenuItem>
              </Select>
              {'   '}then coin toss
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
