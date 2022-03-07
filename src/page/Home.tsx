import React from 'react'
import styled from 'styled-components'
import { About } from '../components/About'
import { Header } from '../components/Header'

const Container = styled.div`
  background: ${({theme}) => theme.colors.blue_bg};
`

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <About />
    </Container>
  )
}
