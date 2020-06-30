import React from 'react'
import { GreyPortfolioContainer, FeatureDesktopBigBox, FeatureContainer, FeatureCard, RedHeaderBox } from '../lib/container'
import { BoxHeader, FeatureRedTitle } from '../lib/text'
import { FeatureCardsTop } from './FeatureCardsTop'
import { FeatureCardsBottom } from './FeatureCardsBottom'

export const Features = () => {
  return (
    <GreyPortfolioContainer>
      <RedHeaderBox>
        <BoxHeader>FEATURED PROJECTS</BoxHeader>
      </RedHeaderBox>
      <FeatureDesktopBigBox>
        <FeatureContainer>
          <FeatureCardsTop />
        </FeatureContainer>
        <FeatureContainer>
          <FeatureCardsBottom />
        </FeatureContainer>
      </FeatureDesktopBigBox>
    </GreyPortfolioContainer>
  )
}

export default Features