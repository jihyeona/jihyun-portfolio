import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { IntroText } from './components/IntroText'
import { TechSection } from './components/TechSection'
import { Features } from './components/Features'
import { Thoughts } from './components/Thoughts'
import { Skills } from './components/Skills'
import { ForMore } from './components/ForMore'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <IntroText />
      <TechSection />
      <Features />
      <Thoughts />
      <Skills />
      <ForMore />
      <Footer />
    </>
  )
}

export default App
