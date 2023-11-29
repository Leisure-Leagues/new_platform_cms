import React, { useState, useEffect } from 'react'
import Team from './Team'

import Grid from '@mui/material/Grid'

import Group from './Group'
import { Button } from '@mui/material'

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
      team: 'Manchester United'
    },
    {
      id: '2',
      team: 'Arsenal'
    },
    {
      id: '3',
      team: 'Aston Villa'
    },
    {
      id: '4',
      team: 'Tottenham Hotspur'
    },
    {
      id: '5',
      team: 'Chelsea'
    },
    {
      id: '6',
      team: 'Manchester City'
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
      <Button onClick={() => console.log(groups)}>Hello</Button>
      <Grid container>
        {teamList.map(team => (
          <Grid item xs={3}>
            <Team key={team.id} team={team} grouped={false} />
          </Grid>
        ))}
      </Grid>
      <Grid container>
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
