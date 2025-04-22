import React from 'react'
import SearchBar from '../FindJobs/SearchBar'
import { Divider } from '@mantine/core'
import Jobs from '../FindJobs/Jobs'

const FindJobs = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] text-mine-shaft-300'>
      <Divider mx="md" size="xs"/>
     <SearchBar/>
     <Jobs/>
    </div>
  )
}

export default FindJobs
