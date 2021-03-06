import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { SearchInput } from './subcomponents/SearchInput';
import { Icons } from './subcomponents/Icons';
import { LoginButton } from './subcomponents/LoginButton';
import { Brand } from '../../subcomponents/Brand';
import { useHistory } from 'react-router';

const Container = styled.div`
  padding: 15px;
  display: flex;
  //justify-content: space-between;
  flex-direction: row;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Row1 = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Row2 = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row3 = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export interface HeaderProps{
  isLogged?: boolean;
}

export const Header: FC<HeaderProps> = (props) => {
  const history = useHistory();

  const goToLogin = () => {
    history.push('/login');
  };

  const goToRegister = () => {
    history.push('/register');
  };

  return (
    <Container>
      <Row1 role="banner">
        <Brand>SnapFork</Brand>
      </Row1>
      <Row2>
        <SearchInput/>
      </Row2>
      <Row3>
        {props.isLogged
          ? <Icons/>
          : <ButtonsContainer>
            <LoginButton onclick={goToLogin} secondary={true}>LOG IN</LoginButton>
            <LoginButton onclick={goToRegister}>SIGN UP</LoginButton>
          </ButtonsContainer>
        }
      </Row3>
    </Container>
  );
};
