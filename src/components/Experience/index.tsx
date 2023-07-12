import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { BiRightArrow } from 'react-icons/bi'
import { useTheme } from 'styled-components'
import { StyledText } from '../StyledText'
import * as S from './styles'

interface IExperiencesProps {
  id: number
  identifier: string
  name: string
  title: string
  date: string
  topics: string[]
}

export const Experience: React.FC = () => {
  const [active, setActive] = useState('macohin')

  const experiences: IExperiencesProps[] = [
    {
      id: 1,
      identifier: 'macohin',
      name: 'Macohin',
      title: 'IT Support and Front-end Engineer',
      date: 'March 2020 - May 2021',
      topics: [
        'Providing customer and employee support.',
        'Survey of web system requirements and needs.',
        'Front-end development of web system for pension calculations using ReactJs.'
      ]
    },
    {
      id: 2,
      identifier: 'dwv',
      name: 'DWV',
      title: 'Front-end Engineer',
      date: 'May 2021 - April 2022',
      topics: [
        'Web Development in React Js and Next Js.',
        'Mobile app maintenance built on Ionic.',
        'Full mobile app development built on React Native',
        'Backend integration using REST Api and GraphQl.'
      ]
    },
    {
      id: 3,
      identifier: 'nova',
      name: 'Nova Tendência',
      title: 'Front-end Engineer',
      date: 'April 2022 - current',
      topics: [
        'Web Development in React Js.',
        'Backend integration using REST Api.',
        'Requirements analysis and systems architecture.'
      ]
    }
  ]

  const handleExperience = (item: string) => {
    setActive(item)
  }

  const theme = useTheme()

  useEffect(() => {
    Aos.init({
      duration: 1500
    })
  }, [])

  return (
    <S.Container id="experience">
      <S.Header>
        <StyledText
          text="02. "
          fontSize={1.5}
          color={theme.colors.blue_lemon}
          isSerif
          style={{ marginRight: '.8rem' }}
        />
        <StyledText
          text="Experience"
          fontSize={1.5}
          color={theme.colors.white}
          fontWeight={700}
        />

        <S.Separator />
      </S.Header>

      <S.Content>
        <S.NavBar>
          {experiences.map(item => (
            <React.Fragment key={item.id}>
              <S.NavButton
                isActive={active === item.identifier}
                onClick={() => handleExperience(item.identifier)}
              >
                <StyledText
                  text={item.name}
                  fontSize={1}
                  isSerif
                  fontWeight={400}
                  color={theme.colors.silver_light}
                />
              </S.NavButton>
            </React.Fragment>
          ))}
        </S.NavBar>

        {experiences.map(
          item =>
            active === item.identifier && (
              <S.ExperienceContent key={item.id}>
                <StyledText
                  text={item.title}
                  fontSize={1.2}
                  color={theme.colors.silver_light}
                  fontWeight={500}
                  align="left"
                  style={{ marginBottom: 6 }}
                />
                <StyledText
                  text={item.date}
                  fontSize={0.8}
                  isSerif
                  color={theme.colors.silver_light}
                  fontWeight={400}
                  align="left"
                />

                {item.topics.map(topic => (
                  <S.ExperienceRow key={topic}>
                    <BiRightArrow color={theme.colors.blue_lemon} size={12} />
                    <StyledText
                      text={topic}
                      fontSize={0.9}
                      fontWeight={300}
                      style={{ marginLeft: 16 }}
                      color={theme.colors.silver_light}
                      align="left"
                    />
                  </S.ExperienceRow>
                ))}
              </S.ExperienceContent>
            )
        )}
      </S.Content>
    </S.Container>
  )
}
