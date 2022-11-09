import React from 'react'
import {AppBar, Box, Grid, Toolbar, Typography} from '@material-ui/core';
import {Search} from '@mui/icons-material';
import {MusicianCard} from './MusicianCard';
import {AxiosRequest} from '../hooks/AxiosRequest'


const Home = () => {
    const {artist, error, loaded} = AxiosRequest(`/artist`, 'get', null, {artistId: '0TnOYISbd1XYRBk9myaseg'})

    if (loaded) {
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
                <Grid container style={{marginTop: 80}}>
                    <Grid item xs={3}>
                        <MusicianCard
                            name={artist.name}
                            genres={artist.genres}
                            filePath={artist.images[2].url}
                        />
                    </Grid>
                    <span>{artist.name}</span>
                </Grid>
            </Box>
        );
    }
    return (
        <span>Loading...</span>
    )
}

export default Home
