import React from 'react'
import {AppBar, Box, Grid, Toolbar, Typography} from '@material-ui/core';
import {Search} from '@mui/icons-material';
import {MusicianCard} from './MusicianCard';


const Home = () => {
    console.log(data)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position={'absolute'}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI HELLO
                    </Typography>
                    <Search>
                    </Search>
                </Toolbar>
            </AppBar>
                <Grid container style={{marginTop: 80}}>
                    <Grid item xs={3}>
                        <MusicianCard
                            filePath='eminem.jpg'
                        />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home
