import React, { FC } from 'react';
import styled from '@emotion/styled';
import { LoginForm } from '../components/login/LoginForm';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Grid1 = styled.div`
  grid-area: 1 / 4 / 2 / 6;
  padding: 20px;
`;
const Grid2 = styled.div`
  grid-area: 2 / 1 / 6 / 4;
  padding: 20px;
`;
const Grid3 = styled.div`
  grid-area: 2 / 4 / 6 / 6;
  padding: 20px;
`;

export const Login: FC = () => {

  return <Container>
    <Grid1><p>SNAPFORK</p></Grid1>
    <Grid2><img src="https://api.snapfork.me/static/mediaUtils/login/background.png" alt="Background Imagen"/></Grid2>
    <Grid3><LoginForm/></Grid3>
  </Container>;
};
