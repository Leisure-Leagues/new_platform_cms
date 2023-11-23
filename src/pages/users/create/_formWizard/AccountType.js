// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import Select from '@mui/material/Select'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

const data = [
  {
    isSelected: true,
    value: 'user-account',
    title: 'Customer Account',
    content: 'Create an account that customers can use to create or join a team'
  },
  {
    value: 'cms-account',
    title: 'CMS Account',
    content: 'Create an account to give access to the CMS and set specific permissions'
  },
  {
    value: 'referee',
    title: 'Referee Account',
    content: 'Create an account for a referee'
  },
  {
    value: 'franchisee',
    title: 'Franchisee Account',
    content: 'Create an account for a franchisee and assign them specific areas / venues '
  }
]
const regionArray = ['Asia', 'Europe', 'Africa', 'Australia', 'North America', 'South America']

const Img = styled('img')({
  width: '100%',
  height: 'auto',
  maxWidth: '100%'
})

const AccountType = () => {
  const initialIconSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1]
    .value

  // ** States
  const [region, setRegion] = useState([])
  const [selectedRadio, setSelectedRadio] = useState(initialIconSelected)

  // ** Hook
  const theme = useTheme()

  const icons = [
    {
      icon: 'mdi:tag-outline',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'mdi:currency-usd',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'mdi:account-outline',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    }
  ]

  const handleChange = event => {
    const {
      target: { value }
    } = event
    setRegion(typeof value === 'string' ? value.split(',') : value)
  }

  const handleRadioChange = prop => {
    if (typeof prop === 'string') {
      setSelectedRadio(prop)
    } else {
      setSelectedRadio(prop.target.value)
    }
  }

  return (
    <Grid container spacing={5}>
      {data.map((item, index) => (
        <CustomRadioIcons
          key={index}
          data={data[index]}
          selected={selectedRadio}
          name='custom-radios-deal'
          gridProps={{ sm: 6, xs: 12 }}
          handleChange={handleRadioChange}
        />
      ))}
    </Grid>
  )
}

export default AccountType
