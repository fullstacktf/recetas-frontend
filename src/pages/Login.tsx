import React, { FC } from 'react';
import { LoginForm } from '../components/login/LoginForm';
import { LoginLayout } from '../layouts/LoginLayout';

export const Login: FC = () => {
  return <LoginLayout>
    <LoginForm onSubmit={() => { console.log('Enviando registro...'); }}/>
  </LoginLayout>;
};
