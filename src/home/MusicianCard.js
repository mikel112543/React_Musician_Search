import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Grid, Typography } from "@material-ui/core";

export const MusicianCard = ({ filePath, name, genres, type }) => {
  return (
    <Card
      style={{
        height: 400,
        width: 300,
        margin: 5,
        display: "flex",
      }}
    >
      <Grid container style={{ display: "flex" }}>
        <Grid
          item
          xs={12}
          style={{
            justifyContent: "center",
            display: "flex",
            height: 120,
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "50%",
              height: 200,
              marginTop: "5%",
              width: 200,
            }}
            component="img"
            image={"images/eminem.jpg"}
            alt="eminem"
          />
        </Grid>
        <Grid item xs={12}>
          <CardContent
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Grid
              container
              style={{
                marginTop: 10,
                justifyItems: "center",
                display: "flex",
              }}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Eminem
                </Typography>
              </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center", height: 23, marginTop: 5 }}
            >
              <Typography variant="paragraph">Rap, Hip-Hop</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Typography variant="paragraph">Solo</Typography>
            </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
