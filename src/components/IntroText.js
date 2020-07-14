import React from 'react'
import { GreyPortfolioContainer, MovingPortfolioContainer } from '../lib/container'
import { FirstBoxText, BoxText } from '../lib/text'

export const IntroText = () => {
  return (
    <MovingPortfolioContainer>
      <FirstBoxText>
        Hello! <span role='img' aria-label='sun-emoji'> 🌞</span> I'm a frontend developer with a MSc in Sustainable Urban Planning and Design.
      </FirstBoxText>
      <BoxText>
        Building clean and intuitive functionalities is one of my goals as a web developer.
        I'm passionate about efficient and structured code <span role='img' aria-label='puzzle-piece-emoji'> 🧩</span>
      </BoxText>
      <BoxText>
        Frontend and backend development both excite me, and I would love to work in a team where I can learn along with new challenges! <span role='img' aria-label='rocket-emoji'> 🚀</span>
      </BoxText>
    </MovingPortfolioContainer>
  )
}

export default IntroText