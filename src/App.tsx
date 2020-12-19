import React, { useEffect, useState } from 'react';

import './css/fonts.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Home } from './pages/Home';
import { Post } from './pages/Post';
import { Search } from './pages/Search';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  const [isLogged, setIsLogged] = useState(true);

  /*useEffect(() => {
    const result = false;
    //result = getIsUserLoged(); // TODO Comprobar si el usuario se encuentra logueado
    setIsLogged(result);
  },[]);*/

  return (
    <Router>
      {isLogged
        ?
        <div>
          <Header isLogged={isLogged}/>
          <Route exact path="/" render={() => (<Home isLogged={isLogged}/>)}/>
          <Route exact path="/home" render={() => (<Home isLogged={isLogged}/>)}/>
          <Route path="/post" component={Post}/>
          <Route path="/search" component={Search}/>
        </div>
        :
        <div>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>
      }
    </Router>
  );
}

export default App;
