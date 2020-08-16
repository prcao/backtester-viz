import {
    Alert, Box,
    Grid,

    PseudoBox, Text, AlertIcon, Tag, Flex
} from "@chakra-ui/core";
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

function MarketEventHistoryCardAlert(props) {

    let status;

    switch (props.eventType) {
        case 'FAILED_TO_EXECUTE':
            status = "warning";
            break;
        case 'EXPIRED':
            status = "info";
            break;
        default:
            status = "info";
    }

    return (
        <Alert status={status} variant="left-accent" m="8px" rounded="4px" marginBottom="0">
            <AlertIcon />
            {props.children}
        </Alert>
    );
}

function MarketEventHistoryCard(props) {

    let orderType = props.data['order']['orderType'];

    return (
        <PseudoBox p={4} textAlign="left" _hover={{ bg: 'gray.50', cursor: 'pointer' }}>
            <Box marginBottom="4px">
                <b>
                    {props.data['eventType']}
                </b>
            </Box>
            <Grid templateColumns="25fr 50fr 25fr">
                <Flex justifyContent="flex-start" alignItems="center"><b>{getOrderTypeText(orderType)}</b></Flex>
                <Flex justifyContent="center" alignItems="center">
                    {props.data['order']['quantity']} shares of {props.data['order']['ticker']}
                </Flex>
                <Flex justifyContent="center" alignItems="center">
                    @{props.data['order']['limitPrice']}
                </Flex>
            </Grid>
            {props.data.message &&
                <MarketEventHistoryCardAlert eventType={props.data['eventType']}>
                    {props.data.message}
                </MarketEventHistoryCardAlert>
            }
        </PseudoBox>
    );
}

export default MarketEventHistoryCard;