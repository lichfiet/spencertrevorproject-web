import React from 'react';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const Sidebar = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Grid container spacing={0}>
                <Grid xs={4}>
                    <Box alignItems="center" sx={{ display: 'flex', border: '2px solid grey', flexDirection: 'column' }}>
                        Info Boxrwqerwe
                    </Box>
                </Grid>
                <Grid xs={8}>
                    <Box alignItems="center" sx={{ display: 'flex', border: '2px solid grey', flexDirection: 'column' }}>
                        More Info Bopx 2
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