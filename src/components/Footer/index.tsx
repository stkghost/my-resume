import React from 'react';
import { useTheme } from 'styled-components';
import { ContactSide } from '../ContactSide';
import { StyledText } from '../StyledText';
import * as S from './styles';

export const Footer: React.FC = () => {

  const theme = useTheme()

  const currentYear = new Date().getFullYear()


  return (
    <S.Container id="contact">
      <ContactSide />

      <StyledText
        text="Built by Gabriel Souza"
        fontSize={1}
        isSerif
        fontWeight={400}
        color={theme.colors.silver_light}
      />

      <StyledText
        text={`©️ Copyright ${currentYear}`}
        fontSize={.9}
        isSerif
        fontWeight={400}
        color={theme.colors.silver_light}
      />
    </S.Container>
  )
}
