import React from 'react'
import styled from 'styled-components/macro'

export const HeaderTitle = styled.p`
  font-size: 22px;
  font-weight: bolder;
  letter-spacing: 1.12px;
  color: gold;
  opacity: 1;
  letter-spacing: 0.52px;
  margin-bottom: 0;
  @media (min-width: 668px) and (max-width: 1023px) {
    font-size: 30px;
  }
  @media (min-width: 1024px) {
    font-size: 28px;
    padding-top: 0;
  }
`
export const HeaderBigTitle = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: gold;
  margin: 0px;
  @media (min-width: 668px) and (max-width: 1023px) {
    font-size: 50px;
  }
  @media (min-width: 1024px) {
    font-size: 82px;
    color: #FFFFFF;
  }
`
export const HeaderSubtext = styled.h2`
  font-weight: bold;
  font-size: 24px;
  color: gold;
  margin: 0px;
  @media (min-width: 668px) and (max-width: 1023px) {
    display: flex;
    font-size: 30px;
  }
  @media (min-width: 1024px) {
    font-size: 50px;
    color: #FFFFFF;
  }
`
export const BoxText = styled.p`
  font-family: 'Montserrat';
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  color: #000000;
  margin: 1.6em 1.3em 0em 1.3em;
  @media (min-width: 1024px) {
    font-size: 30px;
    text-align: left;
    margin: 0em 2.3em 0.5em 2.3em;
    line-height: 1.2;
  }
`
export const TechBoxText = styled.p`
  font-family: 'Montserrat';
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  color: #000000;
  margin: 1.6em 1.3em 0em 1.3em;
  @media (min-width: 1024px) {
    font-size: 30px;
    margin: 0em 2.3em 0.5em 2.3em;
    line-height: 1.2;
  }
`
export const BoxHeader = styled.h3`
  font-family: 'Montserrat';
  font-size: 21px;
  color: #FFFFFF;
  font-weight: bolder;
  margin: 0px;
  padding: 2px 5px;
  @media (min-width: 1024px) {
    font-size: 48px;
  }
`
export const FeatureRedTitle = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: bold;
  color: #FA382F;
  text-align: left;
  margin: 0;
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`
export const FeatureText = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: #000000;
  text-align: left;
  margin: 0;
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`
export const TagText = styled.p`
  font-family: 'Roboto';
  font-size: 9px;
  color: #2B2E34;
  text-align: center;
  margin: 0;
  @media (min-width: 1024px) {
    font-size: 16px;
    text-align: left;
  }
`
