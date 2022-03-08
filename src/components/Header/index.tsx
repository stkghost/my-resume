import React from 'react'
import { useTheme } from 'styled-components'
import { StyledText } from '../StyledText'
import * as S from './styles'

export const Header: React.FC = () => {
  const theme = useTheme()

  const buttons = [
    {
      id: 1,
      title: 'About',
      to: 'about'
    },
    {
      id: 2,
      title: 'Experience',
      to: 'experience'
    },
    {
      id: 3,
      title: 'Skills',
      to: 'about'
    },
    {
      id: 4,
      title: 'Contact',
      to: 'about'
    }
  ]

  return (
    <S.Container>
      <S.LogoWrapper>
        <StyledText
          text="GS"
          fontSize={3}
          fontWeight={400}
          isSerif
          color={theme.colors.blue_lemon}
        />
      </S.LogoWrapper>

      <S.NavBar>
        {buttons.map(btn => (
          <S.ScrollBtn key={btn.id} to={btn.to} smooth={true}>
            <StyledText
              text={`0${btn.id}.`}
              fontSize={1.1}
              color={theme.colors.blue_lemon}
              isSerif
            />{' '}
            {btn.title}
          </S.ScrollBtn>
        ))}
      </S.NavBar>
    </S.Container>
  )
}
