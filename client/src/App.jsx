// import './App.css'
// import React from 'react'
// import SignIn from './pages/SignIn/SignIn'


// function App() {
//   return (
//     <div className='App'>
//         <SignIn />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />
    </>
  );
}

export default App;