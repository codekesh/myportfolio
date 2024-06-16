import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  transition: transform 0.6s linear;
  width: 345px;
  min-height: 300px;
  margin: 50px;
  border-radius: 20px;
  box-shadow: 0 0px 10px 3px rgba(30, 55, 90, 0.5);
  &.flipped {
    transform: rotateY(360deg);
  }
`;

export const CardComponent = ({ work }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const frontContent = (
    <>
      <CardMedia component="img" height="250" image={work.image} alt="Image" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="warning.main"
          sx={{ fontWeight: "700" }}
        >
          {work.company}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {work.title}
        </Typography>
      </CardContent>
    </>
  );

  const backContent = (
    <CardContent>
      <Typography variant="h5" color="text.secondary" sx={{ mb: 1 }}>
        {work.duration}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {work.period}
      </Typography>
      <Typography variant="subtitle2" sx={{fontSize:"17px"}} color="info.main">
        {work.describe}
      </Typography>
    </CardContent>
  );

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <StyledCard
          className={`card ${flipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <CardActionArea>
            {flipped ? backContent : frontContent}
          </CardActionArea>
        </StyledCard>
      </Grid>
    </>
  );
};
