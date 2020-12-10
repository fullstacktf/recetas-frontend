import React from 'react';
import { LoginForm } from './components/login/LoginForm';
import { RegisterForm } from './components/login/RegisterForm';
import './css/fonts.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <LoginForm/>
      <RegisterForm/>
    </div>
  );
}

export default App;
