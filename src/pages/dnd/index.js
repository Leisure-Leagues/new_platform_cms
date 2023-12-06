import React, { useState } from 'react'
import Team from './Team'
import Grid from '@mui/material/Grid'
import Group from './Group'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Icon from 'src/@core/components/icon'

export default function index() {
  const [groups, setGroups] = useState([
    {
      groupID: '1',
      name: 'A',
      slots: 4,
      teams: []
    },
    {
      groupID: '2',
      name: 'B',
      slots: 4,
      teams: []
    },
    {
      groupID: '3',
      name: 'C',
      slots: 4,
      teams: []
    },
    {
      groupID: '4',
      name: 'D',
      slots: 4,
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

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontWeight: '500',
              textTransform: 'uppercase',
              fontSize: '1.3rem',
              display: 'inline'
            }}
          >
            Cancun 2024 - Group Stages
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography
                sx={{
                  fontWeight: '500',
                  mb: 5,
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  display: 'inline'
                }}
              >
                Add Group
                <Icon icon='mdi:minus-circle-outline' fontSize={30} />
                Remove Group
                <Icon icon='mdi:add-circle-outline' fontSize={30} />{' '}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography
                sx={{
                  fontWeight: '500',
                  mb: 5,
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  display: 'inline'
                }}
              >
                Number of Groups
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography
                sx={{
                  fontWeight: '500',
                  mb: 5,
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  display: 'inline'
                }}
              >
                Number of Groups:
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={12}>
          <Typography
            variant='h6'
            sx={{
              fontWeight: '500',
              mb: 5,
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              display: 'inline'
            }}
          >
            Teams to be assigned ({teamList.length})
          </Typography>
        </Grid>
        {teamList.map(team => (
          <Grid item xs={2}>
            <Team key={team.id} team={team} grouped={false} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: '40px' }}>
        {groups.map((group, index) => (
          <Group
            removeFunction={teamPlacedInGroup}
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
