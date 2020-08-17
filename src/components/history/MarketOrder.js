
import { Flex, Grid, Tag, Box } from "@chakra-ui/core";
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
        <Box borderWidth="2px" rounded="4px" p="4px" paddingX="12px">
            <Grid templateColumns="25fr 50fr 25fr">
                <Flex justifyContent="flex-start" alignItems="center"><b>{getOrderTypeText(props.order['orderType'])}</b></Flex>
                <Box>
                    <Grid templateColumns="75fr 25fr">
                        <Flex justifyContent="center" alignItems="center">
                            {props.order['quantity']} shares of {props.order['ticker']}
                        </Flex>
                        <Flex justifyContent="center" alignItems="center">
                            @{props.order['limitPrice'].toFixed(3)}
                        </Flex>
                    </Grid>
                    <Flex justifyContent="center" alignItems="center">
                        Expires {props.order['expirationDate']}
                    </Flex>
                </Box>


            </Grid>

        </Box>


    );
}

export default MarketOrder;