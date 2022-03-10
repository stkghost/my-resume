import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'

export const Sidebar = styled.aside<{ open: boolean }>`
  position: fixed;
  z-index: 999;
  height: 100vh;
  background: ${({ theme }) => theme.colors.bg_opacity};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  width: ${({ open }) => (open ? '0' : '80%')};
  opacity: ${({ open }) => (open ? 0 : 1)};
  top: 0;
  right: 0;
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
  width: ${({ open }) => (open ? '0' : '100%')};
`
