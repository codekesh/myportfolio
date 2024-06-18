import React, { forwardRef } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CardSkills } from "./CardSkills";
import skills from "../Datas/content_skills";
import Typography from "@mui/material/Typography";

const Techskill = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}>
        <Typography
          variant="h3"
          align="center"
          sx={{ color: "rgb(2, 102, 124)", marginTop: "50px" }}
        >
          Skills
        </Typography>
        <Grid container justifyContent="center">
          {skills.map((skill, index) => (
            <CardSkills key={index} skill={skill} />
          ))}
        </Grid>
      </div>
    </>
  );
});

export default Techskill;
