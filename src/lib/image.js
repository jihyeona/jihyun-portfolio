import React from 'react'
import styled from 'styled-components/macro'

export const ProfileImage = styled.img`
  border: 2px solid white;
  width: 162px;
  height: 162px;
  border-radius: 50%;
  margin-top: 30%;
  margin-left: 40%;
  position: relative;
  @media (min-width: 668px) and (max-width: 1023px) {
    width: 230px;
    height: 230px;
    margin: 30px;
  } 
  @media (min-width: 1024px) {
    position: relative;
    width: 250px;
    height: 250px;
    border: 2px solid white;
    border-radius: 50%;
    margin: 0 30px 0 0;
  }
`

export const FeatureImageWrap = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-right: 5%;
  margin-left: 5%;
  @media (min-width: 1024px) {
    width: 95%;
    height: 300px;
  }
`
export const FeatureImg = styled.img`
  height: 400px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 1024px) {
    height: 300px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`

export const FeatureImage = ({ href, alt, src }) => {
  return (
    <FeatureImageWrap href={href}>
      <FeatureImg src={src} alt={alt} />
    </FeatureImageWrap>
  )
}

// background-image: url(${require(`../images/happyfeaturemobile.jpg`)});
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;

//   background-image: url(${require(`../images/happyfeaturedesktop.png`)});
//     background-size: contain;
//     background-position: center;
//     background-repeat: no-repeat;