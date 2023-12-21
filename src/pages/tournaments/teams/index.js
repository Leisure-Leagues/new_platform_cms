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
    },
    {
      name: 'Costa Rica',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/255px-Flag_of_Costa_Rica.svg.png'
    },
    {
      name: 'Haiti',
      image:
        'data:image/png;base64,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'
    },
    {
      name: 'Suiname',
      image:
        'https://flagmakers.co.uk/media/0zepothg/flag_of_suriname.png?anchor=center&mode=crop&width=1530&height=0&rnd=132442144015930000'
    },
    {
      name: 'Brasil',
      image:
        'data:image/png;base64,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'
    },
    {
      name: 'Argentina',
      image: 'https://i.ebayimg.com/images/g/dtoAAMXQiNdRcUIj/s-l1200.webp'
    },
    {
      name: 'Chile',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/220px-Flag_of_Chile.svg.png'
    },
    {
      name: 'Colombia',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/255px-Flag_of_Colombia.svg.png'
    },
    {
      name: 'Ecuador',
      image:
        'https://cdn.britannica.com/49/149-004-986E1BD8/flag-design-similarities-Ecuador-Colombia-flags-Venezuela.jpg'
    },
    {
      name: 'Peru',
      image: 'https://cdn.britannica.com/48/3448-004-33B5D198/Flag-Peru.jpg'
    },
    {
      name: 'Uruguay',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/255px-Flag_of_Uruguay.svg.png'
    },
    {
      name: 'Marrocco',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/255px-Flag_of_Morocco.svg.png'
    },
    {
      name: 'Oman',
      image: 'https://cdn.britannica.com/73/5773-004-F7C13E3D/Flag-Oman.jpg'
    },
    {
      name: 'EAU',
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAjVBMVEXtHiYGCAf///8RmkoUmUr//v8AAAAZnE4TmUwRmkQAjT/wISkBCwUIBwgiDAnwHh/ZIjD+6+bVMC3xHCT6//3eKTdRg0H/+v8Tn0YQoUxPhUBSg0HPMjNKhUYZlk3YLjFSgEYDoUThIh3MMipFdjcAikUAjj7rJjf/9OL/9f/+7d3z//zoJjD/6d7+6eYIzTkPAAACF0lEQVR4nO3by1ITYRhF0RASJaByC5CAoqJ4Q3z/xzMOHMAepqlUV639Bt+q8/esJ0fDNjm7Xq0PXo+6ydCdXS/Wt/v7sxHHpL2AyebtMHlusrid7Y+5lzHZ9VXbNbzJJZNnnW9M/n1PxtzwJjdMYmInTJgwYfI/Jo1JY9KYNCaNSWPSmDQmjUlj0pg0Jo1JY9KYNCaNSWPSmDQmjUlj0pg0Jo1JY9KYNCaNSWPSmDQmjUlj0pg0Jo1JY9KYNCaNSRve5Ga1YvKko/cf1uvb2exgxA1tcv7x0+zAf6NPOj67XKwXn1eLETe0yd2Xr4f394ffDkfc0Cbn3388LKfL5XTEDW0yuXhcXv2cT+cjbmiSu5Nfy/nVw3LXd23T0CbHvx83G/F2nphcnM6nm5Xs+q5tYtKYNCaNSWPSmDQmjUlj0pg0Jo1JY9KYNCaNSWPSmDQmjUlj0pg0Jo1JY9KYNCaNSWPSmDQmjUlj0pg0Jo1JY9KYNCaNSWPSmDQmjUlj0pg0Jo1JY9KYNCaNSRve5A+TmNhJTeykJqe7PmnrBjc5eTX6hjd593bvzd7bvRHHpDFpTBqTxqQxaUwak8akMWlMGpPGpDFpTBqTxqQxaUwak8akMWlMGpPGpDFpTBqTxqQxaUwak8akMWlMGpPGpDFpTBqTxqQxaUwak8akMWlMGpPGpDFpTBqTxqQxaUwak8akMWlM2l/CWnNqL/OAcgAAAABJRU5ErkJggg=='
    },
    {
      name: 'Hungary',
      image: 'https://cdn.britannica.com/55/1455-004-5897143C/Flag-Hungary.jpg'
    },
    {
      name: 'Spain',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png'
    },
    {
      name: 'Belgium',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg'
    }
  ])

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  const filterTeams = () => {
    return teamList.filter(team => team.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return (
    <Grid container spacing={10} sx={{ mt: 5 }}>
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
        <Grid key={index} item xs={2}>
          <Link href='teams/England' style={{ textDecoration: 'none' }}>
            <Card>
              <CardMedia sx={{ height: '8.375rem' }} image={team.image} />
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
