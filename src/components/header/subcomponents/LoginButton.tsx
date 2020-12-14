import { FC } from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button<any>`
  width: 100%;
  max-width: 200px;
  max-height: 50px;
  text-align: center;
  font-size: 0.8em;
  font-weight: bolder;

  color:  ${(props) => props.secondary ? '#18A0FB;' : '#FFFFFF;'};
  background: ${(props) => props.secondary ? '#FFFFFF;' : '#18A0FB;'};
  border: 0.5px solid #18A0FB;;
  box-sizing: border-box;
  padding: 10px;
  margin: 5px;

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

interface LoginButtonProps {
  onclick: () => void;
  secondary?: boolean;
}

export const LoginButton: FC<LoginButtonProps> = (props) => {
  const handleClick = () => {
    props.onclick();
  };

  return <StyledButton secondary={props.secondary} onClick={handleClick}>{props.children}</StyledButton>;
};
