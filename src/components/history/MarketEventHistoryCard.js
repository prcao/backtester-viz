import {
    Alert, Box,
    Grid,
    PseudoBox, Text, AlertIcon, Tag, Flex
} from "@chakra-ui/core";
import React from 'react';
import MarketOrder from "./MarketOrder";

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
    return (
        <PseudoBox p={4} textAlign="left" _hover={{ bg: 'gray.50', cursor: 'pointer' }}>
            <Box marginBottom="4px">
                <b>
                    {props.data['eventType']}
                </b>
            </Box>
            <MarketOrder order={props.data.order} />
            {props.data.message &&
                <MarketEventHistoryCardAlert eventType={props.data['eventType']}>
                    {props.data.message}
                </MarketEventHistoryCardAlert>
            }
        </PseudoBox>
    );
}

export default MarketEventHistoryCard;