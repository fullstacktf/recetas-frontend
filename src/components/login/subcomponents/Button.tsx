import React, { FC} from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button<any>`
  width: 100%;
  text-align: center;
  font-size: 1em;

  color:  ${(props) => props.secondary ? '#18A0FB;' : '#FFFFFF;'};
  background: ${(props) => props.secondary ? '#FFFFFF;' : '#18A0FB;'};
  border-radius: 10px;
  border: 0.5px solid #18A0FB;;
  box-sizing: border-box;

  margin-top: 2em;
  padding-top: 10px;
  padding-bottom: 10px;

  :hover{
    cursor: pointer;
  }

  :focus {
    outline: none;
  }

  :active {
    background: ${props => props.secondary ? '#dadada;' : '#2ba6f8;'};
  }
`;

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  secondary?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {

  const hanleOnClick = (event: any) => {
    props.onClick && props.onClick();
  };

  return <StyledButton secondary={props.secondary} type={props.type} onClick={hanleOnClick}>{props.children}</StyledButton>;
};
