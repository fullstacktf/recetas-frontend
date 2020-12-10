import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Separator } from './subcomponents/Separator';
import { Input } from './subcomponents/Input';
import { Button } from './subcomponents/Button';
import { InputTag } from './subcomponents/InputTag';
import { PasswordRestore } from './subcomponents/PasswordRestore';
import { Form } from './subcomponents/Form';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
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

export const LoginForm: FC = () => {

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={() => { console.log('Enviando...'); }}>
          <InputTag>Email:</InputTag>
          <Input name="email" type="email"></Input>
          <InputTag>Contraseña:</InputTag>
          <Input name="password" type="password"></Input>
          <Button onClick={() => {console.log('click');}}>Iniciar Sesión</Button>
        </Form>
        <Separator/>
        <PasswordRestore href="google.es">¿Olvidates tu contraseña?</PasswordRestore>
      </FormContainer>
      <Button onClick={() => { console.log('click'); }}>¿No tienes una cuenta?<br/><strong>Regístrate</strong></Button>
    </Container>
  );
};
