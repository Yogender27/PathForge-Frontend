import { Avatar, Button, Divider, Text } from '@mantine/core'
import { IconBookmark, IconClockHour3, IconHeart, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

const TalentCard = (props:any) => {
  return (
    <div className='bg-mine-shaft-700 w-96 p-4 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400'>
        <div className='flex px-2 justify-between'>
        <div className='flex gap-4'>
        <div className='p-2'>

<Avatar src={`/icons/${props.company}.png`} alt="" />

</div>

<div>
<div className='font-semibold text-mine-shaft-200'>{props.name}</div>
<div className='text-xs'> {props.company} &bull; {props.role}</div>

</div>
        </div>
        <div>
            <IconHeart/>
        </div>
        </div>

        <div className='flex gap-2 text-xs items-center justify-center pt-4'>
            {props.topSkills?.map((skill : any,index : any)=><div key={index}
            className='bg-mine-shaft-900 p-1.5 rounded-xl text-bright-sun-400'>{skill}</div>)}
        </div>
        <div className='py-2'>
        <Text   size='xs' lineClamp={3}>{props.about}

        </Text>
        </div>
        <Divider size="xs" mx="md"/>

        <div className='py-2 flex justify-between'>
            <div className='font-semibold text-mine-shaft-50'>
             {props.expectedCtc}
            </div>
            <div className='flex gap-2 text-xs items-center p-2'>
                <IconMapPin stroke={1.5} size={20}/> {props.location}
            </div>
        </div>
        <Divider size="xs" mx="md"/>
        <div className='flex justify-between p-2 mt-4 [&>*]:w-1/2 [&>*]:p-1' >
            <Link to="/talent-profile">
            <Button color='yellow' variant='outline' fullWidth>Profile</Button>
            </Link>
            <div>
            <Button color='yellow' variant='light' fullWidth>Message</Button>
            </div>
        </div>
    
    
      
    </div>
  )
}

export default TalentCard;
