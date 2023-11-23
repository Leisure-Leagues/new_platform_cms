// ** React Imports
import { forwardRef, useState, useEffect } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { DataGrid } from '@mui/x-data-grid'
import Avatar from '@mui/material/Avatar'
import { Tooltip } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
import OptionsMenu from 'src/@core/components/option-menu'
import { Grid } from '@mui/material'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import DialogContentText from '@mui/material/DialogContentText'

import Divider from '@mui/material/Divider'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const LeaguePageAwaiting = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [AddToTeamOpen, setAddToTeamOpen] = useState(false)
  const handleAddToTeamOpen = () => setAddToTeamOpen(true)
  const handleAddToTeamClose = () => setAddToTeamOpen(false)

  const columns = [
    {
      flex: 0.1,
      field: 'type',
      minWidth: 100,
      headerName: 'Type',
      headerAlign: 'center',
      align: 'center'
    },
    {
      flex: 0.1,
      field: 'name',
      minWidth: 200,
      headerName: 'Name',
      headerAlign: 'center',
      align: 'center'
    },
    {
      flex: 0.1,
      minWidth: 400,
      field: 'comments',
      headerName: 'Comments',
      headerAlign: 'center',
      align: 'center'
    },
    {
      flex: 0.1,
      minWidth: 300,
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <>
            <Tooltip title='View all Details'>
              <Button
                size='small'
                color='info'
                variant='contained'
                sx={{ mr: 2, minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
                onClick={handleClickOpen}
              >
                <Icon icon='mdi:visibility' />
              </Button>
            </Tooltip>
            <Tooltip title='Add Player to Team'>
              <Button
                size='small'
                color='success'
                variant='contained'
                sx={{ mr: 2, minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
                onClick={handleAddToTeamOpen}
              >
                <Icon icon='mdi:person-add' />
              </Button>
            </Tooltip>
            <Tooltip title='Remove Player'>
              <Button
                size='small'
                color='error'
                variant='contained'
                sx={{ minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
              >
                <Icon icon='mdi:delete' />
              </Button>
            </Tooltip>
          </>
        )
      }
    }
  ]

  const premierLeague = [
    {
      id: 1,
      type: 'Player',
      name: 'Joe Bloggs',
      comments: 'I can play in any position but I prefer playing in goal. '
    },
    {
      id: 2,
      type: 'Team',
      name: 'Aston Villa',
      comments: 'Full team looking to get back into local football leagues'
    },
    {
      id: 3,
      type: 'Player',
      name: 'John Jones',
      comments: 'I havent played in a long time and I am looking to get back into football.'
    }
  ]

  return (
    <>
      <Dialog open={open} keepMounted onClose={handleClose} TransitionComponent={Transition}>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            <Typography variant='h6'>Joe Bloggs</Typography>
            <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
            <Box sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Joined on: </Typography>
                <Typography variant='body2'>10/10/2023</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Name</Typography>
                <Typography variant='body2'>Joe Bloggs</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Email:</Typography>
                <Typography variant='body2'>joebloggs@email.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Address:</Typography>
                <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
                  123 Random Street, Coventry, West Midlands, CV12 123
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Status:</Typography>
                <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
                  Awaiting Team
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Contact:</Typography>
                <Typography variant='body2'>01234 567 891</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Language:</Typography>
                <Typography variant='body2'>English</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Country:</Typography>
                <Typography variant='body2'>United Kingdom</Typography>
              </Box>
            </Box>
            <Typography variant='h6' sx={{ mt: 5 }}>
              Notes
            </Typography>
            <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
            <Box sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography variant='body2'>I can play in any position but I would like to play in goal</Typography>
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={AddToTeamOpen}
        keepMounted
        onClose={handleAddToTeamClose}
        TransitionComponent={Transition}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
        minWidth={300}
        fullWidth
      >
        <DialogTitle id='alert-dialog-slide-title'>Assign Joe Bloggs to Team</DialogTitle>
        <DialogContent>
          <FormControl sx={{ mt: 5 }} fullWidth>
            <InputLabel id='demo-simple-select-label'>Choose Team</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Choose Team'>
              <MenuItem disabled sx={{ fontWeight: 700, color: 'red' }}>
                Premier League
              </MenuItem>
              <MenuItem value='1'>Manchester United</MenuItem>
              <MenuItem value='2'>Arsenal</MenuItem>
              <MenuItem value='3'>Chelsea</MenuItem>
              <Divider />
              <MenuItem disabled sx={{ fontWeight: 700, color: 'red' }}>
                Championship
              </MenuItem>
              <MenuItem value='1'>Coventry City</MenuItem>
              <MenuItem value='2'>Milwall</MenuItem>
              <MenuItem value='3'>Birmingham City</MenuItem>
              <Divider />
              <MenuItem disabled sx={{ fontWeight: 700, color: 'red' }}>
                Division 1
              </MenuItem>
              <MenuItem value='1'>Leyton Orient</MenuItem>
              <MenuItem value='2'>Gillingham</MenuItem>
              <MenuItem value='3'>MK Dons</MenuItem>
              <Divider />
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button color='success' variant='contained' onClick={handleAddToTeamClose}>
            Add to Team
          </Button>
          <Button variant='outlined' color='error' onClick={handleAddToTeamClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Grid>
        <Grid item xs={12}>
          <Card sx={{ pb: 7 }}>
            <CardHeader title='Waiting List' />
            <CardContent>
              <DataGrid
                autoHeight
                rows={premierLeague}
                columns={columns}
                disableRowSelectionOnClick
                hideFooterPagination
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default LeaguePageAwaiting
