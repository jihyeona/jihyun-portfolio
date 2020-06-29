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
    margin-bottom: 125px;
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
export const RedHeaderBox = styled.div`
  background-color: #FA382F;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: min-content;
  min-height: min-content;
`
