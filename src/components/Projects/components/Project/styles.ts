import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 8rem;

  @media (max-width: 768px) {
    height: 400px;
  }
`

export const ProjectImgWrapper = styled.div<{ reverse: boolean }>`
  width: 50%;
  height: 100%;
  position: absolute;
  left: ${({ reverse }) => reverse && 0};
  right: ${({ reverse }) => !reverse && 0};
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`

export const ImgOverlay = styled.div<{ reverse?: boolean }>`
  width: 50%;
  height: 100%;
  left: ${({ reverse }) => reverse && 0};
  right: ${({ reverse }) => !reverse && 0};
  z-index: 1;
  position: absolute;
  background: ${({ theme }) => theme.colors.bg_opacity};
  opacity: 0.7;
  border-radius: 2px;
  transition: 0.4s ease-in-out;

  &:hover {
    opacity: 0;
  }

  @media (max-width: 768px) {
    z-index: 1;
    width: 100%;
    opacity: 0.98;
    border-radius: 0;

    &:hover {
      opacity: 0.98;
    }
  }
`

export const Content = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
  padding: 2rem 0;

  @media (max-width: 768px) {
    width: 100%;
    z-index: 2;
    align-items: center;
  }
`

export const ContentCard = styled.div`
  background: ${({ theme }) => theme.colors.bg_opacity};
  padding: 1rem;
  border-radius: 6px;
  width: 60%;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    background: transparent;
  }
`

export const ItemsRow = styled.div`
  padding: 1rem 0;
  display: flex;
  z-index: 1;

  @media (max-width: 768px) {
    align-items: center;
    flex-wrap: wrap;
  }
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
