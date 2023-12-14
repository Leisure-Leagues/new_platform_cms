import { useState } from 'react'

import Grid from '@mui/material/Grid'

// ** Custom Components Imports
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

const AccountType = () => {
  const initialIconSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1]
    .value

  const [selectedRadio, setSelectedRadio] = useState(initialIconSelected)

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
