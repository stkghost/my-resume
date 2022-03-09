import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 8rem 6rem 10rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem 5rem 1rem;
  }
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Separator = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.blue_lemon};
  width: 40%;
  margin-left: 2rem;
  justify-self: flex-end;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 6rem 0;
  margin-top: 2rem;
`
