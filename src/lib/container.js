import React from 'react'
import styled from 'styled-components/macro'

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
  padding-bottom: 30px;
  @media (min-width: 1024px) {
    max-width: -webkit-fill-available;
    padding-right: 100px;
    padding-left: 100px;
    padding-bottom: 100px;
  }
`

export const RedHeaderBox = styled.div`
  background-color: #FA382F;
  margin-top: 50px;
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
    flex-direction: row wrap;
    margin-top: 10px;
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
  border: 1px solid #FDDFE7;
  background-color: #FDDFE7;
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















