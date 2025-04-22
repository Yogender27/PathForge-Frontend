import { IconBinoculars, IconBrandFacebook, IconBrandInstagram, IconBrandX } from '@tabler/icons-react'
import React from 'react'
import { footerLinks } from '../Data/Data'

const Footer = () => {
  return (
    <div className='pt-20 pd-5 flex gap-5 justify-around  font-["poppins"] bg-mine-shaft-950'>
      <div className='w-1/4 flex flex-col'>
      <div className=" flex items-center gap-2 text-bright-sun-400 ">
              <IconBinoculars stroke={1} className="h-10 w-10" />
              <h1 className=" text-xl font-semibold ">PathForge</h1>
            </div>
            <div className=' text-mine-shaft-300 '>Job portal with user profiles, skill updates, certifications, work experience and admin job postings.</div>
            <div className='flex text-mine-shaft-400 gap-3 pt-4'>
                <div><IconBrandFacebook/></div>
                <div><IconBrandInstagram/></div>
                <div><IconBrandX/></div>
            </div>
      

    </div>
    {footerLinks.map((item,index)=><div key={index}>

        <div className='text-bright-sun-400 text-lg font-semibold'>{item.title}</div>

        {item.link.map((link,index)=><div className='text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer'>
            {link}
            
        </div>)}


    </div>)}
    </div>
  )
}

export default Footer
