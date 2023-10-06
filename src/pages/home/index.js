// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import OptionsMenu from 'src/@core/components/option-menu'
import { Box } from '@mui/system'
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { useState } from 'react'

const Home = () => {
  const WeeklySalesData = [
    {
      stats: '£8,720',
      title: 'Total Income',
      color: 'primary',
      icon: <Icon icon='mdi:hand-coin' />
    },
    {
      stats: '£4,137',
      title: 'Gross Profit',
      color: 'success',
      icon: <Icon icon='mdi:currency-gbp' />
    },
    {
      stats: '-£958.00',
      color: 'warning',
      title: 'Amount off Max',
      icon: <Icon icon='mdi:alert' />
    },
    {
      stats: '81%',
      color: 'info',
      title: '% of Max',
      icon: <Icon icon='mdi:percent' />
    }
  ]
  const fortnightSalesData = [
    {
      stats: '£17,720',
      title: 'Total Income',
      color: 'primary',
      icon: <Icon icon='mdi:hand-coin' />
    },
    {
      stats: '£9,137',
      title: 'Gross Profit',
      color: 'success',
      icon: <Icon icon='mdi:currency-gbp' />
    },
    {
      stats: '-£1,358.00',
      color: 'warning',
      title: 'Amount off Max',
      icon: <Icon icon='mdi:alert' />
    },
    {
      stats: '85%',
      color: 'info',
      title: '% of Max',
      icon: <Icon icon='mdi:percent' />
    }
  ]

  const MonthlySalesData = [
    {
      stats: '£43,720',
      title: 'Total Income',
      color: 'primary',
      icon: <Icon icon='mdi:hand-coin' />
    },
    {
      stats: '£17,137',
      title: 'Gross Profit',
      color: 'success',
      icon: <Icon icon='mdi:currency-gbp' />
    },
    {
      stats: '-£3,358.00',
      color: 'warning',
      title: 'Amount off Max',
      icon: <Icon icon='mdi:alert' />
    },
    {
      stats: '80%',
      color: 'info',
      title: '% of Max',
      icon: <Icon icon='mdi:percent' />
    }
  ]

  const [keyMetricPeriod, setKeyMetricPeriod] = useState('Last 7 Days')
  const [salesData, setSalesData] = useState(WeeklySalesData)

  console.log(salesData)

  const renderStats = () => {
    const data = WeeklySalesData
    if (keyMetricPeriod === 'Last 14 Days') {
      const data = fortnightSalesData
    } else {
      const data = MonthlySalesData
    }
    return salesData.map((item, index) => (
      <Grid item xs={12} sm={3} key={index}>
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomAvatar
            variant='rounded'
            color={item.color}
            sx={{ mr: 3, boxShadow: 3, width: 80, height: 80, '& svg': { fontSize: '1.75rem' } }}
          >
            {item.icon}
          </CustomAvatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>{item.title}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ))
  }

  const handleTimePeriod = option => {
    setKeyMetricPeriod(option)
    if (option === 'Last 7 Days') {
      setSalesData(WeeklySalesData)
    }
    if (option === 'Last 14 Days') {
      setSalesData(fortnightSalesData)
    }
    if (option === 'Last Month') {
      setSalesData(MonthlySalesData)
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <Card>
          <CardHeader
            title='Key Metrics'
            subheader={keyMetricPeriod}
            action={
              <OptionsMenu
                options={['Last 7 Days', 'Last 14 Days', 'Last Month']}
                iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
                title={keyMetricPeriod}
                change={handleTimePeriod}
              />
            }
          />
          <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
            <Grid container spacing={[5, 0]}>
              {renderStats()}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
