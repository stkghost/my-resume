import React, { useState } from 'react'
import styled from 'styled-components'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Projects } from '../components/Projects'
import { Sidebar } from '../components/Sidebar'

const Container = styled.div`
  position: relative;
  background: ${({theme}) => theme.colors.blue_bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

export const Home: React.FC = () => {

  const [ open, setOpen ] = useState(false)

  return (
    <Container >
      <Sidebar open={open} setOpen={setOpen}/>
      <Header open={open} setOpen={setOpen}/>
      <About />
      <Experience />
      <Projects />
      <Footer />
    </Container>
  )
}
