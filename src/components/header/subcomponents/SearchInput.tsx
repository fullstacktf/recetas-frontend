import styled from '@emotion/styled';
import React, { FC, useEffect, useState } from 'react';
import SearchImg from '../assets/search.svg';
import { Redirect } from 'react-router';

const Container = styled.div`
  align-self: center;
  width: 60%;
  height: 50%;
  min-width: 250px;
  min-height: 30px;
  max-width: 500px;
  max-height: 50px;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  text-align: center;
  background: #ffffff;
  background-image: url(${SearchImg});
  background-size: contain;
  background-position: 35%;
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
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Buscar"
          value={value}
          onChange={handleChangeValue}
        />
      </Form>
      {redirect && <Redirect to="/search"/>}
    </Container>
  );
};
