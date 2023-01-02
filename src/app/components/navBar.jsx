import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return <>
    <h1>NavBar</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/posts">Posts</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  </>;
};

export default NavBar;
