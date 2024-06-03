import React from 'react';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const Sidebar = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <Box my={2} display="flex" alignItems="center" sx={{ border: '2px solid grey' }}>
                        <Button variant="contained">Info</Button>
                    </Box>
                </Grid>
                <Grid xs={8}>
                    <Box my={2} display="flex" alignItems="center" sx={{ border: '2px solid grey' }}>
                        <Button variant="contained">More Info</Button>
                    </Box>
                </Grid>
            </Grid>
            <Button variant="contained">Upgrade1</Button>
            <Button variant="contained">Upgrade2</Button>
            <Button variant="contained">Upgrade3</Button>
            <Button variant="contained">Upgrade5</Button>
            <Button variant="contained">Upgrade6</Button>

        </Box>
    );
};


export default Sidebar;