import React from 'react'
import { useTheme } from 'styled-components'
import { StyledText } from '../StyledText'
import { Project } from './components/Project'
import * as S from './styles'

interface IProjectsProps {
  id: number
  img: string
  title: string
  description: string
  items: string[]
  link: string
}

export const Projects: React.FC = () => {
  const theme = useTheme()

  const projects: IProjectsProps[] = [
    {
      id: 1,
      img: 'https://i.postimg.cc/5jWHsNJY/brasilseg.jpg',
      title: 'Ultron Platform',
      description:
        'Insurance platform of one of the largest banks in Brazil. I work as a Front-end engineer creating products, features and maintenance.',
      items: ['Javascript', 'React Js', 'LESS', 'Redux Saga', 'E2E Test'],
      link: 'https://www.bbseguros.com.br'
    },
    {
      id: 2,
      img: 'https://avatars.githubusercontent.com/u/73237565?s=200&v=4',
      title: 'DWV App',
      description:
        'Mobile App built with Ionic, where I had to maintence and create new features, React Native development for the new App. Dashboards, landing pages and web systems development using ReactJs and Next Js.',
      items: [
        'React Native',
        'Next Js',
        'React Js',
        'Angular',
        'Typescript',
        'Ionic'
      ],
      link: 'https://play.google.com/store/apps/details?id=com.dwvinterativa.app'
    },
    {
      id: 3,
      img: 'https://iili.io/HM9zxgj.png',
      title: 'Real Estate Websystem',
      description:
        'Real Estate Website CMS, built using Next Js with the newest web development tools. Building a new API to manage the website content, such as footer components, headers, colors. The whole website is customized. Project made with Next js in Frontend and Node Js in Backend.',
      items: [
        'Next JS',
        'styled-components',
        'Typescript',
        'Vercel',
        'Node Js',
        'Express',
        'TypeORM',
        'Postgres',
        'AWS'
      ],
      link: 'https://requinte.sigastrcms.com'
    },
    {
      id: 4,
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
      id: 5,
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
          <Project
            key={`${project.id}-${index}`}
            project={project}
            reverse={index % 2 === 0}
          />
        ))}
      </S.Content>
    </S.Container>
  )
}
