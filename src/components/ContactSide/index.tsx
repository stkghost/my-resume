import React from 'react'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'
import * as S from './styles'

export const ContactSide: React.FC = () => {
  const items = [
    {
      id: 1,
      icon: <FiGithub size={34} />,
      link: 'https://github.com/stkghost'
    },
    {
      id: 2,
      icon: <FiLinkedin size={34} />,
      link: 'https://www.linkedin.com/in/gabriel-souza-9307b9170/'
    },
    {
      id: 3,
      icon: <FiInstagram size={34} />,
      link: 'https://www.instagram.com/gabrieelrsouza/'
    },
    {
      id: 4,
      icon: <ImWhatsapp size={34} />,
      link: 'https://wa.me/5547999722189'
    }
  ]

  return (
    <S.Container>
      {items.map(item => (
        <S.IconWrapper
          key={item.id}
          href={item.link}
          rel="norrefer"
          target="_blank"
        >
          {item.icon}
        </S.IconWrapper>
      ))}
      <S.Line />
    </S.Container>
  )
}
