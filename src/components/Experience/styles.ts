import { fadeInUp } from 'react-animations'
import styled, { css, keyframes } from 'styled-components'

const Animation = keyframes`${fadeInUp}`

export const Container = styled.section`
  width: 100%;
  padding: 8rem 6rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 2rem 0;
  animation: 1s ${Animation};
`

export const NavBar = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  margin-right: 2rem;
`

export const NavButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  height: 40px;
  border: none;
  padding: 0 1rem;
  border-left: 2px solid;
  border-left-color: ${({ theme }) => theme.colors.blue_300};
  background: transparent;
  ${({ theme, isActive }) =>
    isActive &&
    css`
      background: ${({ theme }) => theme.colors.bg_opacity};
      border-left-color: ${theme.colors.blue_lemon};
    `}

  &:hover {
    background: ${({ theme }) => theme.colors.bg_opacity};
  }
`

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
`

export const ExperienceRow = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
`
