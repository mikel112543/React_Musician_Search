import React from 'react'
import {Card, CardMedia} from "@mui/material";
import styles from './MusicCard.module.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {Grid, Typography} from "@material-ui/core";

const MusicCard = ({top10}) => {
    return (
        <>
        <Card style={{display: "flex",alignItems: "center"}}>
            <Grid container style={{display: "flex", flexDirection: "row", alignItems: "center", height: 'fit-content'}}>
                <Grid item style={{display: "flex", flexDirection: "column"}}>
                    <CardMedia>
                        <PlayCircleOutlineIcon/>
                    </CardMedia>
                </Grid>
                <Grid item>
                    <Typography>HEllp</Typography>
                    <Typography>HEllp</Typography>
                    <Typography>HEllp</Typography>
                    <Typography>HEllp</Typography>
                    <Typography>HEllp</Typography>
                </Grid>
            </Grid>
        </Card>
        </>
    )
}

export default MusicCard

