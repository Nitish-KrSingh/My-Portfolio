import React from 'react'
import HeroSection from '../HeroSection'
import MySkills from '../MySkills'
import AboutMe from '../AboutMe'
import MyPortfolio from '../MyPortfolio'
import ContactMe from '../ContactMe'
import Footer from '../Footer'
import Timeline from '../Timeline/Timeline'
export default function Home() {
  return (
    <>
      <HeroSection/>
      <MySkills/>
      <AboutMe/>
      <Timeline/>
      <MyPortfolio/>
      <ContactMe/>
      <Footer/>
    </>
  )
}
