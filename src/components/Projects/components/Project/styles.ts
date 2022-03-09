import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 8rem;
`

export const ProjectImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  border-radius: 12px;
`

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`

export const ImgOverlay = styled.div`
  width: 50%;
  height: 100%;
  left: 0;
  z-index: 1;
  position: absolute;
  background: ${({ theme }) => theme.colors.bg_opacity};
  opacity: 0.7;
  border-radius: 4px;
  transition: 0.4s ease-in-out;

  &:hover {
    opacity: 0;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 2rem 0;
`

export const ContentCard = styled.div`
  background: ${({ theme }) => theme.colors.bg_opacity};
  padding: 1rem;
  border-radius: 6px;
  width: 60%;
  z-index: 1;
`

export const ItemsRow = styled.div`
  padding: 1rem 0;
  display: flex;
  z-index: 1;
`

export const IconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 12px;
  color: ${({ theme }) => theme.colors.silver_light};
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.blue_lemon};
    transform: scale(1.1);
  }
`
