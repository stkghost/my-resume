import { fadeInUp } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const Animation = keyframes`${fadeInUp}`

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 8rem 6rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 6rem;
`

export const AboutHeader = styled.div`
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
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const TextColumn = styled.div`
  width: 60%;
  padding: 2rem 4rem 0 0;
  display: flex;
  flex-direction: column;
  animation: 1s ${Animation};

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 1rem 0 0;
  }
`

export const ImageColumn = styled.div`
  width: 40%;
  height: 300px;
  max-width: 320px;
  border-radius: 6px;
  display: flex;
  margin-top: 4rem;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -2rem;
    right: -2rem;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.blue_lemon};
    border-radius: 6px;
    z-index: 0;
    animation: 1s ${Animation};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const MyPhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.1);
  animation: 1s ${Animation};
`

export const SkillsWrapper = styled.div`
  width: 100%;
  display: grid;
  padding-right: 4rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 2rem;
  animation: 1s ${Animation};
`
export const SkillRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.4rem 0;
`
