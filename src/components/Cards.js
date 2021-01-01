import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1000,
    marginLeft: 100,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Cards(props) {
  const classes = useStyles();
  const confirmed = props.confirm;
  const recovered = props.recovered;
  const deaths = props.deaths


  console.log(confirmed);

  if (!confirmed) {
    return 'Loading...';
  }

  if (!recovered) {
    return 'Loading...';
  }

  if (!deaths) {
    return 'Loading...';
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3} elevation={4}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h3>Confirmed</h3> <h3><CountUp
            start={0}
            end={confirmed.value}
            duration={3}
            separator=","
            /></h3></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h3>Recovered</h3><h3><CountUp
            start={0}
            end={recovered.value}
            duration={3}
            separator=","
            /></h3> </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h3>Deaths</h3><h3><CountUp
            start={0}
            end={deaths.value}
            duration={3}
            separator=","
            /></h3> </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
