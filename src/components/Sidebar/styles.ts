import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'

export const Sidebar = styled.aside<{ open: boolean }>`
  position: fixed;
  z-index: 99;
  height: 100vh;
  background: ${({ theme }) => theme.colors.bg_opacity};
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: ${({ open }) => (open ? '80%' : '0')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  max-width: 600px;
  top: 0;
  right: 0;
  -webkit-box-shadow: -1px 0px 36px 1px #000000;
  box-shadow: -1px 0px 36px 1px #000000;

  @media (min-width: 768px) {
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

export const NavBar = styled.div<{ open: boolean }>`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: ${({ open }) => (open ? '100%' : '0')};
`
