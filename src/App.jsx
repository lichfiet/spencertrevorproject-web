import React from 'react';
import { Container, Box } from '@mui/material';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Container maxWidth="lg">
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f8c8d1', border: '10px solid #000', boxSizing: 'border-box', padding: '10px' }}>
      <Box sx={{ flex: 1, borderRight: '10px solid #000' }}>
        <Canvas />
      </Box>
      <Box sx={{ width: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '10px solid #000' }}>
        <Sidebar />
      </Box>
    </Box>
    </Container>
  );
}

export default App;