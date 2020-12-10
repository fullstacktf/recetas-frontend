import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Separator } from './utils/Separator';
import { Input } from './utils/Input';
import { Button } from './utils/Button';
import { InputTag } from './utils/InputTag';
import { PasswordRestore } from './utils/PasswordRestore';
import { Form } from './utils/Form';

// https://api.snapfork.me/static/mediaUtils/login/background.png

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

export const LoginForm: FC = () => {

  return <Container>
    <Form onSubmit={() => { console.log('Enviando...'); }}>
      <InputTag>Email:</InputTag>
      <Input name="email" type="email"></Input>
      <InputTag>Contraseña:</InputTag>
      <Input name="password" type="password"></Input>
      <Button onClick={() => {console.log('click');}}>Iniciar Sesión</Button>
    </Form>
    <Separator/>
    <PasswordRestore href="google.es">¿Olvidates tu contraseña?</PasswordRestore>
    <Button onClick={() => { console.log('click'); }}>¿No tienes una cuenta?<br/><strong>Regístrate</strong></Button>
  </Container>;
};

// <Input name="email" type="text" value={email} onChange={handleEmailChange} />
// <Input name="password" type="text" value={password} onChange={handlePasswordChange} />
