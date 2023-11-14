// ** React Imports
import { useState, useEffect } from 'react'

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
import Tooltip from '@mui/material/Tooltip'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

const ProfilePicture = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: theme.shape.borderRadius,
  border: `5px solid ${theme.palette.common.white}`,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  }
}))

const LeaguePageHeader = () => {
  // ** State
  const [data, setData] = useState(null)
  const designationIcon = data?.designationIcon || 'mdi:briefcase-outline'
  const [SwitcheasonOpen, SetSwitcheasonOpen] = useState(false)
  const handleSwitchSeasonOpen = () => SetSwitcheasonOpen(true)
  const handleSwitchSeasonClose = () => SetSwitcheasonOpen(false)

  const [age, setAge] = useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <>
      <Dialog
        open={SwitcheasonOpen}
        keepMounted
        onClose={handleSwitchSeasonClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
        minWidth={300}
        fullWidth
      >
        <DialogTitle id='alert-dialog-slide-title'>Switch Season</DialogTitle>
        <DialogContent>
          <FormControl sx={{ mt: 5, mb: 5 }} fullWidth>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value='1'>
              <MenuItem value='1' selected>
                Season 22
              </MenuItem>
              <MenuItem value='2'>Season 21</MenuItem>
              <MenuItem value='2'>Season 20</MenuItem>
              <MenuItem value='2'>Season 19</MenuItem>
              <MenuItem value='2'>Season 18</MenuItem>
              <MenuItem value='2'>Season 17</MenuItem>
              <MenuItem value='2'>Season 16</MenuItem>
              <MenuItem value='2'>Season 15</MenuItem>
              <MenuItem value='2'>Season 14</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button variant='outlined' color='error' onClick={handleSwitchSeasonClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Card>
        <CardMedia
          component='img'
          alt='profile-header'
          image='https://activenation.org.uk/wp-content/uploads/2019/10/Outdoor-Sports-Centre-0595-scaled.jpg'
          sx={{
            height: { xs: 150, md: 250 }
          }}
        />
        <CardContent
          sx={{
            pt: 0,
            mt: -8,
            display: 'flex',
            alignItems: 'flex-end',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              ml: { xs: 0, md: 6 },
              mt: { xs: 15 },
              alignItems: 'flex-end',
              flexWrap: ['wrap', 'nowrap'],
              justifyContent: ['center', 'space-between']
            }}
          >
            <Box sx={{ mb: [6, 6], display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'] }}>
              <Typography variant='h5'>Coventry Monday</Typography>
              <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Season 22 - Ends in 19 Days
                <Tooltip title='Switch Season'>
                  <Button
                    size='small'
                    color='success'
                    variant='contained'
                    sx={{ ml: 2, minWidth: 38, p: theme => `${theme.spacing(1.5)} !important` }}
                    onClick={handleSwitchSeasonOpen}
                  >
                    <Icon icon='mdi:swap-horizontal' />
                  </Button>
                </Tooltip>
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: ['center', 'flex-start']
                }}
              ></Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default LeaguePageHeader
