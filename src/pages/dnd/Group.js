import React from 'react'
import { useDrop } from 'react-dnd'
import Grid from '@mui/material/Grid'
import Team from './Team'
import { useState, useEffect } from 'react'

function Group({ teams, group, removeTeamFromList, addTeamToList, updateGroups, groupIndex }) {
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
    updateGroups(groupIndex, filterTeam)
  }

  return (
    <>
      <Grid
        ref={drop}
        item
        xs={5}
        style={{ border: '1px solid black', marginTop: '50px', minHeight: '150px', marginRight: '50px' }}
      >
        <Grid item xs={12}>
          Group {group.name}
        </Grid>

        {group.teams.map((team, index) => (
          <Team key={team.id} team={team} removeTeam={removeTeam} grouped={true} groupInfo={group} index={index} />
        ))}
      </Grid>
    </>
  )
}

export default Group
