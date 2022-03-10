import React from 'react';
import { useTheme } from 'styled-components';
import { StyledText } from '../StyledText';
import * as S from './styles';

interface IProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Sidebar: React.FC<IProps> = ({open, setOpen}) => {

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
      title: 'Projects',
      to: 'projects'
    },
    {
      id: 4,
      title: 'Contact',
      to: 'contact'
    }
  ]

  return (
    <S.Sidebar open={open}>
      <S.NavBar open={open}>
      {!open && buttons.map(btn => (
          <S.ScrollBtn key={btn.id} to={btn.to} smooth={true} onClick={() => setOpen(!open)}>
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
    </S.Sidebar>
  )
}
