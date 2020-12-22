import React, { useEffect, useState } from 'react';

import './css/fonts.css';

import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Home } from './pages/Home';
import { Post } from './pages/Post';
import { Search } from './pages/Search';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NewPost } from './pages/NewPost';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const result = localStorage.getItem('token');
    if(result){
      setIsLogged(true);
    }
  },[]);

  return (
    <Router>
          <Route exact path="/"> {isLogged ? <Redirect to="/home"/> : <Redirect to="/login"/>}</Route>
          <Route exact path="/home" render={() => (<div><Header isLogged={isLogged}/><Home isLogged={isLogged}/></div>)}/>
          <Route path="/post" render={() => (<div><Header isLogged={isLogged}/><Post/></div>)}/>
          <Route path="/search" render={() => (<div><Header isLogged={isLogged}/><Search/></div>)}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/newPost" render={() => (<div><Header isLogged={isLogged}/><NewPost/></div>)}/>
          {/* TODO Implement view to complete profile info <Route path="/completeProfile" component={Login}/>*/}
    </Router>
  );
}

export default App;
