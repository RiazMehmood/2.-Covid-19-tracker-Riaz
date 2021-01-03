import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from './Api';
import '../App.css'

export default function Chart({ data }) {

    let [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchingDailyData = async () => {
            const fetchedUpdatedData = await fetchDailyData();
            console.log(fetchedUpdatedData[0].totalConfirmed)
            setDailyData(fetchedUpdatedData)
        }
        fetchingDailyData();
    }, []);

    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map((date, i) => dailyData[i].reportDate),
                    datasets: [{
                        label: 'Infected',
                        data: dailyData.map((data, i) => dailyData[i].confirmed.total),
                        borderColor: 'blue',
                        fill: true,
                    }, {
                        label: 'Deaths',
                        data: dailyData.map((data, i) => dailyData[i].deaths.total),
                        borderColor: 'red',
                        backgroundColor: "	#ff6347",
                        fill: true,
                    }]
                }}

            />
        ) : null
    );

    const barChart = (
        data.confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['blue', 'green', 'red'],
                            data: [data.confirmed, data.recovered, data.deaths]
                        }
                    ]
                }}
            />
        ) : null
    )

    return (
        <div className='chart'>
            {data.country ? barChart : lineChart}
        </div>
    )
}