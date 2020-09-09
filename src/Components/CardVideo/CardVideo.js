import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import nature from '../../Assets/nature.jpg'
import {GlobalState} from '../../globalState'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 290,
    backgroundColor: '#171717',
    color: 'white',
    margin: 10,
  },
  rootOpen: {
    maxWidth: 250,
    backgroundColor: '#171717',
    color: 'white',
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    
  },
  cardHeader: {
      paddingLeft: 0,
      
  },
  text: {
      marginLeft: '-20%'
  },
  cardAction: {
      display: 'flex',
      flexDirection: 'column',
      color: 'grey',
  }
}));

export function CardVideo() {
  const classes = useStyles();

const {open} = React.useContext(GlobalState)

  return (
    <Card className={ open ? classes.rootOpen : classes.root}>
        <CardMedia
          className={classes.media}
          image={nature}
        />
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        className={classes.cardHeader}
        title="Shrimp and Chorizo Paella Oaella"
      />
      <CardActions className={classes.cardAction}>
        <Typography variant='body2' gutterBottom className={classes.text}>
            This is my channel
        </Typography>
        <Typography variant='body2' gutterBottom className={classes.text}>
            {`422k views * 40minutes ago`}
        </Typography>
      </CardActions>
      
    </Card>
  );
}
