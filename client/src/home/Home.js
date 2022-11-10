import React from 'react'
import {AppBar, Box, Grid, Toolbar, Typography} from '@material-ui/core';
import {Search} from '@mui/icons-material';
import {MusicianCard} from './MusicianCard';
import {AxiosRequest} from '../hooks/AxiosRequest'

const Home = () => {
    const {artists, error, loaded} = AxiosRequest(`/artists`, 'get', null, {})
    if (loaded) {
        console.log(artists)
        return error ? (
            <span>Error: {error}</span>
        ) : (
            <Box sx={{flexGrow: 1}}>
                <AppBar position={'absolute'}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            Welcome
                        </Typography>
                        <Search>
                        </Search>
                    </Toolbar>
                </AppBar>
                <Grid container style={{marginTop: 80, flexDirection: "column"}}>
                    <Grid item xs={3}>
                        {artists.forEach(({artist}) => (
                            <MusicianCard
                                name={artist.name}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Box>
        );
    }
    return (
        <span>Loading...</span>
    )
}

export default Home
