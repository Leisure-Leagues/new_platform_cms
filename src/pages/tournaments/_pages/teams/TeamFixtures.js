import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

const TeamFixtures = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent
            sx={{
              mb: 5,
              pt: 2,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Typography sx={{ fontSize: '1.2rem', fontWeight: '700' }} color='text.secondary'>
              Latest Fixtures & Results
            </Typography>
            <Button variant='contained' color='primary'>
              View all
            </Button>
          </CardContent>

          <CardContent sx={{ my: 1 }}>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mb: 2 }}>
              <Typography sx={{ fontSize: '1rem' }}>Monday 9th December 2023</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mt: 2 }}>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'start' }}>
                <Typography variant='h6' sx={{ ml: 3 }}>
                  England
                </Typography>
              </Grid>

              <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '1rem' }}>vs</Typography>
              </Grid>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography variant='h6' sx={{ mr: 3 }}>
                  Spain
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mt: 2 }}>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'start' }}>
                <Typography variant='h6' sx={{ ml: 3 }}>
                  France
                </Typography>
              </Grid>

              <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '1rem' }}>vs</Typography>
              </Grid>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography variant='h6' sx={{ mr: 3 }}>
                  England
                </Typography>
              </Grid>
            </Grid>
          </CardContent>

          <Divider />

          <CardContent sx={{ my: 1 }}>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mb: 2 }}>
              <Typography sx={{ fontSize: '1rem' }}>Monday 1st December 2023</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mt: 2 }}>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'start' }}>
                <Typography variant='h6' sx={{ ml: 3 }}>
                  Italy
                </Typography>
              </Grid>

              <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '1.4rem' }}>2 : 2</Typography>
              </Grid>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography variant='h6' sx={{ mr: 3 }}>
                  England
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mt: 2 }}>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'start' }}>
                <Typography variant='h6' sx={{ ml: 3 }}>
                  England
                </Typography>
              </Grid>

              <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '1.4rem' }}>1 : 1</Typography>
              </Grid>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography variant='h6' sx={{ mr: 3 }}>
                  Peru
                </Typography>
              </Grid>
            </Grid>
          </CardContent>

          <Divider />

          <CardContent sx={{ my: 1 }}>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mb: 2 }}>
              <Typography sx={{ fontSize: '1rem' }}>Monday 1st December 2023</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mt: 2 }}>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'start' }}>
                <Typography variant='h6' sx={{ ml: 3 }}>
                  Italy
                </Typography>
              </Grid>

              <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '1.4rem' }}>1 : 2</Typography>
              </Grid>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography variant='h6' sx={{ mr: 3 }}>
                  England
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mt: 2 }}>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'start' }}>
                <Typography variant='h6' sx={{ ml: 3 }}>
                  England
                </Typography>
              </Grid>

              <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '1.4rem' }}>0 : 0</Typography>
              </Grid>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography variant='h6' sx={{ mr: 3 }}>
                  Peru
                </Typography>
              </Grid>
            </Grid>
          </CardContent>

          <Divider />

          <CardContent sx={{ my: 1 }}>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mb: 2 }}>
              <Typography sx={{ fontSize: '1rem' }}>Monday 1st December 2023</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mt: 2 }}>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'start' }}>
                <Typography variant='h6' sx={{ ml: 3 }}>
                  Italy
                </Typography>
              </Grid>

              <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '1.4rem' }}>1 : 0</Typography>
              </Grid>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography variant='h6' sx={{ mr: 3 }}>
                  England
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mt: 2 }}>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'start' }}>
                <Typography variant='h6' sx={{ ml: 3 }}>
                  England
                </Typography>
              </Grid>

              <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '1.4rem' }}>4 : 0</Typography>
              </Grid>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography variant='h6' sx={{ mr: 3 }}>
                  Peru
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TeamFixtures
