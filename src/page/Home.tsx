import React from 'react'
import styled from 'styled-components'
import { About } from '../components/About'
import { ContactSide } from '../components/ContactSide'
import { Experience } from '../components/Experience'
import { Header } from '../components/Header'

const Container = styled.div`
  position: relative;
  background: ${({theme}) => theme.colors.blue_bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Home: React.FC = () => {
  return (
    <Container>
      <ContactSide />
      <Header />
      <About />
      <Experience />
    </Container>
  )
}
