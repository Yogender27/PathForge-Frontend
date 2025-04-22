import React from 'react'
import Sort from './Sort'
import JobCard from './JobCard'
import { jobList } from '../Data/Data'

const Jobs = () => {
  return (
    <div className='p-5'>
        <div className='flex justify-between'>
        <div className='text-mine-shaft-300 text-2xl font-semibold'>Recommended jobs</div>
        <Sort/>
      
    </div>
    <div className='mt-10 flex flex-wrap gap-6'>
    {jobList.map((job,index)=><JobCard key={index} {...job}/>)}
    </div>
    </div>
  )
}

export default Jobs
