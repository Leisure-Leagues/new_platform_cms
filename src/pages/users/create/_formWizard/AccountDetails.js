// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import axios from 'axios'
import { useState } from 'react'
import { MenuItem } from '@mui/material'

const AccountDetails = ({ registerController }) => {
  const [lookup, setLookup] = useState(null)
  const [postcode, setPostcode] = useState(null)
  const [selectedAddress, setSelectedAddress] = useState('Choose Address...')

  const handlePostcodeChange = event => {
    setPostcode(event.target.value)
  }

  const handleSelectAddress = event => {
    setSelectedAddress(event.target.value)
  }

  const postcodeLookUp = async event => {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://services.3xsoftware.co.uk/Search/ByPostcode/json?username=LeisureLeagues1374&key=35LL-TM88-ZESQ-HAF3&postcode=${postcode}`
    )
    setLookup(response.data.Summaries)
  }

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
          Account Details
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='First Name'
          placeholder='First Name'
          {...registerController('first_name', { required: 'You must supply a first name' })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='Last Name'
          placeholder='Last Name'
          {...registerController('last_name', { required: 'You must supply a surname' })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Email Address' placeholder='Email Address' {...registerController('email')} />
      </Grid>
      <Grid item xs={6} sm={2}>
        <TextField fullWidth label='Country Code' placeholder='+44' />
      </Grid>
      <Grid item xs={6} sm={4}>
        <TextField fullWidth label='Phone Number' placeholder='Phone Number' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Password' placeholder='Password' {...registerController('password')} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='Confirm Password'
          placeholder='Confirm Password'
          {...registerController('password_confirmation')}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
          Address
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField fullWidth label='Postcode' placeholder='Postcode' onChange={() => handlePostcodeChange(event)} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button variant='contained' style={{ height: '53px' }} onClick={() => postcodeLookUp()}>
          Lookup Address
        </Button>
      </Grid>
      <Grid item xs={12}>
        {lookup !== null ? (
          <Select
            label='Address'
            style={{ width: '100%' }}
            onChange={event => handleSelectAddress(event)}
            value={selectedAddress}
          >
            {lookup.map((address, index) => (
              <MenuItem key={index} value={address.StreetAddress}>
                {address.StreetAddress}, {address.Place}
              </MenuItem>
            ))}
          </Select>
        ) : null}
      </Grid>
    </Grid>
  )
}

export default AccountDetails
