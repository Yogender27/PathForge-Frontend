import React from 'react'
import Header from '../Header/Header'
import DreamJob from '../LandingPage/DreamJob'
import Company from '../LandingPage/Company'
import JobCategory from '../LandingPage/JobCategory'
import Footer from '../Footer/Footer'

const HomePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>
        
        <DreamJob/>
        <Company/>
        <JobCategory/>
      
      
    </div>
  )
}

export default HomePage
