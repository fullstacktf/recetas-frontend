import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { PostPreview } from './components/postPreview/PostPreview';
import { Home } from './pages/Home';
import { Post } from './pages/Post';
import { Search } from './pages/Search';
import './css/fonts.css';
import { Login } from './pages/Login';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/post" component={Post}/>
        <Route path="/search" component={Search}/>
        <span>Hola Mundo</span>
        <PostPreview
          likes={3}
          comments={15}
          title="Macarrones"
          photo="https://api.snapfork.me/static/mediaUtils/login/background.png"
        />
      </div>
      <Login/>
    </Router>
  );
}

export default App;
