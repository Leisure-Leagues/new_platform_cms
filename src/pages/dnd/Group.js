'use client'

import React from 'react'
import { useDrop } from 'react-dnd'
import Grid from '@mui/material/Grid'
import Team from './Team'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function Group({ teams, group, removeTeamFromList, addTeamToList, updateGroups, groupIndex, groupRounds }) {
  const [teamsInGroup, setTeamsInGroup] = useState(group.teams)

  useEffect(() => {
    updateGroups(groupIndex, teamsInGroup)
  }, [teamsInGroup])

  const [{ isOver, didDrop }, drop] = useDrop({
    accept: 'team',
    drop: item => moveTeam(item.id),
    collect: monitor => ({
      isOver: monitor.isOver(),
      didDrop: monitor.didDrop()
    })
  })

  const moveTeam = id => {
    const moveToBoard = teams.filter(team => id === team.id)
    setTeamsInGroup(teamsInGroup => [...teamsInGroup, moveToBoard[0]])
    removeTeamFromList(id)
  }

  const removeTeam = id => {
    const removedTeam = teamsInGroup.filter(team => id === team.id)
    addTeamToList(removedTeam)
    const filterTeam = teamsInGroup.filter(team => id !== team.id)
    setTeamsInGroup(filterTeam)
    updateGroups(groupIndex, filterTeam)
  }

  return (
    <Grid item xs={6}>
      <Card ref={drop}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              sx={{
                fontWeight: '500',
                mb: 5,
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                display: 'inline'
              }}
            >
              Teams: {group.teams.length}
            </Typography>

            <Typography
              sx={{
                fontWeight: '900',
                mb: 5,
                textTransform: 'uppercase',
                fontSize: '1rem',
                display: 'inline'
              }}
            >
              Group {group.name}
            </Typography>

            <Typography
              sx={{
                fontWeight: '500',
                mb: 5,
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                display: 'inline'
              }}
            >
              Matches: {((group.teams.length * (group.teams.length - 1)) / 2) * groupRounds}
            </Typography>
          </Box>

          {group.teams.map((team, index) => (
            <Team key={team.id} team={team} removeTeam={removeTeam} grouped={true} groupInfo={group} index={index} />
          ))}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Group
