import React from 'react'
import { WhitePortfolioContainer, RedHeaderBox } from '../lib/container'
import { BoxHeader, TechBoxText } from '../lib/text'

export const TechSection = () => {
  return (
    <WhitePortfolioContainer>
      <RedHeaderBox>
        <BoxHeader>TECH</BoxHeader>
      </RedHeaderBox>
      <TechBoxText>
        JavaScript, React, Redux, CSS, HTML, Node.js, MongoDB, MongoCompass, Git, Heroku, React Native
      </TechBoxText>
    </WhitePortfolioContainer>
  )
}

export default TechSection