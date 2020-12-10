import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { PostPreview } from './Components/PostPreview/PostPreview';
import { Home } from './Pages/Home';
import { Post } from './Pages/Post';
import { Search } from './Pages/Search';
import './css/fonts.css';

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
    </Router>
  );
}

export default App;
