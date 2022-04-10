import React, { useEffect, useState } from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const SimpleLineChart = () => {

    const [lineCharts, setLinecharts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLinecharts(data))
    }, [])
    // console.log(lineCharts)
    return (

        <LineChart width={500} height={500} data={lineCharts} margin={{
            top: 5,
            right: 30,
            left: 50,
            bottom: 5,
          }}>
            <Line type="monotone" dataKey={'revenue'}></Line>
            <Line dataKey={'investment'}></Line>
            <YAxis></YAxis>
            <XAxis dataKey={'month'}></XAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
        </LineChart>
    );
};

export default SimpleLineChart;