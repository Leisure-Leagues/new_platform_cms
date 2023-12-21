'use client'

import React from 'react'
import { useDrag } from 'react-dnd'
import Chip from '@mui/material/Chip'
import Alert from '@mui/material/Alert'

export default function Team({ team, removeTeam, grouped, groupInfo, index }) {
  if (!team) {
    return null
  }
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'team',
    item: { id: team.id },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <>
      {!grouped ? (
        <Alert
          ref={drag}
          severity='success'
          sx={[
            {
              margin: '15px',
              opacity: isDragging ? '0' : '1',
              cursor: 'pointer',
              width: '250px'
            },
            !grouped && {
              '&:hover': {
                cursor: 'move',
                transform: 'scale(1.05)'
              }
            }
          ]}
          onClick={grouped ? () => removeTeam(team.id) : null}
          icon={false}
        >
          {team.team}
        </Alert>
      ) : (
        <Alert severity='success' sx={{ my: '10px' }} onClick={grouped ? () => removeTeam(team.id) : null}>
          {team.team}
        </Alert>
      )}
    </>
  )
}
