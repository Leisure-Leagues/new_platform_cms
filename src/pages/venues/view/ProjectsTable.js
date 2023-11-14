// ** React Imports
import { useState, forwardRef } from 'react'
import { useRouter } from 'next/router'

// ** MUI Components
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import CustomChip from 'src/@core/components/mui/chip'
import { Button } from '@mui/material'
import Icon from 'src/@core/components/icon'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControl from '@mui/material/FormControl'
import { TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { Divider } from '@mui/material'
import Slide from '@mui/material/Slide'
import { Grid } from '@mui/material'
import { redirect } from 'next/navigation'

const columns = [
  {
    flex: 0.1,
    field: 'name',
    minWidth: 270,
    headerName: 'League Name',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    field: 'waiting_list',
    headerName: 'Waiting List',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    field: 'teams',
    headerName: 'Active Teams',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    minWidth: 50,
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }) => {
      return (
        <CustomChip skin='light' size='small' label={row.text} color={row.color} sx={{ textTransform: 'capitalize' }} />
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 100,
    field: 'fees',
    headerName: 'Team Weekly Fee',
    headerAlign: 'center',
    align: 'center'
  },
  {
    flex: 0.1,
    minWidth: 100,
    field: 'centerFee',
    headerName: 'Center Fee',
    headerAlign: 'center',
    align: 'center'
  }
]

const ProfileTable = () => {
  const router = useRouter()
  // ** State
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [AddPitchOpen, setAddPitchOpen] = useState(false)
  const handlePitchOpen = () => {
    handleClose()
    setAddPitchOpen(true)
  }
  const handlePitchClose = () => setAddPitchOpen(false)

  const handleFilter = val => {
    setValue(val)
  }

  const rows = [
    {
      id: 1,
      name: 'Monday 19:00 - 21:00',
      waiting_list: 5,
      teams: 11,
      status: true,
      text: 'Active',
      color: 'success',
      fees: '£25.00',
      centerFee: '£30.00'
    },
    {
      id: 2,
      name: 'Tuesday 18:00 - 20:00',
      waiting_list: 2,
      teams: 8,
      status: false,
      text: 'Inactive',
      color: 'error',
      fees: '£25.00',
      centerFee: '£25.00'
    }
  ]
  const handleRowClick = action => {
    if (action) {
      router.push('/league/7')
    }
  }
  return (
    <>
      <Dialog
        open={AddPitchOpen}
        onClose={handlePitchClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
        minWidth={300}
        fullWidth
      >
        <DialogTitle id='alert-dialog-slide-title'>Create New League - Coventry Sports Center</DialogTitle>
        <DialogContent>
          <FormControl sx={{ mt: 5 }} fullWidth>
            <InputLabel id='demo-simple-select-label'>Day</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Choose Team'>
              <MenuItem value='1'>Monday</MenuItem>
              <MenuItem value='2'>Tuesday</MenuItem>
              <MenuItem value='3'>Wednesday</MenuItem>
              <MenuItem value='4'>Thursday</MenuItem>
              <MenuItem value='5'>Friday</MenuItem>
              <MenuItem value='6'>Saturday</MenuItem>
              <MenuItem value='7'>Sunday</MenuItem>
              <Divider />
            </Select>
          </FormControl>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <FormControl sx={{ mt: 5 }} fullWidth>
                <TextField type='text' label='Weekly Center Cost' />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ mt: 5 }} fullWidth>
                <TextField type='text' label='Weekly Match Fee' />
              </FormControl>
            </Grid>
          </Grid>

          <FormControl sx={{ mt: 5 }} fullWidth>
            <InputLabel id='demo-simple-select-label'>Preferred Division</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Preferred Division'>
              <MenuItem value='1'>Premier League</MenuItem>
              <MenuItem value='2'>Championship</MenuItem>
              <MenuItem value='3'>Division 1</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button color='success' variant='contained' onClick={handlePitchClose}>
            Add Pitch
          </Button>
          <Button variant='outlined' color='error' onClick={handlePitchClose}>
            Discard
          </Button>
        </DialogActions>
      </Dialog>

      <Card>
        <CardHeader
          title='Leagues'
          action={
            <>
              <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Icon icon='mdi:more-vert' />
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
              >
                <MenuItem onClick={handlePitchOpen}>Create League</MenuItem>
              </Menu>
            </>
          }
        />
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          onRowClick={() => handleRowClick('7')}
          disableRowSelectionOnClick
          hideFooterPagination
        />
      </Card>
    </>
  )
}

export default ProfileTable
