import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Project = (props) => {
  return (
    <div>
      <Card style={{ width: '345px', margin: '50px', borderRadius: "20px", boxShadow: "0 0px 10px 3px rgba(30, 55, 90, 0.5)" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={props.image}
              alt={props.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.describe}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href={props.link} size="small" color="primary">
              Visit
            </Button>
          </CardActions>
        </Card>
    </div>
  )
}

export default Project
