import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListeninig from '../components/JobListeninig'
import AppDownload from '../components/AppDownload'
import Fotter from '../components/Fotter'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <JobListeninig/>
      <AppDownload/>
      <Fotter/>
    </div>
  )
}

export default Home
