import React, { FC } from 'react';
import styled from '@emotion/styled';
import { SearchInput } from './SearchInput';
import { Icons } from './Icons';

const Container = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

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

export const Header: FC = () => {
  return (
    <Container>
      <Brand>SnapFork</Brand>
      <SearchInput/>
      <Icons/>
    </Container>
  );
};
