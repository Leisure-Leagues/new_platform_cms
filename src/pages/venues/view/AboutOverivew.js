// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import ConnectionsTeams from './ConnectionsTeams'
import Dialog from '@mui/material/Dialog'
import { useState } from 'react'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContentText from '@mui/material/DialogContentText'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { MenuItem } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const renderList = arr => {
  if (arr && arr.length) {
    return arr.map((item, index) => {
      return (
        <Box
          key={index}
          sx={{
            display: 'flex',
            '&:not(:last-of-type)': { mb: 4 },
            '& svg': { color: 'text.secondary' }
          }}
        >
          <Box sx={{ display: 'flex', mr: 2 }}>
            <Icon icon={item.icon} />
          </Box>

          <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
              {`${item.property.charAt(0).toUpperCase() + item.property.slice(1)}:`}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
            </Typography>
          </Box>
        </Box>
      )
    })
  } else {
    return null
  }
}

const renderTeams = arr => {
  if (arr && arr.length) {
    return arr.map((item, index) => {
      return (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            '&:not(:last-of-type)': { mb: 4 },
            '& svg': { color: `${item.color}.main` }
          }}
        >
          <Icon icon='item.icon' />

          <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>
            {item.property.charAt(0).toUpperCase() + item.property.slice(1)}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
          </Typography>
        </Box>
      )
    })
  } else {
    return null
  }
}

