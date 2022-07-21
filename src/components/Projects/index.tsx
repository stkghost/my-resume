import React from 'react'
import { useTheme } from 'styled-components'
import { StyledText } from '../StyledText'
import { Project } from './components/Project'
import * as S from './styles'

export const Projects: React.FC = () => {
  const theme = useTheme()

  const projects = [
    {
      img: 'https://i.postimg.cc/5jWHsNJY/brasilseg.jpg',
      title: 'Plataforma Ultron',
      description:
        'Insurance platform of one of the largest banks in Brazil. I work as a Front-end engineer creating products, features and maintenance.',
      items: ['Javascript', 'React Js', 'LESS', 'Redux Saga', 'E2E Test'],
      link: 'https://www.bbseguros.com.br'
    },
    {
      img: 'https://avatars.githubusercontent.com/u/73237565?s=200&v=4',
      title: 'DWV App',
      description:
        'Application for realtors to view properties and buildings. Start up where I am currently working, creating features and applying maintenance to the application. We are currently rebuilding the app to React Native',
      items: [
        'React Native',
        'Angular Js',
        'Typescript',
        'Ionic',
        'Electron',
        'Mobile'
      ],
      link: 'https://play.google.com/store/apps/details?id=com.dwvinterativa.app'
    },
    {
      img: 'https://thumbs2.imgbox.com/37/8f/MIxD7r8o_t.png',
      title: 'Law Firm Website',
      description:
        'Law Firm website build with React Js. In this one I am managing a campaign on google ads',
      items: ['React JS', 'styled-components', 'Javascript', 'Firebase'],
      link: 'https://amandamagalhaesadv.com.br'
    },
    {
      img: 'https://thumbs2.imgbox.com/69/2a/WNbiR1ZI_t.png',
      title: 'Product Landing Page',
      description:
        'Landing Page build with React Js. Landing page for product linking payment methods',
      items: [
        'React JS',
        'styled-components',
        'Javascript',
        'Firebase',
        'Yampi'
      ],
      link: 'https://dreamwaffle.com'
    },
    {
      img: 'https://thumbs2.imgbox.com/9d/76/mkNZJ0tj_t.png',
      title: 'Dynamic Website',
      description:
        'Dynamic hotsite for buildings. Built with Next Js (SSR) showing build data through database requests. It has a form to contact the realtor who shared the hotsite link.',
      items: [
        'Next JS',
        'styled-components',
        'Typescript',
        'Vercel',
        'Tailwind'
      ],
      link: 'https://hotsite.dwvapp.com.br/empreendimento/130685/NXkP1avpDY'
    },
    {
      img: 'https://thumbs2.imgbox.com/64/56/mc6tmBQa_t.png',
      title: 'PDF Generator',
      description:
        'PDF generator using Puppeteer. It goes to hotsite website build with Next Js that mounts summary building list',
      items: ['Next JS', 'Typescript', 'Puppeteer', 'Vercel', 'Tailwind'],
      link: 'https://conteudo.dwvapp.com.br/print/terceiro-pdf/102897/decorados-brava-home-resort.pdf'
    }
  ]

  return (
    <S.Container id="projects">
      <S.Header>
        <StyledText
          text="03. "
          fontSize={1.5}
          color={theme.colors.blue_lemon}
          isSerif
          style={{ marginRight: '.8rem' }}
        />
        <StyledText
          text="Some Things I’ve Built"
          fontSize={1.5}
          color={theme.colors.white}
          fontWeight={700}
          align="left"
        />
        <S.Separator />
      </S.Header>

      <S.Content>
        {projects.map((project, index) => (
          <Project key={index} project={project} reverse={index % 2 === 0} />
        ))}
      </S.Content>
    </S.Container>
  )
}
