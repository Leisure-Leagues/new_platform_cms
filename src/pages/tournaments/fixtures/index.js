import React from 'react'
import Alert from '@mui/material/Alert'

const TournamentFixtures = () => {
  return (
    <Alert severity='error' sx={{ mt: 5 }}>
      Before generating fixtures, ensure all teams have been assigned to a group and you have confirmed the settings for
      the knockout bracket
    </Alert>
  )
}

export default TournamentFixtures
