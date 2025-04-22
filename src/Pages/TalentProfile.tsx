import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

const TalentProfile = () => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] text-mine-shaft-300 p-4'>
        <Divider mx="md" size="xs"/>
        <Link to="/find-talent" className='my-4 inline-block'>
            <Button color='yellow' leftSection={<IconArrowLeft size={20} />} variant='light' >Back</Button>
            </Link>
      
    </div>
  )
}

export default TalentProfile
