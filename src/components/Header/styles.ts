import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  max-width: 1200px;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 99;
  transition: 0.3s ease-out;

  @media (max-width: 768px) {
    justify-content: center;
    height: 74px;
  }
`
export const IconWrapper = styled.button`
  width: 40px;
  position: absolute;
  right: 0.5rem;
  transform: rotate(180deg);
  border: none;
  background-color: transparent;
  z-index: 9999;

  @media (min-width: 768px) {
    display: none;
  }
`

export const LogoWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavBar = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ScrollBtn = styled(LinkS)`
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Zilla Slab', serif;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.blue_lemon};
  }
`

export const Sidebar = styled.div`
  width: 80%;
  height: 100%;
  background: ${({ theme }) => theme.colors.bg_opacity};
  display: flex;
  flex-direction: column;
`
