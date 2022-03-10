import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem 4rem 1rem;
  }
`
