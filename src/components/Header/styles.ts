import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 114px;
`
export const LogoWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavBar = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
