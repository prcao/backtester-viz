import React from "react";
import { Box, Heading, Grid, Divider, Flex, Text } from "@chakra-ui/core";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Brush, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { data } from "../data/mock-data";
function Chart(props) {

    let first = data[0].timestamp;
    let last = data[data.length - 1].timestamp;
    let totalGrowth = 100 * (data[data.length - 1].price - data[0].price) / data[0].price;
    let max = data.reduce((maxAcc, datapoint) => Math.max(datapoint.price, maxAcc), 0);
    let min = data.reduce((minAcc, datapoint) => Math.min(datapoint.price, minAcc), data[0].price);

    return (
        <Box height="90vh" p="5%" paddingTop="2%">
            <Flex width="100%" justifyContent="space-evenly" borderWidth="1px" p="16px" margin="12px">
                <Box textAlign="center">
                    <Heading size="md">Date Range</Heading>
                    <Text>
                        {first} to {last}
                    </Text>
                </Box>

                <Divider orientation="vertical" />

                <Box textAlign="center">
                    <Heading size="md">Total Growth</Heading>
                    <Text>
                        {totalGrowth.toFixed(2)}%
                    </Text>

                </Box>
                <Divider orientation="vertical" />
                <Box textAlign="center">
                    <Heading size="md">Highest Value</Heading>
                    <Text>
                        ${max.toFixed(2)}
                    </Text>
                    <Divider orientation="vertical" />
                </Box>
                <Divider orientation="vertical" />
                <Box textAlign="center">
                    <Heading size="md">Lowest Value</Heading>
                    <Text>
                        ${min.toFixed(2)}
                    </Text>
                    <Divider orientation="vertical" />
                </Box>
            </Flex>

            <Box marginBottom="16px">
                <Heading>Value Over Time</Heading>
            </Box>
            <ResponsiveContainer width="100%" height="75%">
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