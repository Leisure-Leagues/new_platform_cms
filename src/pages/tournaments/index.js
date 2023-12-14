import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const index = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Card>
          <CardMedia
            sx={{ height: '10.375rem' }}
            image='https://cdn.britannica.com/73/2573-050-C825CE68/Flag-Mexico.jpg?w=400&h=235&c=crop'
          />
          <CardContent sx={{ p: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              Copa America 2024, Mexico
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
      </Grid>
    </Grid>
  )
}

export default index
