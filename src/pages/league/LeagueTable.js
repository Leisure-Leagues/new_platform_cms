// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Components
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Button } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { Tooltip } from '@mui/material'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import Avatar from 'src/@core/components/mui/avatar'

const columns = [
  {
    flex: 0.1,
    field: 'position',
    maxWidth: 80,
    headerName: 'Pos.',
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }) => {
      return <Avatar sx={{ backgroundColor: 'blue' }}>{row.position}</Avatar>
    }
  },
  {
    flex: 0.1,
    field: 'teamName',
    minWidth: 500,
    headerName: 'Team Name',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    field: 'played',
    headerName: 'Played',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    field: 'won',
    headerName: 'Won',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    field: 'drawn',
    headerName: 'Drawn',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    field: 'lost',
    headerName: 'Lost',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    field: 'goalsScored',
    headerName: 'GF',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    field: 'goalsConceded',
    headerName: 'GA',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    field: 'goalDifference',
    headerName: 'GD',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    field: 'points',
    headerName: 'Pts.',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    field: 'action',
    minWidth: 120,
    headerName: 'Actions',
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }) => {
      return (
        <>
          <Tooltip title='Replace Team'>
            <Button
              size='small'
              color='error'
              variant='outlined'
              sx={{ minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
            >
              <Icon icon='mdi:loop' />
            </Button>
          </Tooltip>
          <Button
            size='small'
            color='info'
            variant='outlined'
            sx={{ ml: 3, minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
          >
            <Icon icon='mdi:edit' />
          </Button>
        </>
      )
    }
  }
]

const LeagueTable = () => {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [tab, setTab] = useState('1')

  const handleChange = (event, newValue) => {
    setTab(newValue)
  }

  const premierLeague = [
    {
      id: 1,
      position: 1,
      teamName: 'Manchester United',
      played: 4,
      won: 2,
      drawn: 1,
      lost: 1,
      goalsScored: 19,
      goalsConceded: 11,
      goalDifference: '+8',
      points: 7
    },
    {
      id: 2,
      position: 2,
      teamName: 'Chelsea',
      played: 3,
      won: 1,
      drawn: 0,
      lost: 2,
      goalsScored: 19,
      goalsConceded: 11,
      goalDifference: '+8',
      points: 3
    },
    {
      id: 3,
      position: 3,
      teamName: 'Arsenal',
      played: 1,
      won: 0,
      drawn: 0,
      lost: 1,
      goalsScored: 0,
      goalsConceded: 11,
      goalDifference: '-11',
      points: 0
    }
  ]

  const Championship = [
    {
      id: 1,
      position: 1,
      teamName: 'Coventry City',
      played: 4,
      won: 2,
      drawn: 1,
      lost: 1,
      goalsScored: 19,
      goalsConceded: 11,
      goalDifference: '+8',
      points: 7
    },
    {
      id: 2,
      position: 2,
      teamName: 'Birmingham City',
      played: 3,
      won: 1,
      drawn: 0,
      lost: 2,
      goalsScored: 19,
      goalsConceded: 11,
      goalDifference: '+8',
      points: 3
    },
    {
      id: 3,
      position: 3,
      teamName: 'Milwall',
      played: 1,
      won: 0,
      drawn: 0,
      lost: 1,
      goalsScored: 0,
      goalsConceded: 11,
      goalDifference: '-11',
      points: 0
    }
  ]

  const Division1 = [
    {
      id: 1,
      position: 1,
      teamName: 'Leyton Orient',
      played: 4,
      won: 2,
      drawn: 1,
      lost: 1,
      goalsScored: 19,
      goalsConceded: 11,
      goalDifference: '+8',
      points: 7
    },
    {
      id: 2,
      position: 2,
      teamName: 'Gillingham',
      played: 3,
      won: 1,
      drawn: 0,
      lost: 2,
      goalsScored: 19,
      goalsConceded: 11,
      goalDifference: '+8',
      points: 3
    },
    {
      id: 3,
      position: 3,
      teamName: 'MK Dons',
      played: 1,
      won: 0,
      drawn: 0,
      lost: 1,
      goalsScored: 0,
      goalsConceded: 11,
      goalDifference: '-11',
      points: 0
    }
  ]

  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label='lab API tabs example'>
              <Tab label='Premier League' value='1' />
              <Tab label='Championship' value='2' />
              <Tab label='Division 1' value='3' />
            </TabList>
          </Box>
          <TabPanel value='1' sx={{ p: 0, mt: 4 }}>
            <Card>
              <CardHeader
                title='Premier League'
                action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Create League']} />}
              />
              <DataGrid
                autoHeight
                rows={premierLeague}
                columns={columns}
                disableRowSelectionOnClick
                hideFooterPagination
              />
            </Card>
          </TabPanel>
          <TabPanel value='2' sx={{ p: 0, mt: 4 }}>
            <Card>
              <CardHeader
                title='Championship'
                action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Create League']} />}
              />
              <DataGrid
                autoHeight
                rows={Championship}
                columns={columns}
                disableRowSelectionOnClick
                hideFooterPagination
              />
            </Card>
          </TabPanel>
          <TabPanel value='3' sx={{ p: 0, mt: 4 }}>
            <Card>
              <CardHeader
                title='Division 1'
                action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Create League']} />}
              />
              <DataGrid autoHeight rows={Division1} columns={columns} disableRowSelectionOnClick hideFooterPagination />
            </Card>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  )
}

export default LeagueTable
