import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Homepage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ProfilePage from './pages/ProfilePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { userRemember } from './store/actions/userActions';
import { RootState } from './store/reducers/rootReducer';

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRemember());
  }, [])


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {!user.user ? <Homepage /> : <Redirect to='/profile' /> }
        </Route>
        <Route path='/news' exact component={NewsPage} />
        <Route path='/profile' exact>
          {user.user ? <ProfilePage /> : <Redirect to='/' />}
        </Route>
        <Route path='/sign-in'>
          {!user.user ? <SignIn /> : <Redirect to='/' />}
        </Route>
        <Route path='/sign-up'>
          {!user.user ? <SignUp /> : <Redirect to='/' />}
        </Route>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
