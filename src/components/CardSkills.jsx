import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  width: 250px;
  height: 350px;
  transition: 0.6s;
  margin: 10px 100px;
  text-align: center;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.5);
  transform: rotateX(75deg) translateY(-200px) translateZ(-100px);
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
        height: 100,
        transformStyle: "preserve-3d",
        transform: "perspective(600px)",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <StyledCard bgstart={skill.bgStart} bgend={skill.bgEnd}>
        <CardActionArea>
          <CardMedia component="img" image={skill.image} alt={skill.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {skill.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {skill.content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </Grid>
  );
};
