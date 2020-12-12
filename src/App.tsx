import React, { useEffect, useState } from 'react';

import './css/fonts.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Home } from './pages/Home';
import { Post } from './pages/Post';
import { Search } from './pages/Search';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PostMakerView } from './pages/PostMakerView';

function App() {
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    const result = false;
    //result = getIsUserLoged(); // TODO Comprobar si el usuario se encuentra logueado
    setIsLogged(result);
  }, []);

  return (
    <Router>
      {isLogged ? (
        <div>
          <Header/>
          <Route exact path="/home" component={Home}/>
          <Route path="/post" component={Post}/>
          <Route path="/search" component={Search}/>
        </div>
      ) : (
        <div>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>
      )}
      <PostMakerView/>
    </Router>
  );
}

export default App;
