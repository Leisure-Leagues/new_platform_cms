'use client'

import React from 'react'
import { useDrag } from 'react-dnd'
import Alert from '@mui/material/Alert'
import Icon from 'src/@core/components/icon'

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
        <Alert
          icon={<Icon fontSize={20} icon='mdi:delete' />}
          severity='error'
          sx={[
            {
              margin: '15px',
              opacity: isDragging ? '0' : '1',
              cursor: 'pointer'
            },
            {
              '&:hover': {
                cursor: 'delete',
                transform: 'scale(0.98)',
                color: 'red'
              }
            }
          ]}
          onClick={grouped ? () => removeTeam(team.id) : null}
        >
          {team.team}
        </Alert>
      )}
    </>
  )
}
