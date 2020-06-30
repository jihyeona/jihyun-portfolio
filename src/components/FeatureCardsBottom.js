import React from 'react'
import { FeatureCard, FeatureTextContainer, TagContainer, TagBox } from '../lib/container'
import { FeatureImage } from '../lib/image'
import { FeatureRedTitle, FeatureText, TagText } from '../lib/text'

export const FeatureCardsBottom = () => {
  return (
    <>
      <FeatureCard>
        <FeatureImage
          href='https://sad-minsky-5935bc.netlify.app'
          alt='screenshot of feature project'
          src={require(`../images/movie-project-desktop.png`)}
        />
        <FeatureTextContainer>
          <FeatureRedTitle>TOP RATED FILMS.</FeatureRedTitle>
          <FeatureText>Web page showing top rated films using open API source</FeatureText>
        </FeatureTextContainer>
        <TagContainer>
          <TagBox>
            <TagText>Javascript</TagText>
          </TagBox>
          <TagBox>
            <TagText>React</TagText>
          </TagBox>
          <TagBox>
            <TagText>CSS</TagText>
          </TagBox>
        </TagContainer>
      </FeatureCard>
      <FeatureCard>
        <FeatureImage
          href='https://practical-bassi-d5a5e9.netlify.app/'
          alt='screenshot of feature project'
          src={require(`../images/todo-desktop-feature.png`)}
        />
        <FeatureTextContainer>
          <FeatureRedTitle>TO DO APP.</FeatureRedTitle>
          <FeatureText>Web app to create to-do list</FeatureText>
        </FeatureTextContainer>
        <TagContainer>
          <TagBox>
            <TagText>Redux</TagText>
          </TagBox>
          <TagBox>
            <TagText>React</TagText>
          </TagBox>
          <TagBox>
            <TagText>Javascript</TagText>
          </TagBox>
        </TagContainer>
      </FeatureCard>
    </>
  )
}

export default FeatureCardsBottom