import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './movies.css'


const TopRatedMiniComponent =(props)=>{
    const [movieName] = useState(props.movie.movieName);
    const [movieImage] = useState(props.movie.movieImage);
    const [movieRating] = useState(props.movie.movieRate);

    const useStyles = makeStyles({
        root: {
          maxWidth: 200,
          display: 'inline-block',
          marginLeft: '2%',
          marginBottom: '1%',
          height: 250
        },
      });

      const classes = useStyles();
      return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              width= "200"
              image={movieImage}
              title="Contemplative Reptile"
              border='1px solid gray'
            />
            <CardContent>
              <Typography gutterBottom style={{textAlign:'center'}}>
                {movieName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h6" style={{textAlign:'center'}}>
                {movieRating}
              </Typography>
            </CardContent>
          </CardActionArea>
       </Card>
      )
}

export default TopRatedMiniComponent;