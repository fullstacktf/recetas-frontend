import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { sendToBackend } from '../api';
import { RegisterForm } from '../components/login/RegisterForm';
import { LoginLayout } from '../layouts/LoginLayout';

export const Register: FC = () => {
  let history = useHistory();

  const handleSubmit = (event: any) => {
    console.log('Enviando registro...');
    let data = {
        username: event.target[0].value,
        email: event.target[1].value,
        password: event.target[3].value,
        name: ' ',
        last: ' '
      };
    let RequestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    console.log('Data: ', data);

    sendToBackend('user/register', RequestOptions)
      .then((response) => {
        console.log('Estoy en el then');
        console.log(response);
        // TODO crear componente para completar la información del perfil
        //history.push('/completeProfile');
        history.push('/login');
      })
      .catch((response) => {
        console.log('Estoy en el catch');
        console.log(response);
      });
  };

  return <LoginLayout>
    <RegisterForm onSubmit={handleSubmit}/>
  </LoginLayout>;
};
