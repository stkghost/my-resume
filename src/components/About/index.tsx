import React from 'react';
import { useTheme } from 'styled-components';
import { StyledText } from '../StyledText';
import * as S from './styles';

export const About: React.FC = () => {

  const theme = useTheme()

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
    </S.Container>
  )
}
