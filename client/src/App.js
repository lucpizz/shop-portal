import './App.css'
import React from 'react'
import BasicButtonGroup from './components/BasicButtonGroup/BasicButtonGroup'
import SimpleMenu from './components/SimpleMenu/SimpleMenu'
import SignUp from './components/SignUp/SignUp'
// import Box from '@material-ui/core/Box';
// import SimpleContainer from './components/Container/Container';

function App() {
  return (
    <div className='App'>
      {/* <Box component="span" color="primary" m={3}> */}
      {/* <SimpleContainer> */}
      <header className='App-header'>
        <SignUp />
        <SimpleMenu />
        <BasicButtonGroup />
        </header>
      {/* </SimpleContainer> */}
      {/* </Box> */}
    </div>
  );
}

export default App;