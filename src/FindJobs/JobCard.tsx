import { Divider, Text } from '@mantine/core'
import { IconBookmark, IconClockHour3 } from '@tabler/icons-react'
import React from 'react'

const JobCard = (props:any) => {
  return (
    <div className='bg-mine-shaft-700 w-72 p-4 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400'>
        <div className='flex px-2 justify-between'>
        <div className='flex gap-4'>
        <div className='p-2'>

<img className=' h-8' src={`/icons/${props.company}.png`} alt="" />

</div>

<div>
<div className='font-semibold text-mine-shaft-200'>{props.jobTitle}</div>
<div className='text-xs'> {props.company} &#x2022; {props.applicants} Applicants</div>

</div>
        </div>
        <div>
            <IconBookmark/>
        </div>
        </div>

        <div className='flex gap-2 text-xs items-center justify-center pt-4'>
            <div className='bg-mine-shaft-900 p-1.5 rounded-xl text-bright-sun-400'>{props.experience}</div>
            <div className='bg-mine-shaft-900 p-1.5 rounded-xl text-bright-sun-400'>{props.jobType}</div>
            <div className='bg-mine-shaft-900 p-1.5 rounded-xl text-bright-sun-400'>{props.location}</div>
        </div>
        <div className='py-2'>
        <Text   size='xs' lineClamp={3}>{props.description}

        </Text>
        </div>
        <Divider size="xs" mx="md"/>

        <div className='py-2 flex justify-between'>
            <div className='font-semibold text-mine-shaft-50'>
            &#8377; {props.package}
            </div>
            <div className='flex gap-2 text-xs items-center p-2'>
                <IconClockHour3 stroke={1.5} size={20}/> {props.postedDaysAgo} days ago
            </div>
        </div>
    
    
      
    </div>
  )
}

export default JobCard
