import React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Icon from 'src/@core/components/icon'
import IconButton from '@mui/material/IconButton'

const ArticlePreview = ({ data }) => {
  const StyledGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    [theme.breakpoints.up('md')]: {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }))

  return (
    <Card>
      <Grid container spacing={6}>
        <StyledGrid item md={5} xs={12}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img width={280} height={176} alt='Apple iPhone 11 Pro' style={{ borderRadius: '20px' }} src={data.image} />
          </CardContent>
        </StyledGrid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            pt: ['0 !important', '0 !important', '1.5rem !important'],
            pl: ['1.5rem !important', '1.5rem !important', '0 !important']
          }}
        >
          <CardContent>
            <Typography variant='h6' sx={{ mb: 2 }}>
              {data.headline}
            </Typography>
            <Typography variant='body2' sx={{ mb: 3.5 }}>
              {data.desc}
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button sx={{ '& svg': { mr: 2 } }}>
                <Icon icon='mdi:edit' fontSize={20} />
                Edit Article
              </Button>
              <IconButton id='long-button' aria-label='share' aria-haspopup='true' aria-controls='long-menu'>
                <Icon icon='mdi:share-variant' fontSize={20} />
              </IconButton>
            </Box>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ArticlePreview
