// ** MUI Components
import Grid from '@mui/material/Grid'

// ** Demo Components
import AboutOverivew from './AboutOverivew'
import ProjectsTable from './ProjectsTable'
import ActivityTimeline from './ActivityTimeline'
import UserProfileHeader from './UserProfileHeader'
import RechartsLineChart from './RechartsLineChart'
import RechartsPieChart from './RechartsPieChart'

const ProfileTab = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <UserProfileHeader />
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <AboutOverivew />
        </Grid>
        <Grid item lg={8} md={7} xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <ProjectsTable />
            </Grid>
            <Grid item xs={12} md={6}>
              <RechartsLineChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <RechartsPieChart />
            </Grid>
            <Grid item xs={12}>
              <ActivityTimeline />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ProfileTab
