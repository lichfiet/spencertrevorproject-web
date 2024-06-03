import React from 'react';
import { Box, Button } from '@mui/material';

const Sidebar = () => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
      </Box>
    );
  };
  

export default Sidebar;