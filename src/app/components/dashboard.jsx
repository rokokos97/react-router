import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Stats from './stats';
import Edit from './edit';


const Dashboard = () => {
  return (<div>
    <h2>Dashboard</h2>
    <ul>
      <li><Link to={'/dashboard'}>Dashboards</Link></li>
      <li> <Link to={'/dashboard/edit'}>Edit</Link></li>
    </ul>
    <Switch>
      <Route path={'/dashboard/edit'} component={Edit}/>
      <Route path={'/dashboard'} component={Stats}/>
    </Switch>
  </div>);
};

export default Dashboard;
