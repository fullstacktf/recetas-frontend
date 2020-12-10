import styled from '@emotion/styled';
import React, { FC, useEffect, useState } from 'react';
import SearchImg from './assets/search.svg';
import { Redirect } from 'react-router';

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
  font-family: Poppins;
  font-size: 12px;
  color: rgb(150, 150, 150);

  &:focus {
    background-position: 1%;
    text-align: left;
    text-indent: 10%;
    outline: none;
    color: black;
  }
`;

export const SearchInput: FC = () => {
  const [value, setValue] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleChangeValue = (event: any) => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch('http://localhost:3000/user/search/' + value)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    setRedirect(true);
  };

  useEffect(() => {
    window.addEventListener('focusout', (event) => {
      setRedirect(false);
    });
    return () => {
      window.removeEventListener('focusout', () => {
        setValue('');
      });
    };
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Buscar"
          value={value}
          onChange={handleChangeValue}
        />
      </form>
      {redirect && <Redirect to="/search"/>}
    </Container>
  );
};
