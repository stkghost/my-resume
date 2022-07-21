import Aos from 'aos'
import React, { useEffect } from 'react'
import { BiRightArrow } from 'react-icons/bi'
import { useTheme } from 'styled-components'
import { StyledText } from '../StyledText'
import * as S from './styles'

export const About: React.FC = () => {
  const theme = useTheme()

  const skills = [
    {
      id: 1,
      skill: 'JavaScript'
    },
    {
      id: 2,
      skill: 'React Js'
    },
    {
      id: 3,
      skill: 'React Native'
    },
    {
      id: 4,
      skill: 'TypeScript'
    },
    {
      id: 5,
      skill: 'CSS'
    },
    {
      id: 6,
      skill: 'HTML'
    },
    {
      id: 7,
      skill: 'Next Js'
    },
    {
      id: 8,
      skill: 'Angular'
    }
  ]

  useEffect(() => {
    Aos.init({
      duration: 1500
    })
  }, [])

  return (
    <S.Container>
      <StyledText
        text="Hi, my name is"
        fontSize={1.3}
        isSerif
        color={theme.colors.blue_lemon}
        align="left"
      />
      <StyledText
        text="Gabriel Souza."
        fontSize={4.1}
        fontWeight={700}
        color={theme.colors.white}
        align="left"
      />
      <StyledText
        text="I am a Web and Mobile Developer."
        fontSize={4}
        fontWeight={700}
        color={theme.colors.silver_light}
        align="left"
      />

      <StyledText
        text="I'm a software engineer specializing in building exceptional digital experiences. Currently i'm in love with mobile applications using React Native and its entire ecosystem."
        fontSize={1.1}
        fontWeight={400}
        color={theme.colors.silver_light}
        align="left"
        style={{ marginTop: '1.5rem' }}
      />

      <S.AboutContainer id="about">
        <S.AboutHeader>
          <StyledText
            text="01. "
            fontSize={1.5}
            color={theme.colors.blue_lemon}
            isSerif
            style={{ marginRight: '.8rem' }}
          />
          <StyledText
            text="About Me"
            fontSize={1.5}
            color={theme.colors.white}
            fontWeight={700}
          />

          <S.Separator />
        </S.AboutHeader>

        <S.Content>
          <S.TextColumn>
            <StyledText
              text={`Hello! My name is Gabriel and I enjoy creating
things that live on the internet.
My interest in web development started back in 2016
when i watch a TV documentary about a startup that developed apps.
Using my smartphone and not knowing anything about how things
are done on it made me create a curiosity that was only satisfied when I started my first programming course!`}
              fontSize={1}
              fontWeight={400}
              color={theme.colors.silver_light}
              align="left"
              style={{ marginTop: '1.5rem', lineHeight: '1.4rem' }}
            />
            <StyledText
              text={`I am currently working in an IT consulting company as a systems analyst, working on an insurance project for one of the largest banks in the country.. My main focus these days is
improve my knowledge with Mobile and Web development in the React ecosystem.


I am also taking courses to get started in backend development
with technologies like Elixir and NodeJs.

              Here are a few technologies I’ve been working with recently:`}
              fontSize={1}
              fontWeight={400}
              color={theme.colors.silver_light}
              align="left"
              style={{ marginTop: '1.5rem', lineHeight: '1.4rem' }}
            />

            <S.SkillsWrapper>
              {skills.map(s => (
                <S.SkillRow key={s.id}>
                  <BiRightArrow color={theme.colors.blue_lemon} size={10} />
                  <StyledText
                    text={s.skill}
                    fontSize={0.8}
                    isSerif
                    color={theme.colors.silver_light}
                    style={{ letterSpacing: 2, marginLeft: '1rem' }}
                  />
                </S.SkillRow>
              ))}
            </S.SkillsWrapper>
          </S.TextColumn>

          <S.ImageColumn data-aos="fade-up">
            <S.MyPhoto
              src="https://github.com/stkghost.png"
              alt="Gabriel Souza"
            />
          </S.ImageColumn>
        </S.Content>
      </S.AboutContainer>
    </S.Container>
  )
}
