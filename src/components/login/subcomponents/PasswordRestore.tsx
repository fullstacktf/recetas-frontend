import React, { FC } from 'react';
import styled from '@emotion/styled';

const Text = styled.p`
  text-align: center;
  font-size: 1.5em;
  color: #000000;
  margin: 0px;
  margin-top: 10px;

  :hover{
    cursor: pointer;
  }
`;

interface PasswordRestoreProps {
  href: string;
}

export const PasswordRestore: FC<PasswordRestoreProps> = (props) => {
  const handlePasswordRestore = (event: any) => {
    console.log('Te olvidaste la contraseña, te llevo a ', props.href);
  };

  return <Text onClick={handlePasswordRestore}>{props.children}</Text>;
};
