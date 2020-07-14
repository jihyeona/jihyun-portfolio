import React from 'react'
import { MovingPortfolioContainer } from '../lib/container'
import { FooterHeader, FooterText } from '../lib/text'

export const Footer = () => {
  return (
    <MovingPortfolioContainer>
      <FooterHeader>SAY HELLO!</FooterHeader>
      <FooterText>Jihyun An</FooterText>
      <FooterText>jihyunan42@gmail.com</FooterText>
    </MovingPortfolioContainer>
  )
}

export default Footer