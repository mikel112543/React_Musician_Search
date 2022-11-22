import {Card, CardContent, CardMedia} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import {Grid, Typography} from "@material-ui/core";
import "./MusicianCard.css"

export const MusicianCard = ({filePath, name, genres}) => {
    const navigate = useNavigate()

    const navigateToProfile = () => {
        navigate('/artist',
            {
                state: {s : name}
        })
    }

    return (
        <Card
        className="card"
        onClick={navigateToProfile}
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
    </Card>
    );
};
