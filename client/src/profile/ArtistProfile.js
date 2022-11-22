import React, {useState} from 'react'
import {useLocation} from "react-router-dom";
import {Box, Grid, Tab, Tabs, Typography} from "@material-ui/core"
import {AxiosRequest} from "../hooks/AxiosRequest";
import Header from "./Header";
import {Divider} from "@mui/material";

const ArtistProfile = () => {
    const location = useLocation()
    const name = location.state.s
    const {artists, error, loaded} = AxiosRequest(`/artist`, 'get', null, {s: name})
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex)
    }

    if (loaded) {
        return error ? (
            <span>Error: {error}</span>
        ) : (
            <>
                <Header artist={artists}/>
                <Grid item xs={12} style={{display: "flex", width: '100%', flexDirection: "column", justifyContent: "center"}}>
                    <Box sx={{width: '100%'}}>
                        <Tabs value={tabIndex} onChange={handleTabChange} centered>
                            <Tab label="About"></Tab>
                            <Tab label="Media"></Tab>
                            <Tab label="Tab 3"></Tab>
                        </Tabs>
                    </Box>
                    <Box sx={{ padding: 2 }}>
                        {tabIndex === 0 && (
                            <Box>
                                <Divider></Divider>
                                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                    in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                            </Box>
                        )}
                        {tabIndex === 1 && (
                            <Box>
                                <Typography>The second tab</Typography>
                            </Box>
                        )}
                        {tabIndex === 2 && (
                            <Box>
                                <Typography>The third tab</Typography>
                            </Box>
                        )}
                    </Box>
                </Grid>
            </>

        )
    }
    return (
        <span>Loading...</span>
    )
}

export default ArtistProfile