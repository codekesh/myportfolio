import React, { forwardRef } from "react";
import Typography from "@mui/material/Typography";

export const About = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} id="about">
        <Typography
          variant="h3"
          align="center"
          sx={{ mt: 10, color: "rgb(2, 102, 124)" }}
        >
          About
        </Typography>
      </div>
    </>
  );
});
