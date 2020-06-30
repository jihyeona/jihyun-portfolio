import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { IntroText } from './components/IntroText'
import { TechSection } from './components/TechSection'
import { Features } from './components/Features'

export const App = () => {
  return (
    <>
      <Header />
      <IntroText />
      <TechSection />
      <Features />
    </>
  )
}

export default App
