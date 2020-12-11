import React, { FC } from 'react';
import { RegisterForm } from '../components/login/RegisterForm';
import { LoginLayout } from '../layouts/LoginLayout';

export const Register: FC = () => {
  return <LoginLayout>
      <RegisterForm onSubmit={() => { console.log('Enviando registro...'); }}/>
  </LoginLayout>;
};
