import React from 'react'

import UserViewLeft from 'src/views/users/view/UserViewLeft'
import UserViewRight from 'src/views/users/view/UserViewRight'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  const userID = router.query.user
  useEffect(() => {
    if (!userID) {
      return
    }
    getUser(userID)
  }, [userID])

  const [userData, setUserData] = useState('')

  async function getUser(user) {
    const response = await fetch(`https://dummyjson.com/users/${user}`)
    const data = await response.json()
    setUserData(data)
    console.log(userData)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={5} lg={5}>
        <UserViewLeft user={userData} />
      </Grid>
    </Grid>
  )
}

export default Page
