import React from "react";
import { Area, AreaChart, Brush, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function Chart(props) {
    return (
        <ResponsiveContainer width="100%" height="75%">
            <AreaChart data={props.data}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Area dot={false} type="monotone" dataKey="value" />
                <Brush type="monotone" dataKey="date" stroke="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>


    );
}

export default Chart;