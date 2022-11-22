import React, {useState} from 'react'
import {useLocation} from "react-router-dom";
import {Box, Grid, Tab, Typography} from "@material-ui/core"
import TabPanel from "@mui/lab/TabPanel";
import {AxiosRequest} from "../hooks/AxiosRequest";
import Header from "./Header";
import {Divider} from "@mui/material";
import {TabContext, TabList} from "@mui/lab";

const ArtistProfile = () => {
    const location = useLocation()
    const name = location.state.s
    const {artists, error, loaded} = AxiosRequest(`/artist`, 'get', null, {s: name})
    const [tabIndex, setTabIndex] = useState("1");


    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex)
    }

    if (loaded) {
        return error ? (
            <span>Error: {error}</span>
        ) : (
            <>
                <Header artist={artists}/>
                <Grid item xs={12}
                      style={{display: "flex", width: '100%', flexDirection: "column", justifyContent: "center"}}>
                    <Box sx={{width: '100%'}}>
                        <TabContext value={tabIndex}>
                            <TabList onChange={handleTabChange} centered>
                                <Tab label="About" value='1'/>
                                <Tab label="Media" value='2'></Tab>
                                <Tab label="Tab 3" value='3'></Tab>
                            </TabList>
                            <Divider></Divider>
                    <TabPanel value="1">
                        <Typography variant={"body1"}>{artists.bio}</Typography></TabPanel>
                    <TabPanel value="2"></TabPanel>
                    <TabPanel value="3">Web Development</TabPanel>
                        </TabContext>
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