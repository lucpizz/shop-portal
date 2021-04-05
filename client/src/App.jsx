import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Navigation from './components/Navigation/Navigation';
import Login from './pages/SignIn/SignIn';

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />

      <Switch>
        <Route exact from='/login' render={(props) => <Login {...props} />} />
      </Switch>
    </>
  );
}

export default App;
