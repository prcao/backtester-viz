import {
    Box,
    Heading,
    Divider,
    Text,
    Icon,
    SimpleGrid,
    Grid
} from "@chakra-ui/core";
import React from 'react';

function SinglePositionSummary(props) {

    let { unitBefore, unitAfter, deltaValue, openValue, closeValue } = props;


    return (
        <Grid templateColumns="20fr 50fr 30fr">
            <Heading size="sm">
                {props.name}:
        </Heading>
            <Text>
                {unitBefore}{openValue.toFixed(2)}{unitAfter} <Icon name="chevron-right" /> {unitBefore}{closeValue.toFixed(2)}{unitAfter}
            </Text>
            <Box color={deltaValue >= 0 ? "green.500" : "red.500"}>
                <Icon name={deltaValue >= 0 ? "chevron-up" : "chevron-down"} />
                {unitBefore}{Math.abs(deltaValue).toFixed(2)}{unitAfter}
            </Box>
        </Grid>
    );
}

function MarketDaySummary(props) {

    if (!props.open) {
        return null;
    }

    let { open, close } = props;
    let deltaValue = close.value - open.value;
    let deltaCash = close.cash - open.cash;
    let deltaPositions = {};

    for (let [stock, quantity] of Object.entries(close.positions)) {
        if (!deltaPositions[stock]) {
            deltaPositions[stock] = {};
        }
        deltaPositions[stock].close = quantity;
    }
    for (let [stock, quantity] of Object.entries(open.positions)) {
        if (!deltaPositions[stock]) {
            deltaPositions[stock] = {};
        }
        deltaPositions[stock].open = quantity;
    }
    for (let stock of Object.keys(deltaPositions)) {
        if (!deltaPositions[stock].open) {
            deltaPositions[stock].open = 0;
        }

        if (!deltaPositions[stock].close) {
            deltaPositions[stock].close = 0;
        }

        deltaPositions[stock].delta = deltaPositions[stock].close - deltaPositions[stock].open;
    }

    console.log(deltaPositions)

    let deltaPositionsComponents = Object.entries(deltaPositions).map(([stock, delta]) =>
        <SinglePositionSummary name={stock} openValue={delta.open} closeValue={delta.close} deltaValue={delta.delta} unitAfter=" shares" />
    );

    return (
        <Box borderWidth="2px" p="12px" rounded="8px" marginY="8px">
            <Heading size="md">Day Summary</Heading>
            <Divider />
            <Box>
                <SinglePositionSummary name="Value" openValue={open.value} closeValue={close.value} deltaValue={deltaValue} unitBefore="$" />
                <SinglePositionSummary name="Cash" openValue={open.cash} closeValue={close.cash} deltaValue={deltaCash} unitBefore="$" />
                {deltaPositionsComponents}
            </Box>
        </Box>
    );
}

export default MarketDaySummary;