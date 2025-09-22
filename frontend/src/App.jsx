import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AutoSliderHero from './components/AutoSliderHero';
import ServicesSection from './components/ServicesSection'
import BusinessStrategy from './components/BusinessStrategy'
import TextComp from './components/TextComp'
import Services2Component from './components/Services2'
import HeroGuidance from './components/HeroGuidance'
import FooterContact from './components/FooterContact'
function App() {


  return (
    <>
     
        <Header/>
        <AutoSliderHero/>
        <ServicesSection/>
        <BusinessStrategy/>
       <TextComp/>
       <Services2Component/>
       <HeroGuidance/>
       <FooterContact/>
       
    </>
  )
}

export default App
