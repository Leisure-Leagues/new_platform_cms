// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const data = [
  { name: 'Income', value: 115, color: '#008000' },
  { name: 'Max', value: 35, color: '#880808' }
]
const RADIAN = Math.PI / 180

const renderCustomizedLabel = props => {
  // ** Props
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill='#fff' textAnchor='middle' dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const RechartsPieChart = () => {
  return (
    <Card>
      <CardHeader
        title='% Of Maximum'
        subheader='Actual Income vs Maximum Potential'
        subheaderTypographyProps={{ sx: { color: theme => `${theme.palette.text.disabled} !important` } }}
      />
      <CardContent>
        <Box sx={{ height: 350 }}>
          <ResponsiveContainer>
            <PieChart height={350} style={{ direction: 'rtl' }}>
              <Pie data={data} innerRadius={80} dataKey='value' label={renderCustomizedLabel} labelLine={false}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

export default RechartsPieChart
