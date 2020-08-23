import React from "react";
import { Area, AreaChart, Brush, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Box, Heading } from "@chakra-ui/core";

function Chart(props) {
    return (
        <Box height="80vh">
            <Box marginBottom="20px">
                <Heading>Value Over Time</Heading>
            </Box>
            <ResponsiveContainer width="100%" height="75%">
                <AreaChart data={props.data}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Area type="monotone" dataKey="value" activeDot={{ onClick: a => console.log(a) }} />
                    <Brush type="monotone" dataKey="date" stroke="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </Box>

    );
}

export default Chart;