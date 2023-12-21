// ** React Imports
import { useState, useEffect } from 'react'
// ** MUI Components
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiTabList from '@mui/lab/TabList'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Components
import TournamentFixtures from './fixtures'
import TournamentHeader from './TournamentHeader'
import TournamentGroups from './groups'
import TournamentTeams from './teams'
import TournamentGallery from './gallery'
import TournamentKnockouts from './knockouts'
import ManageNews from './news'

const TabList = styled(MuiTabList)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minWidth: 65,
    minHeight: 38,
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('sm')]: {
      minWidth: 130
    }
  }
}))

const UserProfile = ({ tab, data }) => {
  // ** State
  const [activeTab, setActiveTab] = useState('teams')
  const [isLoading, setIsLoading] = useState(true)
  const hideText = useMediaQuery(theme => theme.breakpoints.down('sm'))

  const handleChange = (event, value) => {
    setActiveTab(value)
  }

  //Hide the loading icon once the page has loaded
  useEffect(() => {
    setIsLoading(false)
  })

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const tabContentList = {
    teams: <TournamentTeams />,
    groups: <TournamentGroups />,
    fixtures: <TournamentFixtures />,
    knockout: <TournamentKnockouts />,
    gallery: <TournamentGallery />,
    news: <ManageNews />
  }

  return (
    <Grid container alignItems='stretch' spacing={6}>
      <Grid item xs={12}>
        <TournamentHeader />
      </Grid>
      {activeTab === undefined ? null : (
        <Grid item xs={12}>
          <TabContext value={activeTab}>
            <Grid container alignItems='stretch' spacing={6}>
              <Grid item xs={12}>
                <TabList
                  variant='scrollable'
                  scrollButtons='auto'
                  onChange={handleChange}
                  aria-label='customized tabs example'
                >
                  <Tab
                    value='teams'
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                        <Icon fontSize={20} icon='mdi:account-multiple-outline' />
                        {!hideText && 'Teams'}
                      </Box>
                    }
                  />
                  <Tab
                    value='groups'
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                        <Icon fontSize={20} icon='mdi:view-grid-outline' />
                        {!hideText && 'Groups'}
                      </Box>
                    }
                  />
                  <Tab
                    value='knockout'
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                        <Icon fontSize={20} icon='mdi:account-outline' />
                        {!hideText && 'Knockouts'}
                      </Box>
                    }
                  />
                  <Tab
                    value='fixtures'
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                        <Icon fontSize={20} icon='mdi:lock' />
                        {!hideText && 'Fixtures'}
                      </Box>
                    }
                  />
                  <Tab
                    value='news'
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                        <Icon fontSize={20} icon='mdi:newspaper-variant-outline' />
                        {!hideText && 'News'}
                      </Box>
                    }
                  />
                  <Tab
                    value='gallery'
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                        <Icon fontSize={20} icon='mdi:view-gallery' />
                        {!hideText && 'Gallery'}
                      </Box>
                    }
                  />
                </TabList>
              </Grid>
              <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
                {isLoading ? (
                  <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <CircularProgress sx={{ mb: 4 }} />
                    <Typography>Loading...</Typography>
                  </Box>
                ) : (
                  <TabPanel sx={{ p: 0 }} value={activeTab}>
                    {tabContentList[activeTab]}
                  </TabPanel>
                )}
              </Grid>
            </Grid>
          </TabContext>
        </Grid>
      )}
    </Grid>
  )
}

export default UserProfile
