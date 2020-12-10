import React, { FC} from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  width: 100%;
  text-align: center;
  font-size: 1em;

  color: #FFFFFF;
  background: #18A0FB;
  border-radius: 10px;
  border: 0.5px solid #18A0FB;
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
    background: #2ba6f8;
  }
`;

interface ButtonProps {
  onClick: () => void;
}

export const Button: FC<ButtonProps> = (props) => {

  const hanleOnClick = (event: any) => {
    event.preventDefault();
    props.onClick();
  };

  return <StyledButton onClick={hanleOnClick}>{props.children}</StyledButton>;
};
