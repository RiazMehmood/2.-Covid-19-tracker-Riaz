import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchAllCountries } from './Api';

const useStyles = makeStyles(theme => ({
    formControl: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    }
}));


export default function CountrySelecter({countryChange}) {
    const classes = useStyles();

    let [countries, setCountries] = useState([]);
    useEffect(() => {
        async function fetchCountriesApi() {
            const fetchCountry = await fetchAllCountries();
            setCountries(fetchCountry.countries)
        }
        fetchCountriesApi();
    }, [])

    function getCountry(e) { countryChange(e.target.value) }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <NativeSelect defaultValue='' onChange={getCountry}>
                    <option value=''>Global</option>
                    {countries.map((country, ind) => {
                        return (
                            <option key={ind} value={countries[ind].name}>{countries[ind].name}</option>
                        );
                    })}
                </NativeSelect>
            </FormControl>
        </div>
    )
}