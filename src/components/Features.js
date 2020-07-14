import React from 'react'
import { GreyPortfolioContainer, FeatureDesktopBigBox, FeatureContainer, RedHeaderBox, MovingPortfolioContainer, OtherFeatureBigBox, OtherFeature, FeatureTextContainer, TagContainer, TagBox } from '../lib/container'
import { BoxHeader, RedHeader, FeatureRedTitle, FeatureText, TagText } from '../lib/text'
import { FeatureCardsTop } from './FeatureCardsTop'
import { FeatureCardsBottom } from './FeatureCardsBottom'
import { LinkArrow } from '../lib/icons'

export const Features = () => {
  return (
    <MovingPortfolioContainer>
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
      <RedHeader>OTHER PROJECTS</RedHeader>
      <OtherFeatureBigBox>
        <OtherFeature>
          <FeatureTextContainer>
            <FeatureRedTitle>PROJECT AUTH.</FeatureRedTitle>
            <FeatureText>Web page for signing up and in users.</FeatureText>
            <LinkArrow href=' https://modest-bell-37cf0d.netlify.app/ ' />
          </FeatureTextContainer>
          <TagContainer>
            <TagBox>
              <TagText>Redux</TagText>
            </TagBox>
            <TagBox>
              <TagText>Mongoose</TagText>
            </TagBox>
            <TagBox>
              <TagText>MongoDB</TagText>
            </TagBox>
            <TagBox>
              <TagText>Pair-programming</TagText>
            </TagBox>
          </TagContainer>
        </OtherFeature>
        <OtherFeature>
          <FeatureTextContainer>
            <FeatureRedTitle>FOOD SCANNER.</FeatureRedTitle>
            <FeatureText>Web app that scans the origin of food product.</FeatureText>
            <LinkArrow href='https://condescending-villani-5eeb9b.netlify.app' />
          </FeatureTextContainer>
          <TagContainer>
            <TagBox>
              <TagText>Javascript</TagText>
            </TagBox>
            <TagBox>
              <TagText>Redux</TagText>
            </TagBox>
            <TagBox>
              <TagText>Pair-programming</TagText>
            </TagBox>
          </TagContainer>
        </OtherFeature>
        <OtherFeature>
          <FeatureTextContainer>
            <FeatureRedTitle>MUSIC RELEASE.</FeatureRedTitle>
            <FeatureText>Web page showing 50 new album using Spotify API.</FeatureText>
            <LinkArrow href='https://stoic-sinoussi-9bfb22.netlify.app/' />
          </FeatureTextContainer>
          <TagContainer>
            <TagBox>
              <TagText>Javascript</TagText>
            </TagBox>
            <TagBox>
              <TagText>React</TagText>
            </TagBox>
            <TagBox>
              <TagText>Pair-programming</TagText>
            </TagBox>
          </TagContainer>
        </OtherFeature>
      </OtherFeatureBigBox>
    </MovingPortfolioContainer>
  )
}

export default Features