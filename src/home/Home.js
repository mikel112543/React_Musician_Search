import React from 'react'
import {AppBar, Box, Grid, Toolbar, Typography} from '@material-ui/core';
import {Search} from '@mui/icons-material';
import {Card, CardMedia} from '@mui/material';

const Home = () => {
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
                    <Card style={{
                        height: 400,
                        justifyContent: 'center',
                        display: 'flex'}}>
                        <CardMedia
                            sx={{
                                borderRadius: '50%',
                                height: 200,
                                width: 200}}
                            component='img'
                            src='eminem.jpg'
                            alt='eminem'
                        />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home
