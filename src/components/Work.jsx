import React, { forwardRef } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import dataWork from "../Datas/DataWork";
import Typography from "@mui/material/Typography";
import { CardComponent } from "./CardComponent";

const Work = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} id="work">
        <Typography
          variant="h3"
          align="center"
          sx={{ mt: 10, color: "rgb(2, 102, 124)" }}
        >
          Experiences
        </Typography>
        <Grid container justifyContent="center" rowSpacing={2}>
          {dataWork.map((work) => (
            <CardComponent key={work.id} work={work} />
          ))}
        </Grid>
      </div>
    </>
  );
});

export default Work;
