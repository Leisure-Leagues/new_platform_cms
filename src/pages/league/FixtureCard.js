import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
import { Button } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { useState } from 'react'
import { forwardRef } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { TimePicker } from '@mui/x-date-pickers'
import Slide from '@mui/material/Slide'
import { Tooltip } from '@mui/material'
import Grid from '@mui/material/Grid'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { DatePicker } from '@mui/x-date-pickers'

const ExpandMore = styled(props => {
  const { expand, ...other } = props

  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

export default function FixtureCard({ pitch, time }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const [EditSeasonOpen, SetEditSeasonOpen] = useState(false)
  const handleEditSeasonOpen = () => SetEditSeasonOpen(true)
  const handleEditSeasonClose = () => SetEditSeasonOpen(false)

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
  })

  return (
    <>
      <Dialog
        open={EditSeasonOpen}
        keepMounted
        onClose={handleEditSeasonClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
        minWidth={300}
        fullWidth
      >
        <DialogTitle id='alert-dialog-slide-title'>Edit Fixture</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={5} sx={{ textAlign: 'start' }}>
              <Typography display='inline'>
                <Tooltip title='Replace Team'>
                  <Button
                    size='small'
                    color='error'
                    variant='contained'
                    sx={{ mr: 2, minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
                  >
                    <Icon icon='mdi:loop' />
                  </Button>
                </Tooltip>
                Manchester United
              </Typography>
            </Grid>
            <Grid xs={2} sx={{ textAlign: 'center' }}>
              <Typography display='inline' sx={{ fontWeight: '700' }}>
                vs
              </Typography>
            </Grid>
            <Grid item xs={5} sx={{ textAlign: 'end' }}>
              <Typography display='inline'>
                Arsenal
                <Tooltip title='Replace Team'>
                  <Button
                    size='small'
                    color='error'
                    variant='contained'
                    sx={{ ml: 2, minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
                  >
                    <Icon icon='mdi:loop' />
                  </Button>
                </Tooltip>
              </Typography>
            </Grid>
          </Grid>
          <FormControl sx={{ mt: 5, mb: 5 }} fullWidth>
            <InputLabel id='demo-simple-select-label'>Pitch 1</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Preferred Division'>
              <MenuItem value='1'>Pitch 1</MenuItem>
              <MenuItem value='2'>Pitch 2</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <DatePicker label='13th October 2023' sx={{ width: '45%' }} />
            <TimePicker label='19:00' sx={{ width: '45%' }} />
          </FormControl>
          <FormControl sx={{ mt: 5, mb: 5 }} fullWidth>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value='1'>
              <MenuItem value='1' selected>
                Howard Webb
              </MenuItem>
              <MenuItem value='2'>Mike Dean</MenuItem>
              <MenuItem value='3'>Anthony Taylor</MenuItem>
              <MenuItem value='4'>Michael Oliver</MenuItem>
              <MenuItem value='5'>Craig Pawson</MenuItem>
              <MenuItem value='6'>Paul Tierney</MenuItem>
              <MenuItem value='7'>Darren England</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 3 }}>
            <FormControlLabel control={<Checkbox defaultChecked={true} />} label='Manchester United Paid?' />
            <FormControlLabel control={<Checkbox />} label='Arsenal Paid?' />
          </FormControl>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button color='success' variant='contained' onClick={handleEditSeasonClose}>
            Save Changes
          </Button>
          <Button variant='outlined' color='error' onClick={handleEditSeasonClose}>
            Discard
          </Button>
        </DialogActions>
      </Dialog>

      <Card onClick={handleExpandClick}>
        <CardHeader title={pitch + ' - ' + time} action={<Icon icon='mdi:warning' />} />
        <CardContent>Manchester United vs Arsenal</CardContent>

        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography sx={{ display: 'flex', alignContent: 'center' }}>
              <Icon icon='mdi:check' />
              <span>Referee Assigned</span>
            </Typography>
            <Typography sx={{ display: 'flex', alignContent: 'center', mt: 3 }}>
              <Icon icon='mdi:check' />
              <span>Score Submitted</span>
            </Typography>
            <Typography sx={{ display: 'flex', alignContent: 'center', mt: 3 }}>
              <Icon icon='mdi:check' />
              <span>Manchester United Paid</span>
            </Typography>
            <Typography sx={{ display: 'flex', alignContent: 'center', mt: 3 }}>
              <Icon icon='mdi:warning' />
              <span>Arsenal Outstanding balance: £35.00</span>
            </Typography>
            <Button
              size='small'
              color='warning'
              variant='contained'
              sx={{ marginTop: 5, marginRight: 5, minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
              onClick={handleEditSeasonOpen}
            >
              Edit Fixture
            </Button>
            <Button
              size='small'
              color='error'
              variant='contained'
              sx={{ marginTop: 5, minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
            >
              Cancel Fixture
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    </>
  )
}
