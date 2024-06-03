import React from 'react';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const Sidebar = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <Box my={2} display="flex" alignItems="center" sx={{ border: '2px solid grey' }}>
                        <Button variant="contained">Contained</Button>
                    </Box>
                </Grid>
                <Grid xs={8}>
                    <Box my={2} display="flex" alignItems="center" sx={{ border: '2px solid grey' }}>
                        <Button variant="contained">Contained</Button>
                    </Box>
                </Grid>
            </Grid>
            <Button variant="contained">Contained</Button>

        </Box>
    );
};


export default Sidebar;