import React, { useState, useEffect } from 'react';
import CountryPicker from './CountryPicker';
import Chart from './Chart';
import Cards from './Cards';
import { fetchGlobalData } from './Api'

export const GlobalData = () => {

    const [globalData, setGlobalData] = useState({})

    console.log(globalData);
    useEffect(() => {
        async function globalData() {
            const data = await fetchGlobalData()

            setGlobalData({
                confirmed: data.confirmed.value,
                recovered: data.recovered.value,
                deaths: data.deaths.value,
                lastUpdate: data.lastUpdate,
            });
        }
        globalData()

    }, [setGlobalData])

    async function countryChange(country) {
        const fetchedCountryData = await fetchGlobalData(country);

        setGlobalData({
            confirmed: fetchedCountryData.confirmed.value,
            recovered: fetchedCountryData.recovered.value,
            deaths: fetchedCountryData.deaths.value,
            lastUpdate: fetchedCountryData.lastUpdate,
            country: country,
        });
        
    }

    return (
        <div>
            <CountryPicker countryChange={countryChange} />
            <Cards data={globalData} />
            <Chart data={globalData} />

        </div>
    )
}
