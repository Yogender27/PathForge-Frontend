import { Avatar, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import React from 'react'

const DreamJob = () => {
  return (
    <div className='flex items-center px-16'>
      <div className='w-[45%] flex flex-col gap-3 '>
        <div className=' font-bold text-6xl text-mine-shaft-100 leading-tight'>Find your  <span className='text-bright-sun-500'>dream job</span> with us</div>
        <div className='text-lg text-mine-shaft-200'>Good life begins with a good company.Start seraching thousands of jobs in one place.</div>

        <div className='flex gap-2 mt-4'>
        <TextInput
        className='bg-mine-shaft-900 rounded-lg p-2 px-2 text-mine-shaft-100'
      variant="unstyled"
      label="Job title"
      placeholder="Software engineer"
    />
     <TextInput
     className='bg-mine-shaft-900 rounded-lg p-2 px-2 text-mine-shaft-100' 
      variant="unstyled"
      label="Job type"
      placeholder="Full-time"
    />
    <div className='flex justify-content-center items-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer'>
        <IconSearch className='h-[85%] w-[85%]'/>
    
    </div>
        </div>
      </div>
      <div className='w-[55%] flex justify-content-center items-center'>
        <div className=' w-[30rem]'>
            <img src="dream.png" alt="" />
            </div>
        </div>
      </div>
  )
}

export default DreamJob
