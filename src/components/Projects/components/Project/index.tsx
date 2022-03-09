import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { RiExternalLinkFill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { StyledText } from '../../../StyledText';
import * as S from './styles';



interface IProject {
  project: {
    img: string;
    title: string;
    description: string;
    items: string[];
    github?: string;
    link?: string;
  }
  reverse?: boolean;
}

export const Project: React.FC<IProject> = ({ project, reverse }) => {

  const theme = useTheme()

  return (
    <S.Container>
      <S.ImgOverlay reverse={reverse}/>

      <S.ProjectImgWrapper reverse={reverse}>
        <S.ProjectImg src={project.img}/>
      </S.ProjectImgWrapper>
      <S.Content reverse={reverse}>
        <StyledText
          text="Features Project"
          fontSize={1}
          fontWeight={400}
          color={theme.colors.blue_lemon}
          isSerif
          align="right"
          style={{ marginBottom: 12 }}

        />
        <StyledText
          text={project.title}
          fontSize={2}
          fontWeight={700}
          color={theme.colors.white}
          align="right"
          style={{ marginBottom: 16 }}
        />

        <S.ContentCard>
          <StyledText
            text={project.description}
            fontSize={1}
            fontWeight={400}
            color={theme.colors.silver_light}
            align={reverse ? 'right' : 'left'}
          />
        </S.ContentCard>

        <S.ItemsRow>
          {project.items.map(item => (
            <StyledText
              key={item}
              text={item}
              fontSize={.9}
              fontWeight={400}
              color={theme.colors.blue_lemon}
              isSerif
              style={{ marginLeft: 12, marginBottom: 6 }}
            />
          ))}
        </S.ItemsRow>
        <S.ItemsRow>
          {project.github && (
            <S.IconWrapper
              href={project.github}
              rel="norrefer"
              target="_blank"
            >
              <FiGithub size={22}/>
            </S.IconWrapper>
          )}
          {project.link && (
          <S.IconWrapper
              href={project.link}
              rel="norrefer"
              target="_blank"
            >
              <RiExternalLinkFill size={22}/>
          </S.IconWrapper>
          )}

        </S.ItemsRow>
      </S.Content>
    </S.Container>
  )
}
