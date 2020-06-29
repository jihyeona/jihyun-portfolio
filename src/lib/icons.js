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
  @media (min-width: 668px) and (max-width: 1023px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;
    margin-right: 11px;
  }
`
export const Icon = ({ href, src, alt }) => {
  return (
    <IconLink href={href} >
      <img src={src} alt={alt} />
    </IconLink>
  )
}