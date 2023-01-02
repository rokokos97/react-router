import React from 'react';
import NavBar from './components/navBar';
import {Route} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Posts from './components/posts';
import Dashboard from './components/dashboard';
const App =()=> {
  return (
    <>
      <NavBar/>
      <h1>APPLICATION</h1>
      <Route path={'/home'} component={Home}/>
      <Route path={'/login'} component={Login}/>
      <Route path={'/posts'} component={Posts}/>
      <Route path={'/dashboard'} component={Dashboard}/>
    </>
  );
};

export default App;
