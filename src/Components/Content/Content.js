import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {GlobalState} from '../../globalState'
import {CardVideo} from '../CardVideo/CardVideo'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    paddingLeft: drawerWidth/2.5,
    paddingRight: drawerWidth/20,
    backgroundColor:'#181818',
    color: 'white',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    backgroundColor:'#181818',
    color: 'white',
    paddingLeft:drawerWidth*1.05,
  },
  videos: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '-64px'
  },
  text: {
      color: 'white',
  }
  
}));

export function Content() {
  const classes = useStyles();
  const theme = useTheme();
  const {open, setOpen} = React.useContext(GlobalState);


  return (
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.videos}>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
        </div>
      </main>
  );
}
