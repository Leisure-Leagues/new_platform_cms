import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Icon from 'src/@core/components/icon'

const FixtureHeader = () => {
  return (
    <Card>
      <CardMedia
        component='img'
        alt='profile-header'
        image='https://static.vecteezy.com/system/resources/thumbnails/001/866/648/small/light-blue-red-blurred-background-vector.jpg'
        sx={{
          height: { xs: 150, md: 250 }
        }}
      />
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
              England vs Italy
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
                  Monday 16th February 2024 (16:00)
                </Typography>
              </Box>
              <Box sx={{ ml: 5, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                <Icon icon='mdi:stadium' />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>Cancun, Mexico</Typography>
              </Box>
              <Box sx={{ ml: 5, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                <Icon icon='mdi:whistle' />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>Howard Webb</Typography>
              </Box>
            </Box>
          </Box>
          <Button variant='contained' startIcon={<Icon icon='mdi:edit' fontSize={20} />}>
            Edit Fixture
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FixtureHeader
