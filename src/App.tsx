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
import { getToken, getUserData } from './api';
import { Profile } from './pages/Profile';

function App() {
  const [isLogged, setIsLogged] = useState(Boolean(getToken().length));

  return (
    <Router>
          <Route exact path="/"><Redirect to="/home"/></Route>
          <Route exact path="/home" render={() => (<div><Header isLogged={isLogged}/><Home isLogged={isLogged}/></div>)}/>
          <Route path="/post/:id" render={(props) => (<div><Header isLogged={isLogged}/><Post postID={props.match.params.id}/></div>)}/>
          <Route path="/search" render={() => (<div><Header isLogged={isLogged}/><Search/></div>)}/>
          <Route path="/login" render={() => (<Login setIsLogged={setIsLogged}/>)}/>
          <Route path="/register" component={Register}/>
          <Route path="/newPost" render={() => (<div><Header isLogged={isLogged}/><NewPost/></div>)}/>
      <Route path="/profile/:id?" render={(props) => (<div><Header isLogged={isLogged}/><Profile userID={props.match.params.id || getUserData()._id}/></div>)}/>
          {/* TODO Implement view to complete profile info <Route path="/completeProfile" component={Login}/>*/}
    </Router>
  );
}

export default App;
