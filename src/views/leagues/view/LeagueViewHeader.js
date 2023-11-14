// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import InputAdornment from '@mui/material/InputAdornment'
import LinearProgress from '@mui/material/LinearProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

const data = {
  id: 1,
  role: 'admin',
  status: 'active',
  username: 'gslixby0',
  avatarColor: 'primary',
  country: 'El Salvador',
  company: 'Yotz PVT LTD',
  contact: '(479) 232-9151',
  currentPlan: 'enterprise',
  fullName: 'Daisy Patterson',
  email: 'gslixby0@abc.net.au',
  avatar: '/images/avatars/4.png'
}

const roleColors = {
  admin: 'error',
  editor: 'info',
  author: 'warning',
  maintainer: 'success',
  subscriber: 'primary'
}

// ** Styled <sup> component
const Sup = styled('sup')(({ theme }) => ({
  top: '0.2rem',
  left: '-0.6rem',
  position: 'absolute',
  color: theme.palette.primary.main
}))

// ** Styled <sub> component
const Sub = styled('sub')({
  fontWeight: 300,
  fontSize: '1rem',
  alignSelf: 'flex-end'
})

const UserViewLeft = ({ venue }) => {
  console.log(venue)
  // ** States
  const [openEdit, setOpenEdit] = useState(false)
  const [openPlans, setOpenPlans] = useState(false)
  const [suspendDialogOpen, setSuspendDialogOpen] = useState(false)
  const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false)

  // Handle Edit dialog
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  // Handle Upgrade Plan dialog
  const handlePlansClickOpen = () => setOpenPlans(true)
  const handlePlansClose = () => setOpenPlans(false)
  if (venue) {
    console.log(venue)
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardContent sx={{ pt: 15, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              {data.avatar ? (
                <CustomAvatar
                  src={venue.image}
                  variant='rounded'
                  alt={venue.venueName}
                  sx={{ width: 120, height: 120, fontWeight: 600, mb: 4 }}
                />
              ) : (
                <CustomAvatar
                  skin='light'
                  variant='rounded'
                  color={data.avatarColor}
                  sx={{ width: 120, height: 120, fontWeight: 600, mb: 4, fontSize: '3rem' }}
                >
                  {getInitials(data.fullName)}
                </CustomAvatar>
              )}
              <Typography variant='h6' sx={{ mb: 4 }}>
                {venue.firstName} {venue.lastName}
              </Typography>
              <CustomChip
                skin='light'
                size='small'
                label='Team Captain'
                color='info'
                sx={{ textTransform: 'capitalize' }}
              />
            </CardContent>

            <CardContent sx={{ my: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ mr: 8, display: 'flex', alignItems: 'center' }}>
                  <CustomAvatar skin='light' variant='rounded' sx={{ mr: 4, width: 44, height: 44 }}>
                    <Icon icon='mdi:check' />
                  </CustomAvatar>
                  <div>
                    <Typography variant='h6'>League</Typography>
                    <Typography variant='body2'>Warwick University</Typography>
                  </div>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CustomAvatar skin='light' variant='rounded' sx={{ mr: 4, width: 44, height: 44 }}>
                    <Icon icon='mdi:star-outline' />
                  </CustomAvatar>
                  <div>
                    <Typography variant='h6'>Team</Typography>
                    <Typography variant='body2'>Warwick United</Typography>
                  </div>
                </Box>
              </Box>
            </CardContent>

            <CardContent>
              <Typography variant='h6'>Details</Typography>
              <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
              <Box sx={{ pb: 1 }}>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Username:</Typography>
                  <Typography variant='body2'>{venue.username}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Email:</Typography>
                  <Typography variant='body2'>{venue.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Address:</Typography>
                  <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
                    {venue.address}, {venue.address}, {venue.address}, {venue.address}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Account Status:</Typography>
                  <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
                    Active
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Contact:</Typography>
                  <Typography variant='body2'>{venue.phone}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Language:</Typography>
                  <Typography variant='body2'>English</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Country:</Typography>
                  <Typography variant='body2'>{data.country}</Typography>
                </Box>
              </Box>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditClickOpen}>
                Edit
              </Button>
              <Button color='error' variant='outlined' onClick={() => setSuspendDialogOpen(true)}>
                Suspend
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ boxShadow: 'none', border: theme => `2px solid ${theme.palette.primary.main}` }}>
            <CardContent
              sx={{ display: 'flex', flexWrap: 'wrap', pb: '0 !important', justifyContent: 'space-between' }}
            >
              <CustomChip skin='light' size='small' color='primary' label='Standard' />
              <Box sx={{ display: 'flex', position: 'relative' }}>
                <Typography variant='h6' sx={{ color: 'primary.main', alignSelf: 'flex-end' }}>
                  $
                </Typography>
                <Typography
                  variant='h3'
                  sx={{
                    color: 'primary.main'
                  }}
                >
                  99
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.primary', alignSelf: 'flex-end' }}>
                  / month
                </Typography>
              </Box>
            </CardContent>

            <CardContent>
              <Box sx={{ mt: 6, mb: 5 }}>
                <Box sx={{ display: 'flex', mb: 3.5, alignItems: 'center', '& svg': { mr: 2, color: 'grey.300' } }}>
                  <Icon icon='mdi:circle' fontSize='0.5rem' />
                  <Typography variant='body2'>10 Users</Typography>
                </Box>
                <Box
                  sx={{
                    mb: 3.5,
                    display: 'flex',
                    alignItems: 'center',
                    '& svg': { mr: 2, color: 'grey.300' }
                  }}
                >
                  <Icon icon='mdi:circle' fontSize='0.5rem' />
                  <Typography variant='body2'>Up to 10GB storage</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& svg': { mr: 2, color: 'grey.300' }
                  }}
                >
                  <Icon icon='mdi:circle' fontSize='0.5rem' />
                  <Typography variant='body2'>Basic Support</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', mb: 1.5, justifyContent: 'space-between' }}>
                <Typography variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                  Days
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                  26 of 30 Days
                </Typography>
              </Box>
              <LinearProgress value={86.66} variant='determinate' sx={{ height: 6, borderRadius: '5px' }} />
              <Typography variant='caption' sx={{ mt: 1.5, mb: 6, display: 'block' }}>
                4 days remaining
              </Typography>
              <Button variant='contained' sx={{ width: '100%' }} onClick={handlePlansClickOpen}>
                Upgrade Plan
              </Button>
            </CardContent>

            <Dialog
              open={openPlans}
              onClose={handlePlansClose}
              aria-labelledby='user-view-plans'
              aria-describedby='user-view-plans-description'
              sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
            >
              <DialogTitle
                id='user-view-plans'
                sx={{
                  textAlign: 'center',
                  fontSize: '1.5rem !important',
                  px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                  pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                }}
              >
                Upgrade Plan
              </DialogTitle>

              <DialogContent
                sx={{ px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`] }}
              >
                <DialogContentText variant='body2' sx={{ textAlign: 'center' }} id='user-view-plans-description'>
                  Choose the best plan for the user.
                </DialogContentText>
              </DialogContent>

              <DialogContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: ['wrap', 'nowrap'],
                  pt: theme => `${theme.spacing(2)} !important`,
                  pb: theme => `${theme.spacing(8)} !important`,
                  px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
                }}
              >
                <FormControl fullWidth size='small' sx={{ mr: [0, 3], mb: [3, 0] }}>
                  <InputLabel id='user-view-plans-select-label'>Choose Plan</InputLabel>
                  <Select
                    label='Choose Plan'
                    defaultValue='Standard'
                    id='user-view-plans-select'
                    labelId='user-view-plans-select-label'
                  >
                    <MenuItem value='Basic'>Basic - $0/month</MenuItem>
                    <MenuItem value='Standard'>Standard - $99/month</MenuItem>
                    <MenuItem value='Enterprise'>Enterprise - $499/month</MenuItem>
                    <MenuItem value='Company'>Company - $999/month</MenuItem>
                  </Select>
                </FormControl>
                <Button variant='contained' sx={{ minWidth: ['100%', 0] }}>
                  Upgrade
                </Button>
              </DialogContent>

              <Divider sx={{ m: '0 !important' }} />

              <DialogContent
                sx={{
                  pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(8)} !important`],
                  px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                  pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                }}
              >
                <Typography sx={{ fontWeight: 500, mb: 2, fontSize: '0.875rem' }}>
                  User current plan is standard plan
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: ['wrap', 'nowrap'],
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ mr: 3, display: 'flex', ml: 2.4, position: 'relative' }}>
                    <Sup>$</Sup>
                    <Typography
                      variant='h3'
                      sx={{
                        mb: -1.2,
                        lineHeight: 1,
                        color: 'primary.main',
                        fontSize: '3rem !important'
                      }}
                    >
                      99
                    </Typography>
                    <Sub>/ month</Sub>
                  </Box>
                  <Button
                    color='error'
                    variant='outlined'
                    sx={{ mt: 2 }}
                    onClick={() => setSubscriptionDialogOpen(true)}
                  >
                    Cancel Subscription
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>
          </Card>
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default UserViewLeft
