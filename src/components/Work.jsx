import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import dataWork from "../Datas/DataWork";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Work = () => {
  return (
    <>
    <Typography variant="h4" align="center">Experiences</Typography>
      <Grid container rowSpacing={1}>
        {dataWork.map((work) => (
          <Grid key={work.id} xs={6}>
            <Card
              sx={{
                width: "345px",
                margin: "50px",
                borderRadius: "20px",
                boxShadow: "0 0px 10px 3px rgba(30, 55, 90, 0.5)",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={work.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {work.company}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {work.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {work.duration}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {work.describe}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Work;
