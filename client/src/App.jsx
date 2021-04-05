import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Navigation from './components/Navigation/Navigation';
import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <SignIn />

      <Switch>
        <Route exact from='/login' render={(props) => <SignIn {...props} />} />
      </Switch>
    </>
  );
}

export default App;
