import React from 'react'
import {AppBar, Box, Grid, Toolbar, Typography} from '@material-ui/core';
import {Search} from '@mui/icons-material';
import {MusicianCard} from './MusicianCard';
import {AxiosRequest} from '../hooks/AxiosRequest'

const Home = () => {
    const {artists, error, loaded} = AxiosRequest(`/artists`, 'get', null, {})
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
                <Grid container direction="row" justifyContent={"space-evenly"} style={{marginTop: 80}}>
                    <Grid container xs={12} spacing={6} justifyContent={"space-evenly"} direction="row">
                        {artists.map((artist) => (
                            <Grid item>
                            <MusicianCard
                                name={artist.artists[0].strArtist}
                                genres={artist.artists[0].strGenre}
                                filePath={artist.artists[0].strArtistThumb}
                            />
                            </Grid>
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
