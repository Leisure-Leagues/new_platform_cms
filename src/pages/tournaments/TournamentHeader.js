import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Icon from 'src/@core/components/icon'
import Countdown from 'react-countdown'

const TournamentHeader = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <>
        {days !== 0 && `${days}d`} {hours !== 0 && `${hours}h`} {minutes !== 0 && `${minutes}m`} {seconds}s
      </>
    )
  }

  return (
    <Card>
      <CardContent
        sx={{
          pt: 0,
          mt: -8,
          display: 'flex',
          alignItems: 'flex-end',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            mt: 13,
            ml: { xs: 0, md: 6 },
            alignItems: 'flex-end',
            flexWrap: ['wrap', 'nowrap'],
            justifyContent: ['center', 'space-between']
          }}
        >
          <Box sx={{ mb: [6, 0], display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'] }}>
            <Typography variant='h5' sx={{ mb: 4 }}>
              Copa Socca America
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: ['center', 'flex-start']
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                <Icon icon='mdi:calendar-blank' />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>
                  16th February 2024 - 21st February 2024
                </Typography>
              </Box>
              <Box sx={{ ml: 5, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                <Icon icon='mdi:stadium' />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>Cancun, Mexico</Typography>
              </Box>
            </Box>
          </Box>
          <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600, fontSize: '2rem' }}>
            <Countdown date={Date.now() + 999999999} renderer={renderer} />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TournamentHeader
