import React from 'react'
import { useDrag } from 'react-dnd'
import Chip from '@mui/material/Chip'
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
    <>
      {!grouped ? (
        <Chip
          ref={drag}
          label={team.team}
          color='primary'
          sx={[
            {
              margin: '15px',
              opacity: isDragging ? '0' : '1',
              fontWeight: '700',
              cursor: 'pointer',
              width: '200px'
            },
            !grouped && {
              '&:hover': {
                cursor: 'move',
                transform: 'scale(1.05)'
              }
            }
          ]}
        />
      ) : (
        <Alert severity='success' sx={{ my: '10px' }} onClick={grouped ? () => removeTeam(team.id) : null}>
          {team.team}
        </Alert>
      )}
    </>
  )
}
