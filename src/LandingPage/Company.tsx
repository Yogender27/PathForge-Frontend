import React from 'react'
import Marquee from 'react-fast-marquee'
import { companies } from '../Data/Data'

const Company = () => {
  return (
    <div className='mt-10'>

        <div className=' text-4xl font-semibold text-mine-shaft-100 text-center '>Trusted by <span className=' text-bright-sun-400'>1000+ </span> companies</div>
        <Marquee className='py-10'>
        {companies.map((company,index)=><div key={index} className='mx-8 px-2 py-1  hover:bg-mine-shaft-900 rounded-xl'>

            <img className='h-14' src={`/Companies/${company}.png`} />

        </div>)}

        </Marquee>
      
    </div>
  )
}

export default Company
