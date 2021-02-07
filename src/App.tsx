import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Homepage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ProfilePage from './pages/ProfilePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { RootState } from './store/reducers/rootReducer';

function App() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/news' exact component={NewsPage} />
        {user.authorized && (
          <Route path='/profile' exact component={ProfilePage} />
        )}
        {!user.authorized && (
          <>
            <Route path='/sign-in' exact component={SignIn} />
            <Route path='/sign-up' exact component={SignUp} />
          </>
        )}
      </Switch>
      <Redirect to='/' />
    </BrowserRouter>
  );
}

export default App;
