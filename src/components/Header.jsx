import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Corona from './Corona.png';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  image: {
    width: 70,
    height: 70,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className='header'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid-19 Tracker by Riaz
          </Typography>
          <img src={Corona} alt='Logo' className={classes.image} />
        </Toolbar>
      </AppBar>
    </div>
  );
}