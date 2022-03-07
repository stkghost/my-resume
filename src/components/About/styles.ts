import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding: 8rem 6rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
`

export const TextColumn = styled.div`
  width: 60%;
  padding: 2rem 4rem 0 0;
  display: flex;
  flex-direction:  column;
`

export const ImageColumn = styled.div`
  width: 40%;
  height:  300px;
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
    border: 2px solid ${({ theme}) => theme.colors.blue_lemon};
    border-radius: 6px;
    z-index: 0;
  }
  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.6) 100%
    ),
    linear-gradient(180deg, rgba(0,0,0,0.4) 0%, trasnparent 100%);
    z-index: 2;
    }
`

export const MyPhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  z-index: 1;
  background: rgba(0,0,0, 0.1);
`

export const SkillsWrapper = styled.div`
  width: 100%;
  display: grid;
  padding-right: 4rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 2rem;
`
export const SkillRow = styled.div`
  width: 100%;
  display:  flex;
  align-items: center;
  justify-content: flex-start;
  margin: .4rem 0;
`
