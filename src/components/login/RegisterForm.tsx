import React, { FC } from 'react';
import styled from '@emotion/styled';
import { InputTag } from './subcomponents/InputTag';
import { Form } from './subcomponents/Form';
import { Input } from './subcomponents/Input';
import { Button } from './subcomponents/Button';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

export interface RegisterFormProps {
  onSubmit: () => void;
}

export const RegisterForm: FC<RegisterFormProps> = (props) =>{

  return <Container>
    <Form onSubmit={props.onSubmit}>
              <InputTag>Email:</InputTag>
              <Input name="email" type="email"/>
              <InputTag>Repite tu Email:</InputTag>
              <Input name="emailConfirm" type="email"/>
              <InputTag>Contraseña:</InputTag>
              <Input name="password" type="password"/>
              <InputTag>Contraseña:</InputTag>
              <Input name="passwordConfirm" type="password"/>
              <Button type="submit">Registro</Button>
            </Form>
        </Container>;
};
