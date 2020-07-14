import React from 'react'
import { WhitePortfolioContainer, RedHeaderBox, ThoughtsDesktopBigBox, ThoughtsDesktopCard, FeatureContainer, FeatureCard, FeatureTextContainer, ThoughtsTextContainer } from '../lib/container'
import { BoxHeader, TechBoxText, RedHeader, FeatureText, FeatureRedTitle, ThoughtTitle, ThoughtText } from '../lib/text'
import { FeatureImage, ThoughtImage } from '../lib/image'
import { ReadMore } from '../lib/icons'

export const Thoughts = () => {
  return (
    <WhitePortfolioContainer>
      <RedHeaderBox>
        <BoxHeader>MY THOUGHTS</BoxHeader>
      </RedHeaderBox>
      <ThoughtsDesktopBigBox>
        <ThoughtsDesktopCard>
          <ThoughtImage
            href='https://medium.com/@jihyunan42/dear-diary-i-learned-how-to-toggle-display-in-react-today-44f9c5b4fa91'
            alt='screenshot of blog post'
            mobileUrl={require(`../images/thoughts-mobile-toggle.jpg`)}
            desktopUrl={require(`../images/thoughts-1-desktop.jpg`)}
          />
          <ThoughtsTextContainer>
            <FeatureRedTitle>APR 2020</FeatureRedTitle>
            <ThoughtTitle>Dear diary, I learned how to toggle display in React today …</ThoughtTitle>
            <ThoughtText>I’m on week 15 out of 24-week frontend development bootcamp at Technigo.
            We started from vanilla HTML and CSS and some weeks later, we are building our own app using React and Redux.
            (OMG!) This week we are building a Todo app, using Redux. <ReadMore href='https://medium.com/@jihyunan42/dear-diary-i-learned-how-to-toggle-display-in-react-today-44f9c5b4fa91' />
            </ThoughtText>
          </ThoughtsTextContainer>
        </ThoughtsDesktopCard>
        <ThoughtsDesktopCard>
          <ThoughtImage
            href='https://medium.com/@jihyunan42/things-im-taking-with-me-after-fantastic-24-weeks-of-coding-c5cbe535d76c'
            alt='screenshot of blog post'
            mobileUrl={require(`../images/thoughts-2-mobile.jpg`)}
            desktopUrl={require(`../images/thoughts-desktop-2.jpg`)}
          />
          <ThoughtsTextContainer>
            <FeatureRedTitle>JUL 2020</FeatureRedTitle>
            <ThoughtTitle>Fantastic 24 weeks of coding in retrospective.</ThoughtTitle>
            <ThoughtText>This spring I made a leap into the world of unknown, that is the world of code.
            I started from knowing virtually nothing about code and the following 24 weeks of learning code was,
          well, a bit of a rollercoaster ride. <ReadMore href='https://medium.com/@jihyunan42/things-im-taking-with-me-after-fantastic-24-weeks-of-coding-c5cbe535d76c' />
            </ThoughtText>
          </ThoughtsTextContainer>
        </ThoughtsDesktopCard>
      </ThoughtsDesktopBigBox>
    </WhitePortfolioContainer>
  )
}

export default Thoughts