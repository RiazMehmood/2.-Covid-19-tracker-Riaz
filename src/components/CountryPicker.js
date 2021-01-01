import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import { Chart } from './Chart';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CountryPicker() {
  const classes = useStyles();
  
  const [globalData, setGlobalData] = useState({});

  const confirmed = globalData.confirmed
  const recovered = globalData.recovered
  const deaths = globalData.deaths
  


  useEffect(() => {
    async function getData() {
      const response = await fetch("https://covid19.mathdro.id/api");
      const { confirmed, recovered, deaths } = await response.json();
      const global = { confirmed, recovered, deaths }
      
      setGlobalData(global);

    }

    getData();
  }
    , [])


  return (
    <div>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Select Country</InputLabel>
          <Select native defaultValue="" id="grouped-native-select">
            <option aria-label="None" value="" />
            <option value={1}>Option 1</option>
          </Select>
        </FormControl>
      </div>
      <div>
        <Cards confirm={confirmed} recovered={recovered} deaths={deaths}/><br />
        <Chart value="message from country picker" />
      </div>
    </div>
  );
}


