import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Separator } from './subcomponents/Separator';
import { Input } from './subcomponents/Input';
import { Button } from '../../subcomponents/Button';
import { InputTag } from './subcomponents/InputTag';
import { PasswordRestore } from './subcomponents/PasswordRestore';
import { Form } from './subcomponents/Form';
import { useHistory } from 'react-router-dom';

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

export interface LoginFormProps{
  onSubmit: (param: any) => void;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/register');
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={props.onSubmit}>
          <InputTag>Email o username:</InputTag>
          <Input name="email" type="email/username"></Input>
          <InputTag>Contraseña:</InputTag>
          <Input name="password" type="password"></Input>
          <Button rounded type="submit">Iniciar Sesión</Button>
        </Form>
        <Separator/>
        <PasswordRestore href="google.es">¿Olvidates tu contraseña?</PasswordRestore>
      </FormContainer>
      <Button rounded onClick={handleClick}>¿No tienes una cuenta?<br/><strong>Regístrate</strong></Button>
    </Container>
  );
};
