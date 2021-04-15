import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Navigation from './components/Navigation/Navigation';
import SignIn from './pages/SignIn/SignIn';
import ContactUs from './pages/ContactUs/ContactUs';
import Shop from './pages/Shop/Shop';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />

      <Switch>
        <Route exact from='/login' render={(props) => <SignIn {...props} />} />
        <Route exact from='/Shop' render={(props) => <Shop {...props} />} />
        <Route
          exact
          from='/contact'
          render={(props) => <ContactUs {...props} />}
        />
        <Route exact from='/signup' render={(props) => <SignUp {...props} />} />
      </Switch>
    </>
  );
}

export default App;
