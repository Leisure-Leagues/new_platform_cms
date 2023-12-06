// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Countdown from 'react-countdown'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

export default function index() {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <>
        {hours !== 0 && `${hours}h`} {minutes !== 0 && `${minutes}m`} {seconds}s
      </>
    )
  }

  return (
    <Card>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={9}>
          <CardContent sx={{ p: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
            <Typography variant='h6' sx={{ mb: 3.5 }}>
              Cancun 2024
            </Typography>
            <Typography variant='body2'>
              The International Socca Federation, in partnership with it’s America’s Continental Federation ‘Socca
              Americas’, is delighted to announce the highly anticipated Socca America Cup, an innovative tournament
              aimed at reinvigorating small team football in Central America. Scheduled to take place from February 22
              to 25, 2024, the America’s Socca Cup promises an electrifying display of skill and sportsmanship.
            </Typography>
            <Divider
              sx={{ mt: theme => `${theme.spacing(6.5)} !important`, mb: theme => `${theme.spacing(6.75)} !important` }}
            />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={5}>
                <StyledBox>
                  <Box
                    sx={{
                      mb: 6.75,
                      display: 'flex',
                      alignItems: 'center',
                      '& svg': { color: 'primary.main', mr: 2.75 }
                    }}
                  >
                    <Icon icon='mdi:person' fontSize={20} />
                    <Typography variant='body2'>14/18 Teams Registered</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: 'primary.main', mr: 2.75 } }}>
                    <Icon icon='mdi:soccer-field' fontSize={20} />
                    <Typography variant='body2'>37 Fixtures</Typography>
                  </Box>
                </StyledBox>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box
                  sx={{ mb: 6.75, display: 'flex', alignItems: 'center', '& svg': { color: 'primary.main', mr: 2.75 } }}
                >
                  <Icon icon='mdi:calendar-blank-outline' fontSize={20} />
                  <Typography variant='body2'>16th - 23rd February 2024</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: 'primary.main', mr: 2.75 } }}>
                  <Icon icon='mdi:trending-up' fontSize={20} />
                  <Typography variant='body2'>Lifetime Free Update</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid
          item
          sm={3}
          xs={12}
          sx={{ pt: ['0 !important', '1.5rem !important'], pl: ['1.5rem !important', '0 !important'] }}
        >
          <CardContent
            sx={{
              height: '100%',
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'action.hover',
              p: theme => `${theme.spacing(18, 5, 16)} !important`
            }}
          >
            <div>
              <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <Typography variant='h6' sx={{ lineHeight: 1, fontWeight: 300, fontSize: '2.5rem !important' }}>
                  <Countdown date={Date.now() + 999999999} renderer={renderer} />
                </Typography>
              </Box>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}
