import React from 'react'
import { MainHeader, IconHeader, HeaderTextContainer, ProfileContainer, ProfileImageContainer } from '../lib/container'
import { Icon } from '../lib/icons'
import { HeaderTitle, HeaderBigTitle, HeaderSubtext } from '../lib/text'
import { ProfileImage } from '../lib/image'
import '../App.css'

export const Header = () => {

  return (

    <MainHeader>
      <IconHeader>
        <Icon href='https://www.linkedin.com/in/jihyun-an-405431150/'
          alt='linkedin'
          mobileUrl={require(`../assets/linkedin-white-mobile.svg`)}
          desktopUrl={require(`../assets/linkedin-white-desktop.svg`)} />
        <Icon href='https://github.com/jihyeona'
          alt='github'
          mobileUrl={require(`../assets/github-white-mobile.svg`)}
          desktopUrl={require(`../assets/github-white-desktop.svg`)} />
        <Icon href='https://stackoverflow.com/users/12668843/jihyeon'
          alt='stackoverflow'
          mobileUrl={require(`../assets/stack-white-mobile.svg`)}
          desktopUrl={require(`../assets/stack-white-desktop.svg`)} />
      </IconHeader>
      <HeaderTextContainer>

        <HeaderTitle>PORTFOLIO: JIHYUN AN</HeaderTitle>
        <HeaderBigTitle>frontend</HeaderBigTitle>
        <HeaderBigTitle>developer</HeaderBigTitle>

        <ProfileContainer>
          <HeaderSubtext>+sustainable development</HeaderSubtext>
          <ProfileImageContainer>
            <ProfileImage src={require('../images/portfolio.jpeg')} />
          </ProfileImageContainer>
        </ProfileContainer>
      </HeaderTextContainer>
    </MainHeader>

  )
}

export default Header