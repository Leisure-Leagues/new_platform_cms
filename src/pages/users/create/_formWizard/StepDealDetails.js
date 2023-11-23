// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useEffect } from 'react'

const StepDealDetails = () => {
  const postcodeLookUp = async () => {
    const data = await fetch(
      'https://services.3xsoftware.co.uk/Search/ByPostcode/json?username=LeisureLeagues1374&key=35LL-TM88-ZESQ-HAF3&postcode=CV129RA'
    )
  }

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
          Account Details
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='First Name' placeholder='First Name' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Last Name' placeholder='Last Name' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Email Address' placeholder='Email Address' />
      </Grid>
      <Grid item xs={6} sm={2}>
        <TextField fullWidth label='Country Code' placeholder='+44' />
      </Grid>
      <Grid item xs={6} sm={4}>
        <TextField fullWidth label='Phone Number' placeholder='Phone Number' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Password' placeholder='Password' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Confirm Password' placeholder='Confirm Password' />
      </Grid>
      <Grid item xs={12}>
        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
          Address
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField fullWidth label='Postcode' placeholder='Postcode' />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button variant='contained' style={{ height: '53px' }} onClick={() => postcodeLookUp()}>
          Lookup Address
        </Button>
      </Grid>
    </Grid>
  )
}

export default StepDealDetails
