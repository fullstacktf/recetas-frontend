import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { SearchInput } from './subcomponents/SearchInput';
import { Icons } from './subcomponents/Icons';
import { LoginButton } from './subcomponents/LoginButton';
import { Brand } from '../../subcomponents/Brand';

const Container = styled.div`
  padding: 15px;
  display: flex;
  //justify-content: space-between;
  flex-direction: row;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
/*
const Brand = styled.div`
  background: white;
  display: flex;
  align-items: center;
  width: 33%;
  font-family: Poppins;
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  color: #18a0fb;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
*/

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
  isLogged: boolean;
}

export const Header: FC<HeaderProps> = (props) => {

  return (
    <Container>
      <Row1>
        <Brand>SnapFork</Brand>
      </Row1>
      <Row2>
        <SearchInput/>
      </Row2>
      <Row3>
        {props.isLogged
          ? <Icons/>
          : <ButtonsContainer>
              <LoginButton onclick={() => {console.log('Login...');}} secondary={true}>LOG IN</LoginButton>
              <LoginButton onclick={() => {console.log('Register...');}}>SIGN UP</LoginButton>
          </ButtonsContainer>
        }
      </Row3>
    </Container>
  );
};
