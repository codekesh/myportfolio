import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Datas from "../Datas/dataProject";
import Typography from "@mui/material/Typography";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <Typography variant="h4" align="center">
        Projects
      </Typography>
      <Grid container rowSpacing={1}>
        {Datas.map((data) => (
          <Grid key={data.id} xs={3}>
            <Project
              image={data.image}
              title={data.title}
              describe={data.describe}
              link={data.link}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
