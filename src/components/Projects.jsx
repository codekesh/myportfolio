import React, { forwardRef } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Datas from "../Datas/dataProject";
import Typography from "@mui/material/Typography";
import Project from "./Project";

const Projects = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} id="projects">
        <Typography
          variant="h3"
          align="center"
          sx={{ mt: 10, color: "rgb(2, 102, 124)" }}
        >
          Projects
        </Typography>
        <Grid container justifyContent="center" rowSpacing={1}>
          {Datas.map((data) => (
            <Project key={data.id} proj={data} />
          ))}
        </Grid>
      </div>
    </>
  );
});

export default Projects;
