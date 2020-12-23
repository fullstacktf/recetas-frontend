import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { sendToBackend } from '../api';
import { LoginForm } from '../components/login/LoginForm';
import { LoginLayout } from '../layouts/LoginLayout';


export interface LoginProps{
  setIsLogged: (isLogin: boolean) => void;
}

export const Login: FC<LoginProps> = (props) => {
  let history = useHistory();

  const handleSubmit = (event: any) => {
    console.log('Enviando login...');
    let data = event.target[0].value.includes('@') ?
                {
                  email: event.target[0].value,
                  password: event.target[1].value
                }
                :
                {
                  username: event.target[0].value,
                  password: event.target[1].value
                };

    let RequestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    sendToBackend('user/login', RequestOptions)
    .then((response) =>{
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userdata', JSON.stringify(response.data));
      history.push('/');
      props.setIsLogged(true);
    })
    .catch((response) => {
      console.log('Estoy en el catch');
      console.log(response);
    });
  };

  return <LoginLayout>
    <LoginForm onSubmit={handleSubmit}/>
  </LoginLayout>;
};