const AboutOverivew = props => {
  const { teams, about, contacts, overview } = props
  const [openEdit, setOpenEdit] = useState(false)
  const [openEditSocials, setOpenEditSocials] = useState(false)

  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  const handleEditSocialsClickOpen = () => setOpenEditSocials(true)
  const handleEditSocialsClickClose = () => setOpenEditSocials(false)

  return (
    <>
      <Dialog
        open={openEdit}
        onClose={handleEditClose}
        aria-labelledby='user-view-edit'
        aria-describedby='user-view-edit-description'
        sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
      >
        <DialogTitle
          id='user-view-edit'
          sx={{
            textAlign: 'center',
            fontSize: '1.5rem !important',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          Edit Venue Information
        </DialogTitle>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(8)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
          }}
        >
          <DialogContentText variant='body2' id='user-view-edit-description' sx={{ textAlign: 'center', mb: 7 }}>
            Updating venue details will create an action in the activity timeline
          </DialogContentText>
          <form>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label='Venue Name' defaultValue='Coventry Sports Center' />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='user-view-status-label'>Franchise</InputLabel>
                  <Select
                    label='Franchise'
                    defaultValue='pending'
                    id='user-view-status'
                    labelId='user-view-status-label'
                  >
                    <MenuItem value='pending'>Head Office</MenuItem>
                    <MenuItem value='active'>Franchise 1</MenuItem>
                    <MenuItem value='inactive'>Franchise 2</MenuItem>
                    <MenuItem value='inactive'>Franchise 3</MenuItem>
                    <MenuItem value='inactive'>Franchise 4</MenuItem>
                    <MenuItem value='inactive'>Franchise 5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='Address 1' defaultValue='Coventry Road' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='Address 2' defaultValue='Coventry' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='County' defaultValue='West Midlands' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='Postcode' defaultValue='CV1 8QE' />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='user-view-language-label'>Country</InputLabel>
                  <Select label='Language' defaultValue='uk' id='user-view-language' labelId='user-view-language-label'>
                    <MenuItem value='uk'>United Kingdom</MenuItem>
                    <MenuItem value='sp'>Spain</MenuItem>
                    <MenuItem value='fr'>France</MenuItem>
                    <MenuItem value='de'>Germany</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label='Contact Name' defaultValue='Joe Bloggs' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth type='email' label='Email Address' defaultValue='joebloggs@google.com' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth type='text' label='Phone Number' defaultValue='02476 741547' />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditClose}>
            Save Changes
          </Button>
          <Button variant='outlined' color='error' onClick={handleEditClose}>
            Discard Changes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openEditSocials}
        onClose={handleEditSocialsClickClose}
        aria-labelledby='user-view-edit'
        aria-describedby='user-view-edit-description'
        sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
      >
        <DialogTitle
          id='user-view-edit'
          sx={{
            textAlign: 'center',
            fontSize: '1.5rem !important',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          Edit Social Media Details
        </DialogTitle>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(8)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
          }}
        >
          <DialogContentText variant='body2' id='user-view-edit-description' sx={{ textAlign: 'center', mb: 7 }}>
            Updating the social media links for this venue will create an action in the activity timeline
          </DialogContentText>
          <form>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label='Facebook Page URL'
                  defaultValue='http://www.facebook.com/CoventrySportsCenter'
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label='Facebook Group URL'
                  defaultValue='http://www.facebook.com/CoventrySportsCenterGroup'
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label='Website' defaultValue='http://www.coventrysportscenter.co.uk' />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditSocialsClickClose}>
            Save Changes
          </Button>
          <Button variant='outlined' color='error' onClick={handleEditSocialsClickClose}>
            Discard Changes
          </Button>
        </DialogActions>
      </Dialog>

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <div>
                <Typography variant='caption' sx={{ mb: 5, display: 'block', textTransform: 'uppercase' }}>
                  Options
                </Typography>
                <Stack direction='row' spacing={3}>
                  <Button variant='contained' onClick={handleEditClickOpen}>
                    Edit Details
                  </Button>
                  <Button variant='contained' onClick={handleEditSocialsClickOpen}>
                    Edit Socials
                  </Button>
                </Stack>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ mb: 6 }}>
                <Typography variant='caption' sx={{ mb: 5, display: 'block', textTransform: 'uppercase' }}>
                  Venue Details
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  '&:not(:last-of-type)': { mb: 4 },
                  '& svg': { color: 'text.secondary' }
                }}
              >
                <Box sx={{ display: 'flex', mr: 2 }}>
                  <Icon icon='mdi:stadium' />
                </Box>

                <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Venue Name</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Coventry Sports Center</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  '&:not(:last-of-type)': { mb: 4 },
                  '& svg': { color: 'text.secondary' }
                }}
              >
                <Box sx={{ display: 'flex', mr: 2 }}>
                  <Icon icon='mdi:business' />
                </Box>

                <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Franchise</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Head Office</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  '&:not(:last-of-type)': { mb: 4 },
                  '& svg': { color: 'text.secondary' }
                }}
              >
                <Box sx={{ display: 'flex', mr: 2 }}>
                  <Icon icon='mdi:account' />
                </Box>

                <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Contact Name</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Joe Bloggs</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  '&:not(:last-of-type)': { mb: 4 },
                  '& svg': { color: 'text.secondary' }
                }}
              >
                <Box sx={{ display: 'flex', mr: 2 }}>
                  <Icon icon='mdi:phone' />
                </Box>

                <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Phone</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>02476 741547</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  '&:not(:last-of-type)': { mb: 4 },
                  '& svg': { color: 'text.secondary' }
                }}
              >
                <Box sx={{ display: 'flex', mr: 2 }}>
                  <Icon icon='mdi:email' />
                </Box>

                <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Contact Email</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>joebloggs@google.com</Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 6 }}>
                <Typography variant='caption' sx={{ mb: 5, display: 'block', textTransform: 'uppercase' }}>
                  Social Media
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    '&:not(:last-of-type)': { mb: 4 },
                    '& svg': { color: 'text.secondary' }
                  }}
                >
                  <Box sx={{ display: 'flex', mr: 2 }}>
                    <Icon icon='mdi:facebook' />
                  </Box>

                  <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Facebook Page URL</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>CoventrySportsCenter</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    '&:not(:last-of-type)': { mb: 4 },
                    '& svg': { color: 'text.secondary' }
                  }}
                >
                  <Box sx={{ display: 'flex', mr: 2 }}>
                    <Icon icon='mdi:facebook' />
                  </Box>
                  <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Facebook Group URL</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>CoventrySportsCenterGroup</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    '&:not(:last-of-type)': { mb: 4 },
                    '& svg': { color: 'text.secondary' }
                  }}
                >
                  <Box sx={{ display: 'flex', mr: 2 }}>
                    <Icon icon='mdi:globe' />
                  </Box>
                  <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Website</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>www.coventrysportscenter.co.uk</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <ConnectionsTeams />
      </Grid>
    </>
  )
}

export default AboutOverivew
