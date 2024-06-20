import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  width: 250px;
  height: 350px;
  transition: 0.6s;
  text-align: center;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.5);
  transform: rotateX(70deg) translateY(-200px) translateZ(-100px);
  background: ${({ bgstart, bgend }) =>
    `linear-gradient(${bgstart}, ${bgend})`};
  &:hover {
    transition: 0.6s;
    transform: rotateX(0deg);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const CardSkills = ({ skill }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={4}
      sx={{
        height: 120,
        transformStyle: "preserve-3d",
        transform: "perspective(900px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledCard bgstart={skill.bgStart} bgend={skill.bgEnd}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontFamily: "'Sue Ellen Francisco', cursive",
                fontWeight: 700,
                color: "#2d3436",
                my: 3,
                letterSpacing: "1px",
              }}
            >
              {skill.title}
            </Typography>
            {skill.content.map((value, index) => (
              <>
                <Typography
                  key={index}
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 1, color: "#dfe6e9", fontSize: "20px" }}
                >
                  {value}
                </Typography>
                <hr />
              </>
            ))}
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </Grid>
  );
};
