// ** MUI Imports
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import Icon from 'src/@core/components/icon'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Tooltip from '@mui/material/Tooltip'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import { TableContainer, TableHead } from '@mui/material'

const AccountPermissions = () => {
  const [role, setRole] = useState(null)

  const handleRole = e => {
    setRole(e.target.value)
  }

  return (
    <Grid container spacing={3} sx={{ minWidth: '100%' }}>
      <Grid item xs={12}>
        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
          Assign Role...
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10}>
        <FormControl fullWidth>
          <InputLabel id='select-user-type'>Role</InputLabel>
          <Select labelId='select-user-type' label='User Type' defaultValue='' onChange={e => handleRole(e)}>
            <MenuItem value='all'>Global Admin</MenuItem>
            <MenuItem value='registered'>Master Franchisee</MenuItem>
            <MenuItem value='franchisee'>Franchisee</MenuItem>
            <MenuItem value='area_manager'>Area Manager</MenuItem>
            <MenuItem value='stock'>Stock Assistant</MenuItem>
            <MenuItem value='support'>Support Team</MenuItem>
            <MenuItem value='player'>Player</MenuItem>
            <MenuItem value='referee'>Referee</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button variant='contained' color='success' style={{ height: '53px' }} onClick={() => postcodeLookUp()}>
          Create new
        </Button>
      </Grid>
      <Divider sx={{ width: '100%', marginTop: '20px' }} />
      <Grid item xs={12}>
        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
          Or assign specific permissions...
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}></Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer>
          <Table size='small'>
            <TableHead>
              <TableRow sx={{ marginBottom: '25px' }}>
                <Box
                  sx={{
                    marginTop: '10px',
                    fontWeight: '900',
                    display: 'flex',
                    fontSize: '0.875rem',
                    whiteSpace: 'nowrap',
                    alignItems: 'center',
                    textTransform: 'capitalize',
                    '& svg': { ml: 1, cursor: 'pointer' }
                  }}
                >
                  User Management
                  <Tooltip placement='top' title='Allows access to view and manage users'>
                    <Box sx={{ display: 'flex' }}>
                      <Icon icon='mdi:information-outline' fontSize='1rem' />
                    </Box>
                  </Tooltip>
                </Box>
                <TableCell colSpan={3} sx={{ display: 'flex' }}>
                  <Grid item xs={8}>
                    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                      <FormControlLabel
                        label='View Users'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                      <FormControlLabel
                        label='Create New Users'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                      <FormControlLabel
                        label='Edit Users'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                      <FormControlLabel
                        label='Search Users'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                      <FormControlLabel
                        label='Delete Users'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                      <FormControlLabel
                        label='Deactivate Users'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                      <FormControlLabel
                        label='Search Users'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow>
                <Box
                  sx={{
                    marginTop: '10px',
                    fontWeight: '900',
                    display: 'flex',
                    fontSize: '0.875rem',
                    whiteSpace: 'nowrap',
                    alignItems: 'center',
                    textTransform: 'capitalize',
                    '& svg': { ml: 1, cursor: 'pointer' }
                  }}
                >
                  League Management
                  <Tooltip placement='top' title='Allows access to view and manage users'>
                    <Box sx={{ display: 'flex' }}>
                      <Icon icon='mdi:information-outline' fontSize='1rem' />
                    </Box>
                  </Tooltip>
                </Box>
                <TableCell colSpan={3} sx={{ display: 'flex' }}>
                  <Grid item xs={8}>
                    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                      <FormControlLabel
                        label='View Leagues'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                      <FormControlLabel
                        label='Create Leagues'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                      <FormControlLabel
                        label='Edit Leagues'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                      <FormControlLabel
                        label='Delete Leagues'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                      <FormControlLabel
                        label='Manage Waiting Lists'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                      <FormControlLabel
                        label='Assign Teams to Division'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                      <FormControlLabel
                        label='Manage Seasons'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                      <FormControlLabel
                        label='Manage Fixtures'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                      <FormControlLabel
                        label='Manage News Articles'
                        sx={{ '& .MuiTypography-root': { textTransform: 'capitalize' } }}
                        control={<Checkbox size='small' />}
                      />
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default AccountPermissions
