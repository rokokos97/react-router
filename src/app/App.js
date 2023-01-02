import React from 'react';
import NavBar from './components/navBar';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Posts from './components/posts';
const App =()=> {
  return (
    <>
      <NavBar/>
      <h1>APPLICATION</h1>
      <Switch>
        <Route path={'/'} component={Home} exact/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/dashboard'} component={Dashboard}/>
        <Route
          path={'/posts/:postId?'}
          render={(props)=><Posts {...props} />}
        />
        {/* <Route*/}
        {/*  path={'/posts/:postId'}*/}
        {/*  render={(props)=><Post {...props} posts={posts}/>}*/}
        {/* />*/}
        {/* <Route*/}
        {/*  path={'/posts'}*/}
        {/*  render={(props)=><PostsList {...props} posts={posts}/>}*/}
        {/* />*/}
        {/* чтобы передать доп параметры в компонент или отобразить сразу JSX
        компонент необходимо вместо атрибута component использовать атрибут
        render
        */}
        {/* <Route*/}
        {/*  path={'/dashboard'}*/}
        {/*  render={(props)=>{*/}
        {/*    return (false && <Dashboard {...props} isAdmin={false}/>);*/}
        {/*  }}*/}
        {/* />*/}
        {/* чтобы все заработало в рендер передаем функцию как и в случаи*/}
        {/* с функциональным компонентом*/}
        {/*  можем добавить новые параметры и передать props*/}
        {/*  так же такой способ позволяет добавить параметры отображения*/}
      </Switch>

    </>
  );
};

export default App;
