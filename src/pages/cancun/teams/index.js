import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

function createData(team, captain, registered, active) {
  return { team, captain, registered, active }
}

const rows = [
  createData('England', 'Dave Smith', 'Yes', 'Eliminated (Last 16)'),
  createData('Brazil', 'Neymar', 'Yes', 'Active'),
  createData('Spain', 'Alvaro Morata', 'Yes', 'Active'),
  createData('Argentina', 'Lionel Messi', 'Yes', 'Active'),
  createData('France', 'Karim Benzema', 'Yes', 'Active')
]

export default function index() {
  return (
    <TableContainer>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell align='center'>Captain</TableCell>
            <TableCell align='center'>Registered Squad</TableCell>
            <TableCell align='center'>Status</TableCell>
            <TableCell align='center'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row' sx={{ fontSize: '1.1rem' }}>
                {row.team}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: '1.1rem' }}>
                {row.captain}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: '1.1rem' }}>
                {row.registered}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: '1.1rem' }}>
                {row.active}
              </TableCell>
              <TableCell align='center'>
                <Button variant='contained' color='info'>
                  Manage
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
