import React from 'react'

import UserViewLeft from 'src/views/users/view/UserViewLeft'
import UserViewRight from 'src/views/users/view/UserViewRight'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import TeamView from './TeamView'
import TeamFixtures from './TeamFixtures'
import SquadView from './SquadView'

const Page = () => {
  const router = useRouter()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6} lg={6}>
        <TeamView />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <TeamFixtures />
      </Grid>
      <Grid item xs={12} md={6} lg={12}>
        <SquadView />
      </Grid>
    </Grid>
  )
}

export default Page
