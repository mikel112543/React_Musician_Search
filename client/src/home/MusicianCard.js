import {Card, CardContent, CardMedia} from "@mui/material";
import React from "react";
import {Grid, Typography} from "@material-ui/core";
import "./MusicianCard.css"

export const MusicianCard = ({filePath, name, genres, type}) => {
    return (<Card
        className="card"
    >
        <Grid className="card-container">
            <Grid
                className="card-media-grid"
                item
                xs={12}
            >
                <CardMedia
                    className="card-media"
                    component="img"
                    image={filePath}
                    alt={"images/eminem.jpg"}
                />
            </Grid>
            <Grid
                item xs={12}>
                <CardContent>
                    <Grid
                        className="info-grid">
                        <Typography className="artist-name" variant="h5">{name}</Typography>
                        <Typography className="artist-genres" variant="paragraph">{genres}</Typography>
                        <Typography className="artist-type" variant="paragraph">Solo</Typography>
                    </Grid>
                </CardContent>
            </Grid>
        </Grid>
    </Card>);
};
