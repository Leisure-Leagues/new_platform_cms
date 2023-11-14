import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import Icon from 'src/@core/components/icon'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { useState, useCallback, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import { DataGrid, gridClasses } from '@mui/x-data-grid'
import CustomChip from 'src/@core/components/mui/chip'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/router'
import { alpha, styled } from '@mui/material/styles'

const Users = () => {
  const router = useRouter()
  useEffect(() => {
    getUsers()
  }, [])

  const [role, setRole] = useState('')
  const [plan, setPlan] = useState('')
  const [value, setValue] = useState('')
  const [userData, setUserData] = useState('')

  const viewUser = params => {
    router.push(`/venues/view/${params.row.id}`)
  }

  async function getUsers() {
    const response = await fetch('https://dummyjson.com/users?skip=5&limit=50')
    const data = await response.json()
    setUserData(data)
  }

  const handleRoleChange = useCallback(e => {
    setRole(e.target.value)
  }, [])

  const handlePlanChange = useCallback(e => {
    setPlan(e.target.value)
  }, [])

  const handleStatusChange = useCallback(e => {
    setStatus(e.target.value)
  }, [])

  const handleFilter = useCallback(val => {
    setValue(val)
    console.log(val)
  }, [])

  const statsHorizontal = [
    {
      stats: 53,
      title: 'Venues',
      icon: 'mdi:stadium'
    },
    {
      stats: 7,
      title: 'Seasons ending in next 7 days',
      icon: 'mdi:warning'
    },
    {
      stats: '192',
      title: 'New Users Last 7 Days',
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
      field: 'venueName',
      headerName: 'Venue Name',
      headerAlign: 'center',
      width: 1000,
      editable: true,
      align: 'center'
    },
    {
      field: 'venueFranchise',
      headerName: 'Franchise',
      headerAlign: 'center',
      align: 'center',
      width: 200,
      editable: true
    }
  ]

  const venues = [
    {
      id: 1,
      name: "1 LIFE ST CRISPIN'S LEISURE CENTRE, Wokingham",
      franchise: 'Head Office'
    },
    {
      id: 2,
      name: '1610 Dorchester Sports Centre, Dorchester ',
      franchise: 'Head Office'
    },
    {
      id: 3,
      name: '5 Alive, Bradford, ',
      franchise: 'Head Office'
    },
    {
      id: 4,
      name: "	5's Pavilion & Sports Ground, Cannock",
      franchise: 'Head Office'
    },
    {
      id: 5,
      name: '5core Bicester, Bicester',
      franchise: 'Head Office'
    },
    {
      id: 6,
      name: 'Abbey Leisure Complex, Cambridge',
      franchise: 'Head Office'
    },
    {
      id: 7,
      name: 'Coventry Sports Center, Coventry',
      franchise: 'Head Office'
    }
  ]

  const rows = []

  if (userData !== '') {
    venues.forEach(venue => {
      const data = {
        id: venue.id,
        venueName: venue.name,
        venueFranchise: venue.franchise
      }

      rows.push(data)
    })
  }

  return (
    <Grid container spacing={6}>
      {statsHorizontal.map((item, index) => (
        <Grid item xs={12} md={4} sm={6} key={index}>
          <CardStatisticsHorizontal {...item} icon={<Icon icon={item.icon} />} />
        </Grid>
      ))}

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Search Filters' />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={12} xs={12}>
                <FormControl fullWidth>
                  <TextField
                    size='large'
                    value={value}
                    sx={{ mr: 4, mb: 2 }}
                    placeholder='Search Venue'
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

export default Users
