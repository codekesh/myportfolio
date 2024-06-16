import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const StyledCard = styled(Card)`
  position: relative;
  width: 345px;
  margin: 50px;
  border-radius: 15px;
  box-shadow: 0px 20px 20px 9px #a7a7a7;
  overflow: hidden;
  min-height: 400px;
  &:hover .overlay {
    opacity: 1;
  }
`;

const StyledButton = styled(Button)`
  color: white;
  border-color: red;
  border-width: 2px;
  &:hover {
    border-width: 2px;
  }
`;

const Project = ({ proj }) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <StyledCard className="cardContainer">
          <CardActionArea>
            <CardMedia
              component="img"
              height="225"
              image={proj.image}
              alt={proj.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {proj.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {proj.describe}
              </Typography>
            </CardContent>
          </CardActionArea>
          <div className="overlay">
            <StyledButton
              href={proj.link}
              variant="outlined"
              className="overlayButton"
            >
              <RemoveRedEyeIcon />
            </StyledButton>
          </div>
        </StyledCard>
      </Grid>
    </>
  );
};

export default Project;
