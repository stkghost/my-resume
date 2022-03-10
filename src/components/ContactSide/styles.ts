import styled from 'styled-components'

export const Container = styled.div`
  width: 3rem;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  bottom: 0;
  padding-left: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    flex-direction: row;
    height: 100%;
    padding: 0 4rem 1rem 4rem;
  }
`

export const IconWrapper = styled.a`
  width: 60%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.silver_light};
  transition: 0.3s all ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.blue_lemon};
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 20px;
  }
`

export const Line = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.silver_light};
  height: 180px;

  @media (max-width: 768px) {
    display: none;
  }
`
