import React from 'react'
import { FeatureCard, FeatureTextContainer, TagContainer, TagBox } from '../lib/container'
import { FeatureImage } from '../lib/image'
import { FeatureRedTitle, FeatureText, TagText } from '../lib/text'

export const FeatureCardsTop = () => {
  return (
    <>
      <FeatureCard>
        <FeatureImage
          href='https://heartpix.netlify.app/'
          alt='screenshot of feature project'
          src={require(`../images/heartpix-desktop.png`)}
        />
        <FeatureTextContainer>
          <FeatureRedTitle>HEART PIX.</FeatureRedTitle>
          <FeatureText>Web app to create polls and upvote items</FeatureText>
        </FeatureTextContainer>
        <TagContainer>
          <TagBox>
            <TagText>React</TagText>
          </TagBox>
          <TagBox>
            <TagText>Redux</TagText>
          </TagBox>
          <TagBox>
            <TagText>Node.js</TagText>
          </TagBox>
          <TagBox>
            <TagText>Mongoose</TagText>
          </TagBox>
          <TagBox>
            <TagText>MongoDB</TagText>
          </TagBox>
          <TagBox>
            <TagText>RESTful APIs</TagText>
          </TagBox>
        </TagContainer>
      </FeatureCard>
      <FeatureCard>
        <FeatureImage
          href='https://trusting-shannon-7747f8.netlify.com'
          alt='screenshot of feature project'
          src={require(`../images/happyfeaturedesktop.png`)}
        />
        <FeatureTextContainer>
          <FeatureRedTitle>HAPPY THOUGHTS.</FeatureRedTitle>
          <FeatureText>Twitter-like web SNS app to share happy thoughts</FeatureText>
        </FeatureTextContainer>
        <TagContainer>
          <TagBox>
            <TagText>Javascript</TagText>
          </TagBox>
          <TagBox>
            <TagText>React</TagText>
          </TagBox>
          <TagBox>
            <TagText>Mongoose</TagText>
          </TagBox>
          <TagBox>
            <TagText>MongoDB</TagText>
          </TagBox>
        </TagContainer>
      </FeatureCard>
    </>
  )
}

export default FeatureCardsTop