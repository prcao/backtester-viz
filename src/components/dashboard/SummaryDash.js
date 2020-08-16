import React from "react";
import { Box, Heading, Divider, Flex, Text } from "@chakra-ui/core";

function SummaryDash(props) {

    let data = props.data;

    let first = data[0].date;
    let last = data[data.length - 1].date;
    let totalGrowth = 100 * (data[data.length - 1].value - data[0].value) / data[0].value;
    let max = data.reduce((maxAcc, datapoint) => Math.max(datapoint.value, maxAcc), 0);
    let min = data.reduce((minAcc, datapoint) => Math.min(datapoint.value, minAcc), data[0].value);

    return (
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
    );
}

export default SummaryDash;