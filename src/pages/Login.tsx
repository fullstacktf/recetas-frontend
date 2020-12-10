import React, { FC } from 'react';
import styled from '@emotion/styled';
import { LoginForm } from '../components/login/LoginForm';
import { Brand } from '../components/header/subcomponents/Brand';

const Container = styled.div`
  display: grid;
  grid-template-rows: 2% 0.6fr 2% repeat(3, 1fr) 2%;
  grid-template-columns: 5% repeat(3, 1fr) 5% repeat(3, 1fr) 5%;
  grid-row-gap: 0px;
  grid-column-gap: 0px;
`;

const Grid1 = styled.div`
  grid-area: 2 / 6 / 3 / 9;
  display: flex;
`;
const Grid2 = styled.div`
  grid-area: 4 / 2 / 7 / 5;
  padding: 20px;
  background: url('https://api.snapfork.me/static/mediaUtils/login/background.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;
const Grid3 = styled.div`
  grid-area: 4 / 6 / 7 / 9;
  min-width: 400px;
  max-width: 500px;
`;

export const Login: FC = () => {

  return <Container>
    <Grid1><Brand fontSize="70px">SnapFork</Brand></Grid1>
    <Grid2/>
    <Grid3><LoginForm/></Grid3>
  </Container>;
};
