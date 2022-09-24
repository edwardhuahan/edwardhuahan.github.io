import React, { useEffect } from 'react';

import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';
import Landing from './Landing';
import './App.css';

function App() {
  
  useEffect(() => {
    document.title = "Edward Han";
  }, []);


  return (
    <Box>
      <NavBar />
      <Landing />
    </Box>
  );
}

export default App;
