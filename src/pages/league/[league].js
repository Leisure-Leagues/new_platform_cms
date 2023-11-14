import { useRouter } from 'next/router'
import LeaguePageHeader from './LeaguePageHeader'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import Icon from 'src/@core/components/icon'
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import { CardHeader, TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Divider } from '@mui/material'
import Link from 'next/link'
import LeagueTable from './LeagueTable'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Accordion from '@mui/material/Accordion'
import LeaguePageAwaiting from './LeaguePageAwaiting'
import { useState, forwardRef } from 'react'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import DialogContentText from '@mui/material/DialogContentText'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { TimePicker } from '@mui/x-date-pickers'
import FixtureCard from './FixtureCard'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const rows = [
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

const LeaguePage = () => {
  const [AddPitchOpen, setAddPitchOpen] = useState(false)
  const handlePitchOpen = () => setAddPitchOpen(true)
  const handlePitchClose = () => setAddPitchOpen(false)
  const router = useRouter()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Dialog
        open={AddPitchOpen}
        keepMounted
        onClose={handlePitchClose}
        TransitionComponent={Transition}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
        minWidth={300}
        fullWidth
      >
        <DialogTitle id='alert-dialog-slide-title'>Add Pitch</DialogTitle>
        <DialogContent>
          <FormControl sx={{ mt: 5 }} fullWidth>
            <TextField type='text' label='Pitch Name' />
          </FormControl>
          <FormControl sx={{ mt: 5 }} fullWidth>
            <InputLabel id='demo-simple-select-label'>Pitch Type</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Choose Team'>
              <MenuItem value='1'>3G</MenuItem>
              <MenuItem value='2'>4G</MenuItem>
              <MenuItem value='3'>5G</MenuItem>
              <MenuItem value='4'>Astro (Water)</MenuItem>
              <MenuItem value='5'>Astro (Sand)</MenuItem>
              <MenuItem value='6'>Indoor</MenuItem>
              <MenuItem value='7'>Grass</MenuItem>
              <Divider />
            </Select>
          </FormControl>
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'space-between' }}>
            <TimePicker label='Start Time' sx={{ width: 260 }} />
            <TimePicker label='End Time' sx={{ width: 260 }} />
          </div>
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
      <Grid container spacing={6}>
        <Grid item xs={12} md={4} sx={{ mb: { xs: 6 } }}>
          <LeaguePageHeader />
        </Grid>
        <Grid item xs={12} md={8} sx={{ mb: { xs: 6 } }}>
          <LeaguePageAwaiting />
        </Grid>
        <Grid item xs={12}>
          <LeagueTable />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title='Fixtures'
              action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Generate Fixtures']} />}
            />
            <CardContent>
              <Accordion>
                <AccordionSummary
                  expandIcon={<Icon icon='mdi:plus' />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  sx={{ backgroundColor: 'red' }}
                >
                  <Typography display='inline'>13th October 2023 </Typography>
                  <Typography display='inline' sx={{ color: 'black', fontWeight: 700, ml: 5 }}>
                    Not Published
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: 'action.hover' }}>
                  <Box sx={{ borderRadius: 1, backgroundColor: 'action.hover', '&:not(:last-child)': { mb: 10 } }}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650, backgroundColor: 'action.hover' }} aria-label='simple table'>
                        <TableHead>
                          <TableRow>
                            <TableCell align='center'>Fixtures</TableCell>
                            <TableCell align='center'>Cost per Team</TableCell>
                            <TableCell align='center'>Cash Paid</TableCell>
                            <TableCell align='center'>Kitty Total</TableCell>
                            <TableCell align='center'>Online Payments</TableCell>
                            <TableCell align='center'>Referee Expenses</TableCell>
                            <TableCell align='center'>Banked Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell component='th' scope='row' align='center'>
                              12
                            </TableCell>
                            <TableCell align='center'>£32.00</TableCell>
                            <TableCell align='center'>£0.00</TableCell>
                            <TableCell align='center'>£0.00</TableCell>
                            <TableCell align='center'>£350.00</TableCell>
                            <TableCell align='center'>£150.00</TableCell>
                            <TableCell align='center'>£0.00</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                  <Grid container spacing={6}>
                    <Grid item xs={12} md={4} lg={3}>
                      <FixtureCard pitch='Pitch 1' time='19:00' />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <FixtureCard pitch='Pitch 2' time='19:00' />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <FixtureCard pitch='Pitch 1' time='19:30' />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <FixtureCard pitch='Pitch 2' time='19:30' />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </CardContent>
            <CardContent>
              <Accordion>
                <AccordionSummary
                  expandIcon={<Icon icon='mdi:plus' />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  sx={{ backgroundColor: 'orange' }}
                >
                  <Typography display='inline'>13th October 2023 </Typography>
                  <Typography display='inline' sx={{ color: 'black', fontWeight: 700, ml: 5 }}>
                    Published
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: 'action.hover' }}>
                  <Box sx={{ borderRadius: 1, backgroundColor: 'action.hover', '&:not(:last-child)': { mb: 10 } }}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650, backgroundColor: 'action.hover' }} aria-label='simple table'>
                        <TableHead>
                          <TableRow>
                            <TableCell align='center'>Fixtures</TableCell>
                            <TableCell align='center'>Cost per Team</TableCell>
                            <TableCell align='center'>Cash Paid</TableCell>
                            <TableCell align='center'>Kitty Total</TableCell>
                            <TableCell align='center'>Online Payments</TableCell>
                            <TableCell align='center'>Referee Expenses</TableCell>
                            <TableCell align='center'>Banked Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell component='th' scope='row' align='center'>
                              12
                            </TableCell>
                            <TableCell align='center'>£32.00</TableCell>
                            <TableCell align='center'>£0.00</TableCell>
                            <TableCell align='center'>£0.00</TableCell>
                            <TableCell align='center'>£350.00</TableCell>
                            <TableCell align='center'>£150.00</TableCell>
                            <TableCell align='center'>£0.00</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                  <Grid container spacing={6}>
                    <Grid item xs={12} md={4} lg={3}>
                      <FixtureCard pitch='Pitch 1' time='19:00' />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <FixtureCard pitch='Pitch 2' time='19:00' />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <FixtureCard pitch='Pitch 1' time='19:30' />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <FixtureCard pitch='Pitch 2' time='19:30' />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </CardContent>
            <CardContent>
              <Accordion>
                <AccordionSummary
                  expandIcon={<Icon icon='mdi:plus' />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  sx={{ backgroundColor: '#62c236' }}
                >
                  <Icon icon='mdi:lock' />
                  <Typography>5th October 2023</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ mt: 2 }}>
                  <Card>
                    <CardContent></CardContent>
                  </Card>
                </AccordionDetails>
              </Accordion>
            </CardContent>
            <CardContent>
              <Accordion>
                <AccordionSummary
                  expandIcon={<Icon icon='mdi:plus' />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  sx={{ backgroundColor: '#62c236' }}
                >
                  <Icon icon='mdi:lock' />
                  <Typography>29th September 2023</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ mt: 2 }}>
                  <Card>
                    <CardContent></CardContent>
                  </Card>
                </AccordionDetails>
              </Accordion>
            </CardContent>
            <CardContent>
              <Accordion>
                <AccordionSummary
                  expandIcon={<Icon icon='mdi:plus' />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  sx={{ backgroundColor: '#62c236' }}
                >
                  {' '}
                  <Icon icon='mdi:lock' />
                  <Typography>22nd September 2023</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ mt: 2 }}>
                  <Card>
                    <CardContent></CardContent>
                  </Card>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} flex>
          <Card>
            <CardHeader title='Current Season' />
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  '&:not(:last-of-type)': { mb: 4 }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: '#58ab2b' }}>22</Avatar>
                  <div>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, marginLeft: '20px' }}>
                      Season 22 - 19 Days remaining
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 400, marginLeft: '20px' }}>
                      29th September 2023 - 31st October 2023
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 400, marginLeft: '20px' }}></Typography>
                  </div>
                </Box>
              </Box>

              <Box
                sx={{
                  pt: 3,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'end'
                }}
              >
                <Button
                  size='small'
                  color='info'
                  variant='contained'
                  sx={{ minWidth: 38, p: theme => `${theme.spacing(1.5)} !important`, marginRight: 5 }}
                >
                  Create New Season
                </Button>
                <Button
                  size='small'
                  color='error'
                  variant='contained'
                  sx={{ minWidth: 38, p: theme => `${theme.spacing(1.5)} !important`, marginRight: 5 }}
                >
                  Edit Season Dates
                </Button>
                <Button
                  size='small'
                  color='error'
                  variant='contained'
                  sx={{ minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
                >
                  End Season
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title='Pitches'
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
                    <MenuItem onClick={handlePitchOpen}>Add Pitch</MenuItem>
                  </Menu>
                </>
              }
            />

            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  '&:not(:last-of-type)': { mb: 4 }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: '#58ab2b' }}>P1</Avatar>
                  <div>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, marginLeft: '20px' }}>Pitch 1</Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 400, marginLeft: '20px' }}>
                      Available from 18:00 - 20:00
                    </Typography>
                  </div>
                </Box>
                <Button
                  size='small'
                  color='info'
                  variant='outlined'
                  sx={{ minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
                >
                  <Icon icon='mdi:edit' />
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  '&:not(:last-of-type)': { mb: 4 }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: '#58ab2b' }}>P2</Avatar>
                  <div>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, marginLeft: '20px' }}>Pitch 2</Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 400, marginLeft: '20px' }}>
                      Available from 18:00 - 20:00
                    </Typography>
                  </div>
                </Box>
                <Button
                  size='small'
                  color='info'
                  variant='outlined'
                  sx={{ minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
                >
                  <Icon icon='mdi:edit' />
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default LeaguePage
