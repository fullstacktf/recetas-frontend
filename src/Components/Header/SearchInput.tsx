import styled from '@emotion/styled';
import { FC, useState } from 'react';
import SearchImg from './assets/search.svg';

const Container = styled.div`
  align-self: center;
`;

const Input = styled.input`
  text-align: center;
  background: #ffffff;
  background-image: url(${SearchImg});
  background-size: contain;
  background-position: 30%;
  background-repeat: no-repeat;
  border: 1px solid rgba(189, 189, 189, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    background-position: 1%;
    text-align: left;
    text-indent: 10%;
  }
`;
export const SearchInput: FC = () => {
  const [value, setValue] = useState('');

  const handleChangeValue = (event: any) => {
    setValue(event.currentTarget.value);
  };

  return (
    <Container>
      <Input placeholder="Buscar" value={value} onChange={handleChangeValue}/>
    </Container>
  );
};
