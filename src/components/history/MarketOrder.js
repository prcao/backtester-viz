
import { Flex, Grid, Tag } from "@chakra-ui/core";
import React from 'react';

const getOrderTypeText = (orderType) => {
    switch (orderType) {
        case 'BUY':
            return <Tag variantColor="green">{orderType}</Tag>
        case 'SELL':
            return <Tag variantColor="red">{orderType}</Tag>
        default:
            return <Tag>{orderType}</Tag>
    }
}

function MarketOrder(props) {
    return (
        <Grid templateColumns="25fr 75fr">
            <Flex justifyContent="flex-start" alignItems="center"><b>{getOrderTypeText(props.order['orderType'])}</b></Flex>
            <Flex justifyContent="center" alignItems="center">
                {props.order['quantity']} shares of {props.order['ticker']}
                @{props.order['limitPrice']}
            </Flex>
        </Grid>
    );
}

export default MarketOrder;