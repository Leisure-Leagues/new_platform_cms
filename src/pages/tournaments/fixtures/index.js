import React from 'react'
import Alert from '@mui/material/Alert'
import FixtureList from './FixtureList'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { useState } from 'react'

const data = [
  {
    group: 'Group A',
    date: '16/02/2024',
    time: '16:00',
    homeTeam: {
      name: 'England',
      image: '/images/flags/Flag-England.webp'
    },
    awayTeam: {
      name: 'Spain',
      image: '/images/flags/Flag_of_Spain.svg.png'
    }
  },
  {
    group: 'Group B',
    date: '16/02/2024',
    time: '17:00',
    homeTeam: {
      name: 'France',
      image: '/images/flags/Flag_of_France.svg.png'
    },
    awayTeam: {
      name: 'Germany',
      image: '/images/flags/Flag-Germany.webp'
    }
  },
  {
    group: 'Group A',
    date: '17/02/2024',
    time: '16:00',
    homeTeam: {
      name: 'Italy',
      image: '/images/flags/it.png'
    },
    awayTeam: {
      name: 'Greece',
      image: '/images/flags/Flag_of_Greece.svg.webp'
    }
  },
  {
    group: 'Group B',
    date: '17/02/2024',
    time: '17:00',
    homeTeam: {
      name: 'Belgium',
      image: '/images/flags/Flag_of_Belgium_(civil).svg.png'
    },
    awayTeam: {
      name: 'Mexico',
      image: '/images/flags/Flag-Mexico.webp'
    }
  },
  {
    group: 'Group C',
    date: '17/02/2024',
    time: '18:00',
    homeTeam: {
      name: 'Belgium',
      image: '/images/flags/Flag_of_Belgium_(civil).svg.png'
    },
    awayTeam: {
      name: 'Mexico',
      image: '/images/flags/Flag-Mexico.webp'
    }
  }
]

const uniqueDates = Array.from(new Set(data.map(fixture => fixture.date)))
const uniqueGroups = Array.from(new Set(data.map(fixture => fixture.group)))

const TournamentFixtures = () => {
  const [sortByOption, setSortByOption] = useState('date')

  const handleSort = e => {
    setSortByOption(e.target.value)
  }

  return (
    <>
      <Alert severity='error' sx={{ mt: 5, mb: 5 }}>
        Before generating fixtures, ensure all teams have been assigned to a group and you have confirmed the settings
        for the knockout bracket
      </Alert>
      Sort By
      <Select labelId='sort-by' id='sort-by' value={sortByOption} sx={{ ml: 4 }} onChange={e => handleSort(e)}>
        <MenuItem value='date'>Date / Time</MenuItem>
        <MenuItem value='groups'>Groups</MenuItem>
      </Select>
      {sortByOption === 'date' &&
        uniqueDates.map((date, index) => <FixtureList key={index} fixtures={data} date={date} sortBy={sortByOption} />)}
      {sortByOption === 'groups' &&
        uniqueGroups.map((group, index) => (
          <FixtureList key={index} fixtures={data} group={group} sortBy={sortByOption} />
        ))}
    </>
  )
}

export default TournamentFixtures
