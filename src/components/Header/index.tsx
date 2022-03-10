import React, { useState } from 'react'
import { VscChromeClose, VscListSelection } from 'react-icons/vsc'
import { useTheme } from 'styled-components'
import { StyledText } from '../StyledText'
import * as S from './styles'

interface IProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header: React.FC<IProps> = ({open, setOpen}) => {
  const theme = useTheme()

  const [ navBar, setNavbar] = useState(true)

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
      title: 'Projects',
      to: 'projects'
    },
    {
      id: 4,
      title: 'Contact',
      to: 'contact'
    }
  ]

  const handleOpen = () => {
    setOpen(!open)
  }

  const navbarChangeColor = () => {
    if (window.scrollY >= 80) {
        setNavbar(true)
    } else {
        setNavbar(false)
    }
}

window.addEventListener('scroll', navbarChangeColor)

  return (
    <S.Container style={{ display: navBar ? 'none' : 'flex' }}>
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
      <S.IconWrapper onClick={handleOpen}>
        {!open ? (
          <VscChromeClose size={30} color={theme.colors.blue_lemon}/>
        ) : (
          <VscListSelection size={30} color={theme.colors.blue_lemon}/>
        )}
      </S.IconWrapper>
    </S.Container>
  )
}
