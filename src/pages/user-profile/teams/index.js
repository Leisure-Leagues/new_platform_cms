// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Teams = () => {
  const players = {
    homeTeam: [
      {
        name: 'Jordan Pickford',
        age: 26,
        position: 'Goalkeeper',
        image: 'https://sportsmanheight.com/wp-content/uploads/2021/11/13-4.png'
      },
      {
        name: 'Harry Maguire',
        age: 29,
        position: 'Defender',
        image: 'https://b.fssta.com/uploads/application/soccer/headshots/6318.png'
      },
      {
        name: 'Kyle Walker',
        age: 29,
        position: 'Defender',
        image: 'https://i.pinimg.com/1200x/03/67/1c/03671c2d57d38f34546c368280009e9b.jpg'
      },
      {
        name: 'Phil Foden',
        age: 29,
        position: 'Midfielder',
        image: 'https://b.fssta.com/uploads/application/soccer/headshots/49575.vresize.350.350.medium.39.png'
      },
      {
        name: 'Jude Bellingham',
        age: 29,
        position: 'Forward',
        image: 'https://b.fssta.com/uploads/application/soccer/headshots/71310.vresize.350.350.medium.12.png'
      },
      {
        name: 'Harry Kane',
        age: 29,
        position: 'Forward',
        image: 'https://i.pinimg.com/originals/32/43/3d/32433dade363bf766c66aeff2f34efbc.png'
      }
    ],
    awayTeam: [
      {
        name: 'Gianluigi Donnarumma',
        age: 26,
        position: 'Goalkeeper',
        image: 'https://i.goalzz.com/?i=o%2Fp%2F115%2F471%2Fgianluigi-donnarumma-1.png'
      },
      {
        name: 'Alessandro Bastoni',
        age: 29,
        position: 'Defender',
        image: 'https://cdn.futbin.com/content/fifa19/img/players/237383.png'
      },
      {
        name: 'Gianluca Mancini',
        age: 29,
        position: 'Defender',
        image: 'https://media.asroma.com/prod/images/square_large_fill/32fd4b3b9ea2-mancini-copia.png'
      },
      {
        name: 'Jorginho',
        age: 29,
        position: 'Midfielder',
        image: 'https://img.uefa.com/imgml/TP/players/3/2024/324x324/250067749.jpg'
      },
      {
        name: 'Nicolo Barella',
        age: 29,
        position: 'Forward',
        image: 'https://www.footballdatabase.eu/images/photos/players/a_252/252538.jpg'
      },
      {
        name: 'Nicolo Zaniolo',
        age: 29,
        position: 'Forward',
        image: 'https://www.footballdatabase.eu/images/photos/players/a_316/316997.jpg'
      }
    ]
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <Grid item xs={12} md={10} lg={12}>
          <Typography sx={{ fontWeight: 600, fontSize: '1.5rem', mb: 5 }}>England</Typography>
          <Card>
            {players.homeTeam.map(player => (
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    borderRadius: 1,
                    justifyContent: ['space-between'],
                    alignItems: ['flex-start', 'center'],
                    border: theme => `1px solid ${theme.palette.divider}`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={player.image} width='130px' height='140px' />

                    <Box sx={{ mt: 1, mb: 2.5, ml: 5, display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
                      <Typography sx={{ fontWeight: 600 }}>{player.name}</Typography>
                      <Typography variant='body2'>Age: {player.age}</Typography>
                      <Typography variant='body2'>Position: {player.position}</Typography>
                    </Box>
                  </div>
                </Box>
              </CardContent>
            ))}
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12} md={10} lg={12}>
          <Typography sx={{ fontWeight: 600, fontSize: '1.5rem', mb: 5 }}>Italy</Typography>
          <Card>
            {players.awayTeam.map(player => (
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    borderRadius: 1,
                    justifyContent: ['space-between'],
                    alignItems: ['flex-start', 'center'],
                    border: theme => `1px solid ${theme.palette.divider}`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={player.image} width='130px' height='140px' />

                    <Box sx={{ mt: 1, mb: 2.5, ml: 5, display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
                      <Typography sx={{ fontWeight: 600 }}>{player.name}</Typography>
                      <Typography variant='body2'>Age: {player.age}</Typography>
                      <Typography variant='body2'>Position: {player.position}</Typography>
                    </Box>
                  </div>
                </Box>
              </CardContent>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Teams
