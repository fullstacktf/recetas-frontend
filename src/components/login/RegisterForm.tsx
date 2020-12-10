import React, { FC } from 'react';
import styled from '@emotion/styled';
import { InputTag } from './utils/InputTag';
import { Form } from './utils/Form';
import { Input } from './utils/Input';
import { Button } from './utils/Button';

const Container = styled.div`
  width: 30%;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: normal;

  background: #FFFFFF;
  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 40px;
  padding-top: 20px;
`;

export const RegisterForm: FC = () =>{

  return <Container>
            <Form onSubmit={() => { console.log('Enviando...'); }}>
              <InputTag>Email:</InputTag>
              <Input name="email" type="email"/>
              <InputTag>Repite tu Email:</InputTag>
              <Input name="emailConfirm" type="email"/>
              <InputTag>Contraseña:</InputTag>
              <Input name="password" type="password"/>
              <InputTag>Contraseña:</InputTag>
              <Input name="passwordConfirm" type="password"/>
              <Button onClick={() => { console.log('click'); }}>Registro</Button>
            </Form>
        </Container>;
};
