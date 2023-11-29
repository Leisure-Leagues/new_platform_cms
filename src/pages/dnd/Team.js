import React from 'react'
import { useDrag } from 'react-dnd'
import Icon from 'src/@core/components/icon'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'

export default function Team({ team, removeTeam, grouped, groupInfo, index }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'team',
    item: { id: team.id },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <Alert
      onClick={grouped ? () => removeTeam(team.id) : null}
      icon={grouped ? <Icon icon='mdi:delete' /> : <Icon icon='mdi:drag' />}
      ref={drag}
      severity='info'
      sx={[
        {
          margin: '15px',
          opacity: isDragging ? '0' : '1',
          color: 'black',
          fontWeight: '700',
          cursor: 'pointer'
        },
        !grouped && {
          '&:hover': {
            cursor: 'move',
            transform: 'scale(1.05)'
          }
        }
      ]}
    >
      {grouped && `${groupInfo.name}${index + 1} -`} {team.team}
    </Alert>
  )
}
