import React from 'react';
import { useTheme } from 'styled-components';
import { StyledText } from '../StyledText';
import { Project } from './components/Project';
import * as S from './styles';

export const Projects: React.FC = () => {

  const theme = useTheme()


  const projects = [
    {
      img: 'https://ciriasantos.com.br/static/media/bg6.60ed45fe.jpg',
      title: 'Law Firm website',
      description: 'Lar Firm website build on React Js. That website was my first project as web developer.',
      items: ['React JS', 'styled-components', 'Javascript', 'Firebase'],
      link: 'https://ciriasantos.com.br'
    },
    {
      img: 'https://thumbs2.imgbox.com/37/8f/MIxD7r8o_t.png',
      title: 'Law Firm website',
      description: 'Lar Firm website build on React Js. In this one I am managing a campaign on google ads',
      items: ['React JS', 'styled-components', 'Javascript', 'Firebase'],
      link: 'https://amandamagalhaesadv.com.br'
    },
    {
      img: 'https://thumbs2.imgbox.com/69/2a/WNbiR1ZI_t.png',
      title: 'Product Landing Page',
      description: 'Landing Page build on React Js. Landing page for product linking payment methods',
      items: ['React JS', 'styled-components', 'Javascript', 'Firebase', 'Yampi'],
      link: 'https://dreamwaffle.com'
    },
  ]

  return (
    <S.Container>
      <S.Header>
        <StyledText
          text="03. "
          fontSize={1.5}
          color={theme.colors.blue_lemon}
          isSerif
          style={{ marginRight: '.8rem' }}
        />
        <StyledText
          text="Projects"
          fontSize={1.5}
          color={theme.colors.white}
          fontWeight={700}
        />
        <S.Separator />
      </S.Header>

      <S.Content>
        {projects.map((project, index) => (
          <Project key={index}project={project}/>
        ))}
      </S.Content>
    </S.Container>
  )
}
