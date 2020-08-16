import React from "react";
import { Box, Heading } from "@chakra-ui/core";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Brush, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { data } from "../data/mock-data";
function Chart(props) {
    return (
        <Box height="90vh" p="5%" paddingTop="2%">
            <Box marginBottom="16px">
                <Heading>Value Over Time</Heading>
            </Box>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Area dot={false} type="monotone" dataKey="price" />
                    <Brush type="monotone" dataKey="timestamp" stroke="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </Box>

    );
}

export default Chart;