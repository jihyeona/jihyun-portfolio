import React from 'react'
import styled from 'styled-components/macro'

export const IconLink = styled.a`
  border: 3px solid white;
  width: 39px;
  height: 39px;
  border-radius: 50%;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.mobileUrl ? props.mobileUrl : require(`../assets/linkedin-white-mobile.svg`)});
  background-size: inherit;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 668px) and (max-width: 1023px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  @media (min-width: 1024px) {
    background-image: url(${props => props.desktopUrl ? props.desktopUrl : `../assets/linkedin-white-desktop.svg`});
    width: 80px;
    height: 80px;
    margin-right: 11px;
  }
`
export const ColorIconLink = styled.a`
  border: 3px solid #ffa931;
  width: 39px;
  height: 39px;
  border-radius: 50%;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.mobileUrl ? props.mobileUrl : require(`../assets/linkedin-white-mobile.svg`)});
  background-size: inherit;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 668px) and (max-width: 1023px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  @media (min-width: 1024px) {
    background-image: url(${props => props.desktopUrl ? props.desktopUrl : `../assets/linkedin-white-desktop.svg`});
    width: 160px;
    height: 160px;
  }
`
export const LinkArrowWrap = styled.a`
  font-family: 'Roboto';
  font-size: 17px;
  color: #ffa931;
  text-align: left;
  text-decoration: underline;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`

// export const IconAsset = styled.img.attrs({
//   src: `${props => props.mobileUrl ? props.mobileUrl : require(`../assets/linkedin-white-mobile.svg`)}`
//   @media (min-width: 1024px) {

//   }
// })`

// `
export const Icon = ({ href, alt, mobileUrl, desktopUrl }) => (
  <IconLink href={href} alt={alt} mobileUrl={mobileUrl} desktopUrl={desktopUrl} />
);

export const ColorIcon = ({ href, alt, mobileUrl, desktopUrl }) => (
  <ColorIconLink href={href} alt={alt} mobileUrl={mobileUrl} desktopUrl={desktopUrl} />
);


// export const Icon = ({ href, src, alt }) => {
//   return (
//     <IconLink href={href} >
//       <img src={src} alt={alt} />
//     </IconLink>
//   )
// }

export const LinkArrow = ({ href }) => {
  return (
    <LinkArrowWrap href={href}>
      <span role='img' aria-label='orange-emoji'>🍊</span>
    </LinkArrowWrap>
  )
}
export const ReadMore = ({ href }) => {
  return (
    <LinkArrowWrap href={href}>
      <span role='img' aria-label='writing-hand-emoji'>✍🏼</span>
    </LinkArrowWrap>
  )
}