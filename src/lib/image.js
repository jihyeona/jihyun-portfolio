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