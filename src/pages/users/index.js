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
import { DataGrid } from '@mui/x-data-grid'
import CustomChip from 'src/@core/components/mui/chip'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/router'

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
    router.push(`/users/view/${params.row.id}`)
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
  }, [])

  const statsHorizontal = [
    {
      stats: 53,
      title: 'User Count',
      icon: 'mdi:account-outline'
    },
    {
      stats: '21',
      title: 'New users Today',
      icon: 'mdi:account-multiple-plus'
    },
    {
      stats: '192',
      title: 'New Users Last 7 Days',
      icon: 'mdi:trending-up'
    },
    {
      stats: '2,856',
      icon: 'mdi:poll',
      title: 'New users Last 30 Days'
    }
  ]

  const columns = [
    {
      field: 'id',
      headerName: 'User ID',
      width: 100,
      editable: true
    },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 250,
      editable: true
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 250,
      editable: true
    },
    {
      field: 'email',
      headerName: 'Email Address',
      width: 300,
      editable: true
    },
    {
      field: 'teamName',
      headerName: 'Team',
      width: 300,
      editable: true
    },
    {
      width: 100,
      field: 'status',
      headerName: 'Status',
      renderCell: ({ row }) => {
        return (
          <CustomChip
            skin='light'
            size='small'
            label={row.status}
            color={row.chip}
            sx={{ textTransform: 'capitalize' }}
          />
        )
      }
    }
  ]

  const rows = []

  if (userData !== '') {
    userData.users.forEach(user => {
      const data = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        teamName: user.university,
        email: user.email,
        status: 'Active',
        chip: 'success'
      }

      rows.push(data)
    })
  }

  return (
    <Grid container spacing={6}>
      {statsHorizontal.map((item, index) => (
        <Grid item xs={12} md={3} sm={6} key={index}>
          <CardStatisticsHorizontal {...item} icon={<Icon icon={item.icon} />} />
        </Grid>
      ))}

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Search Filters' />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth>
                  <TextField
                    size='large'
                    value={value}
                    sx={{ mr: 4, mb: 2 }}
                    placeholder='Search User'
                    onChange={e => handleFilter(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='plan-select'>Filter by Status</InputLabel>
                  <Select
                    fullWidth
                    value={plan}
                    id='select-plan'
                    label='Select Plan'
                    labelId='plan-select'
                    onChange={handlePlanChange}
                    inputProps={{ placeholder: 'Select Plan' }}
                  >
                    <MenuItem value=''>Select Status</MenuItem>
                    <MenuItem value='basic'>Active</MenuItem>
                    <MenuItem value='company'>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>

          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            onRowClick={viewUser}
            pageSizeOptions={[10, 25, 50]}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Users
