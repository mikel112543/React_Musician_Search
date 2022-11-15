import React, {useState} from 'react'
import {AppBar, Box, Grid, Toolbar} from '@material-ui/core';
import {MusicianCard} from './MusicianCard';
import {AxiosRequest} from '../hooks/AxiosRequest'
import {SearchBar} from "../wireframe/SearchBar";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const {artists, error, loaded} = AxiosRequest(`/artists`, 'get', null, {})
    const filteredArtist = filterData(searchQuery, artists)

    if (loaded) {
        return error ? (
            <span>Error: {error}</span>
        ) : (
            <Box sx={{flexGrow: 1}}>
                <Grid container style={{marginBottom: 80}}>
                    <AppBar position={'absolute'}>
                        <Toolbar style={{justifyContent: "center"}}>
                            <SearchBar
                                searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid container direction="row" justifyContent={"space-evenly"}>
                    <Grid container xs={12} spacing={6} justifyContent={"space-evenly"} direction="row">
                        {searchQuery !== "" ? (
                            filteredArtist.map((artist) => (
                                <Grid item>
                                    <MusicianCard
                                        name={artist.artists[0].strArtist}
                                        genres={artist.artists[0].strGenre}
                                        filePath={artist.artists[0].strArtistThumb}
                                    />
                                </Grid>
                            ))
                        ) : (
                            artists.map((artist) => (
                                <Grid item>
                                    <MusicianCard
                                        name={artist.artists[0].strArtist}
                                        genres={artist.artists[0].strGenre}
                                        filePath={artist.artists[0].strArtistThumb}
                                    />
                                </Grid>
                            ))
                        )
                        }
                    </Grid>
                </Grid>
            </Box>
        )
    }
    return (
        <span>Loading...</span>
    )
}

const filterData = (query, data) => {
    if (!query) {
        return data;
    } else {
        return data.filter((d) => d.artists[0].strArtist.toLowerCase().includes(query));
    }
};

export default Home
