import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

export const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 650px;
  width: 100%;
  background-image: url(${require(`../images/IMG_0164.JPG`)});
  background-position: inherit;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1024px) {
    max-width: -webkit-fill-available;
    width: 100%;
    background-image: url(${require(`../images/IMG_8053.JPG`)});
    background-position: inherit;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
`

export const IconHeader = styled.div`
  padding-top: 185px;
  padding-right: 10px;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  @media (min-width: 1024px) {
    padding-top: 10%;
    padding-right: 10%;
  }
`
export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding-top: 10px;
  padding-left: 41px;
  font-family: 'Montserrat';
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    margin-top: 55px;
  }
`
export const ProfileContainer = styled.div`
@media (min-width: 668px) {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
} 
`
export const ProfileImageContainer = styled.div`
  display: block;
  @media (min-width: 668px) and (max-width: 1023px) {
    display: flex;
  }
`
export const GreyPortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: fit-content;
  width: 100%;
  background-color: #F4F4F4;
  padding-bottom: 20px;
  @media (min-width: 1024px) {
    max-width: -webkit-fill-available;
    padding-top: 125px;
    padding-right: 100px;
    padding-left: 100px;
    padding-bottom: 100px;
  }
`
export const WhitePortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: fit-content;
  width: 100%;
  background-color: #FFFFFF;
  padding-bottom: 50px;
  @media (min-width: 1024px) {
    max-width: -webkit-fill-available;
    padding-right: 100px;
    padding-left: 100px;
    padding-bottom: 100px;
  }
`

export const RedHeaderBox = styled.div`
  background-color: #ffa931;
  margin-top: 3em;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: min-content;
  min-height: min-content;
  @media (min-width: 1024px) {
    margin: 5em 0em;
  }
`
export const FeatureDesktopBigBox = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`
export const ThoughtsDesktopBigBox = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
    width: 100%;
  }
`
export const FeatureContainer = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 668px) and (max-width: 1023px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: baseline;
    width: 100%;
  }
`
export const ThoughtsDesktopCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
  }
`
export const FeatureCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    width: 50%;
  }
`
export const FeatureTextContainer = styled.div`
  display: flex;
  flex-wrap: row wrap;
  margin: 5px 30px;
  @media (min-width: 1024px) {
    display: flex;
    width: 95%;
    margin-top: 10px;
}
`
export const ThoughtsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 30px;
  @media (min-width: 1024px) {
    display: flex;
    width: 95%;
    margin-top: 30px;
}
`
export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin: 10px 30px 20px 30px;
  @media (min-width: 1024px) {
    width: 100%;
    margin: 10px 30px 20px 15px;
}
`
export const TagBox = styled.div`
  border: 1px solid #ff847c;
  background-color: #ff847c;
  margin-right: 4px;
  padding: 2px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: min-content;
  min-height: min-content;
  @media (min-width: 1024px) {
    margin-right: 6px;
  }
`
export const MovingBackground = keyframes`
0%{background-position:0% 50%}
50%{background-position:100% 50%}
100%{background-position:0% 50%}
} 
`
export const MovingPortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: fit-content;
  width: 100%;
  background-size: 110% 110%;
  background-image: linear-gradient(270deg, #ffaaa6, #dcedc2, #ffd3b5);
  animation: ${MovingBackground} 5s ease infinite;
  padding-bottom: 20px;
  @media (min-width: 1024px) {
    max-width: -webkit-fill-available;
    padding: 2em 6.5em 6.5em 6.5em;
  }
`
export const OtherFeatureBigBox = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`
export const OtherFeature = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HideDisplay = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    width: 50%;
  }
`
export const HideFeatureCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    width: 100%;
  }
`
export const SkillsDesktopBigBox = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
    width: 100%;
    padding: 0em 2em;
  }
`
export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
`
export const SkillsList = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: min-content;
  margin: 0px 0.6em;
  text-align: center;
  @media (min-width: 1024px) {
    margin: 0em 0.05em;
  }
`
export const ColorIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-left: 2em;
  @media (max-width: 668px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`
export const ColorIconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0em 0em 0em;
  @media (min-width: 1024px) {
    margin: 1em 5em;
  }
`










