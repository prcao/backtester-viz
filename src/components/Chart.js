import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Brush, Tooltip, Legend } from 'recharts';
import { data } from "../data/mock-data";
function Chart(props) {
    return (
        <ResponsiveContainer width="95%" height="100%">
            <LineChart height={300} data={data}>
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line dot={false} type="monotone" dataKey="price" stroke="#8884d8" />
                <Brush type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>

    );
}

export default Chart;