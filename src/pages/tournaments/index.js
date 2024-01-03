import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import Icon from 'src/@core/components/icon'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import { useState, useCallback, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/router'

const ListTournaments = () => {
  const router = useRouter()
  useEffect(() => {
    getUsers()
  }, [])

  const [value, setValue] = useState('')
  const [userData, setUserData] = useState('')

  const viewUser = params => {
    router.push(`/tournaments/${params.row.id}`)
  }

  async function getUsers() {
    const response = await fetch('https://dummyjson.com/users?skip=5&limit=50')
    const data = await response.json()
    setUserData(data)
  }

  const handleFilter = useCallback(val => {
    setValue(val)
  }, [])

  const statsHorizontal = [
    {
      stats: 25,
      title: 'Total Tournaments',
      icon: 'mdi:stadium'
    },
    {
      stats: 7,
      title: 'Active Tournaments',
      icon: 'mdi:whistle'
    },
    {
      stats: '192',
      title: 'Starting in next 7 days',
      icon: 'mdi:warning'
    }
  ]

  const columns = [
    {
      field: 'id',
      headerName: 'Venue ID',
      width: 100,
      editable: true,
      align: 'center'
    },
    {
      field: 'tournamentName',
      headerName: 'Name',
      headerAlign: 'center',
      width: 800,
      editable: true,
      align: 'center'
    },
    {
      field: 'tournamentLocation',
      headerName: 'Location',
      headerAlign: 'center',
      align: 'center',
      width: 200,
      editable: true
    },
    {
      field: 'tournamentDates',
      headerName: 'Dates',
      headerAlign: 'center',
      align: 'center',
      width: 400,
      editable: true
    }
  ]

  const tournaments = [
    {
      id: 1,
      tournamentName: 'Copa Americas',
      tournamentLocation: 'Cancun, Mexico',
      tournamentDates: '15th February - 21st February'
    },
    {
      id: 2,
      tournamentName: ' America’s Club Tournament',
      tournamentLocation: 'Cancun, Mexico',
      tournamentDates: '21st February - 23rd February'
    },
    {
      id: 3,
      tournamentName: 'Socca Business Cup',
      tournamentLocation: 'Cancun, Mexico',
      tournamentDates: '23rd February - 28th February'
    }
  ]

  const rows = []

  if (userData !== '') {
    tournaments.forEach(tournament => {
      const data = {
        id: tournament.id,
        tournamentName: tournament.tournamentName,
        tournamentLocation: tournament.tournamentLocation,
        tournamentDates: tournament.tournamentDates
      }

      rows.push(data)
    })
  }

  return (
    <Grid container alignItems='stretch' spacing={6}>
      {statsHorizontal.map((item, index) => (
        <Grid item xs={12} md={4} sm={6} key={index}>
          <CardStatisticsHorizontal {...item} icon={<Icon icon={item.icon} />} />
        </Grid>
      ))}

      <Grid item alignItems='stretch' xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={12} xs={12}>
                <FormControl fullWidth>
                  <TextField
                    size='large'
                    value={value}
                    sx={{ mr: 4, mb: 2 }}
                    placeholder='Search Tournaments'
                    onChange={e => handleFilter(e.target.value)}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>

          <DataGrid
            autoHeight
            hideFooterPagination
            rows={rows}
            columns={columns}
            onRowClick={viewUser}
            pageSizeOptions={[10, 25, 50]}
            getRowClassName={params => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default ListTournaments
