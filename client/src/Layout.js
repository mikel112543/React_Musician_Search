import React, {useState, useMemo} from 'react'
import {AppBar, Grid, Toolbar} from "@material-ui/core";
import {SearchBar} from "./wireframe/SearchBar";
import HomeIcon from '@mui/icons-material/Home';
import {SearchContext} from "./config/SearchContext";
import {useNavigate} from 'react-router-dom';

const Layout = ({children}) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("")
    const providerValue = useMemo(() => ({searchQuery, setSearchQuery}), [searchQuery, setSearchQuery]);
    const navHome = () => {
        setSearchQuery("")
        navigate('/') }

    return (
        <>
            <Grid container>
                <Grid container style={{marginBottom: 80}}>
                    <AppBar position={'absolute'}>
                        <Toolbar>
                            <Grid xs={1} item style={{display: "flex", cursor: "pointer"}}>
                                <HomeIcon onClick={navHome}/>
                            </Grid>
                            <Grid xs={10} style={{display: "flex", justifyContent: "center"}}>
                                <SearchBar
                                    searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <SearchContext.Provider value={providerValue}>
                    <main>{children}</main>
                </SearchContext.Provider>
            </Grid>
        </>
    )
}

export default Layout