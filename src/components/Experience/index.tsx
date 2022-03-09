import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { useTheme } from 'styled-components';
import { StyledText } from '../StyledText';
import * as S from './styles';


export const Experience: React.FC = () => {

  const [ active, setActive ] = useState('macohin')

  const experiences = [
    {
      id: 1,
      identifier: 'macohin',
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
      title: 'Front-end Engineer',
      date: 'May 2021 - current',
      topics: [
        'Web Development in React Js and Next Js.',
        'Mobile app maintenance built on Ionic.',
        'Full mobile app development built on React Native',
        'Backend consumption using REST Api and GraphQl.',
      ]
    },
  ]

  const handleExperience = (item: string ) => {
    setActive(item);
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
            <S.NavButton isActive={active === 'macohin'} onClick={() => handleExperience('macohin')}>
              <StyledText
                text="Macohin"
                fontSize={1}
                isSerif
                fontWeight={400}
                color={theme.colors.silver_light}
              />
            </S.NavButton>
            <S.NavButton isActive={active === 'dwv'} onClick={() => handleExperience('dwv')}>
              <StyledText
                text="DWV App"
                fontSize={1}
                isSerif
                fontWeight={400}
                color={theme.colors.silver_light}
              />
            </S.NavButton>
          </S.NavBar>

        {experiences.map(item => active === item.identifier && (
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
              fontSize={.8}
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
                  fontSize={.9}
                  fontWeight={300}
                  style={{ marginLeft: 16 }}
                  color={theme.colors.silver_light}
                  align="left"
                />
              </S.ExperienceRow>
            ))}
          </S.ExperienceContent>
        ))}

        </S.Content>
    </S.Container>
  )
}
