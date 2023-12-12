import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import Icon from 'src/@core/components/icon'
import { useState } from 'react'
import Link from 'next/link'

export default function index() {
  const [searchTerm, setSearchTerm] = useState('')
  const [teamList, setTeamList] = useState([
    {
      name: 'England',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png'
    },
    {
      name: 'Mexico',
      image: 'https://cdn.britannica.com/73/2573-050-C825CE68/Flag-Mexico.jpg?w=400&h=235&c=crop'
    },
    {
      name: 'United States',
      image: 'https://m.media-amazon.com/images/I/61u6nhApzZL.jpg'
    },
    {
      name: 'Canada',
      image: 'https://cdn.britannica.com/68/7068-050-54679E29/Flag-Canada.jpg?w=400&h=235&c=crop'
    },
    {
      name: 'Guatemala',
      image: 'https://cdn.britannica.com/13/7213-004-FFC58C1D/Flag-Guatemala.jpg'
    },
    {
      name: 'Honduras',
      image: 'https://cdn.britannica.com/16/7216-050-8CC469AB/Flag-Honduras.jpg'
    },
    {
      name: 'Nicaragua',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/1200px-Flag_of_Nicaragua.svg.png'
    },
    {
      name: 'Panama',
      image:
        'data:image/png;base64,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'
    }
  ])

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  const filterTeams = () => {
    return teamList.filter(team => team.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <OutlinedInput
          fullWidth
          placeholder='Search Teams...'
          onChange={handleSearchChange}
          startAdornment={
            <InputAdornment position='start'>
              <Icon icon='mdi:search' />
            </InputAdornment>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6'>Registered Teams ({teamList.length})</Typography>
      </Grid>
      {filterTeams().map((team, index) => (
        <Grid key={index} item xs={3}>
          <Link href='teams/England' style={{ textDecoration: 'none' }}>
            <Card>
              <CardMedia sx={{ height: '10.375rem' }} image={team.image} />
              <CardContent sx={{ p: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
                <Typography variant='h6' sx={{ mb: 2 }}>
                  {team.name}
                </Typography>
              </CardContent>
              <Button
                color='secondary'
                variant='contained'
                sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
              >
                Manage
              </Button>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
