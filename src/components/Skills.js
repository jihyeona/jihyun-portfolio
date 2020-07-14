import React from 'react'
import { MovingPortfolioContainer, RedHeaderBox, SkillsDesktopBigBox, SkillsContainer, SkillsList } from '../lib/container'
import { BoxHeader, SkillsTheme, SkillsText } from '../lib/text'

export const Skills = () => {
  return (
    <MovingPortfolioContainer>
      <RedHeaderBox>
        <BoxHeader>SKILLS</BoxHeader>
      </RedHeaderBox>
      <SkillsDesktopBigBox>
        <SkillsContainer>
          <SkillsList>
            <SkillsTheme>CODE</SkillsTheme>
            <SkillsText>JavaScript</SkillsText>
            <SkillsText>React</SkillsText>
            <SkillsText>Redux</SkillsText>
            <SkillsText>Node.js</SkillsText>
            <SkillsText>CSS</SkillsText>
            <SkillsText>HTML</SkillsText>
          </SkillsList>
        </SkillsContainer>
        <SkillsContainer>
          <SkillsList>
            <SkillsTheme>TOOLBOX</SkillsTheme>
            <SkillsText>Git</SkillsText>
            <SkillsText>MongoDB</SkillsText>
            <SkillsText>MongoCompass</SkillsText>
            <SkillsText>Postman</SkillsText>
            <SkillsText>Heroku</SkillsText>
            <SkillsText>Cloudinary</SkillsText>
          </SkillsList>
        </SkillsContainer>
        <SkillsContainer>
          <SkillsList>
            <SkillsTheme>MORE</SkillsTheme>
            <SkillsText>Sustainable Development</SkillsText>
            <SkillsText>Urban planning and design</SkillsText>
            <SkillsText>Social sustainability</SkillsText>
            <SkillsText>Pedagogical skills</SkillsText>
            <SkillsText>Communication skills</SkillsText>
          </SkillsList>
        </SkillsContainer>
        <SkillsContainer>
          <SkillsList>
            <SkillsTheme>UPCOMING</SkillsTheme>
            <SkillsText>TypeScript</SkillsText>
            <SkillsText>Angular</SkillsText>
            <SkillsText>WebSocket</SkillsText>
            <SkillsText>Postgres</SkillsText>
            <SkillsText>Fullstack</SkillsText>
          </SkillsList>
        </SkillsContainer>
      </SkillsDesktopBigBox>
    </MovingPortfolioContainer>
  )
}

export default Skills