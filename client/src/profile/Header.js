import React from 'react'
import {Box, Grid, Typography} from "@material-ui/core";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from "./Header.module.css"

const Header = ({artist}) => {
    return (
        <Grid container>
            <Grid item xs={12} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Box item className={styles.bannerImage}
                     component="img"
                     src={artist.bannerImage}/>
                <Grid item xs={12} className={styles.profileDetails}>
                    <Box className={styles.profileImage}
                         component="img"
                         src={artist.profileImage}/>
                    <Typography variant={"h4"} className={styles.artistName}>{artist.name}</Typography>
                    <Typography variant={"h6"} className={styles.artistGenres}>{artist.genres}</Typography>
                    <Grid item xs={12} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <LocationOnIcon className={styles.pin}/>
                        <Typography variant={"h6"} className={styles.artistCountry}>{`${artist.country}`}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header