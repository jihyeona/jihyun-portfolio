import React from 'react'
import { MainHeader, IconHeader, HeaderTextContainer, ProfileContainer, ProfileImageContainer } from '../lib/container'
import { Icon } from '../lib/icons'
import { HeaderTitle, HeaderBigTitle, HeaderSubtext } from '../lib/text'
import { ProfileImage } from '../lib/image'

export const Header = () => {

  return (
    <MainHeader>
      <IconHeader>
        <Icon href='https://www.linkedin.com/in/jihyun-an-405431150/' src={require('../assets/linkedin-white-desktop.svg')} alt='linkedin' />
        <Icon href='https://github.com/jihyeona' src={require('../assets/github-white-desktop.svg')} alt='github' />
        <Icon href='https://stackoverflow.com/users/12668843/jihyeon' src={require('../assets/stack-white-desktop.svg')} alt='stackoverflow' />
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