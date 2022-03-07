import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { StyledText } from '../StyledText';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
  text: string;
}

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border: 1px solid;
  border-color: ${({theme}) => theme.colors.blue_lemon};
  border-radius: 8px;
  background: transparent;
  color: ${({theme}) => theme.colors.blue_lemon};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(	204,	255,	204, 0.17);
  }
`
export const OutlineButton: React.FC<IButtonProps> = ({ text }) => {

  return (
    <Button>
      <StyledText
        text={text}
        isSerif
        fontSize={1.1}
        color="rgba(	204,	255,	204)"
        fontWeight={500}
      />
    </Button>
  )
}
