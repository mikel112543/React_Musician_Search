import React, {useContext} from 'react'
import {Box, Grid} from '@material-ui/core';
import {MusicianCard} from './MusicianCard';
import {AxiosRequest} from '../hooks/AxiosRequest'
import {SearchContext} from "../config/SearchContext";

const Home = () => {
    const {searchQuery} = useContext(SearchContext)
    const {artists, error, loaded} = AxiosRequest(`/artists`, 'get', null, {})
    const filteredArtist = filterData(searchQuery, artists)

    if (loaded) {
        return error ? (
            <span>Error: {error}</span>
        ) : (
            <Box sx={{flexGrow: 1}}>
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
