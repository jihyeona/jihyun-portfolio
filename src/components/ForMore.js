import React from 'react'
import { WhitePortfolioContainer, ColorIconContainer, ColorIconCard } from '../lib/container'
import { FooterHeader, ColorIconText } from '../lib/text'
import { ColorIcon } from '../lib/icons'

export const ForMore = () => {
  return (
    <WhitePortfolioContainer>
      <FooterHeader>FOR MORE</FooterHeader>
      <ColorIconContainer>
        <ColorIconCard>
          <ColorIcon href='https://www.linkedin.com/in/jihyun-an-405431150/'
            alt='linkedin'
            mobileUrl={require(`../assets/linkedin-red-mobile.svg`)}
            desktopUrl={require(`../assets/linkedin-desktop-more.svg`)} />
          <ColorIconText>LINKEDIN</ColorIconText>
        </ColorIconCard>
        <ColorIconCard>
          <ColorIcon href='https://github.com/jihyeona'
            alt='github'
            mobileUrl={require(`../assets/github-red-mobile.svg`)}
            desktopUrl={require(`../assets/github-desktop-more.svg`)} />
          <ColorIconText>GITHUB</ColorIconText>
        </ColorIconCard>
        <ColorIconCard>
          <ColorIcon href='https://stackoverflow.com/users/12668843/jihyeon'
            alt='stackoverflow'
            mobileUrl={require(`../assets/stack-red-mobile.svg`)}
            desktopUrl={require(`../assets/stack-desktop-more.svg`)} />
          <ColorIconText>STACKOVERFLOW</ColorIconText>
        </ColorIconCard>
      </ColorIconContainer>
    </WhitePortfolioContainer>
  )
}

export default ForMore