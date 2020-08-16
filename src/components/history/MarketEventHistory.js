import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box,
    Grid,
    Text,
    Divider,
    PseudoBox,
    Heading,
} from "@chakra-ui/core";
import { eventHistory } from "../../data/mock-data";
import { groupBy } from "../../util/Util";

const dataToAccordionItem = (date, data) => {

    let cards = data.map(event =>
        <MarketEventHistoryCard data={event} />
    );

    return (
        <AccordionItem key={date}>
            <AccordionHeader>
                <Box flex="1" textAlign="left">
                    {date}
                </Box>
                <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel pb={4}>
                <Box borderWidth="2px" rounded="8px">
                    {cards}
                </Box>
            </AccordionPanel>
        </AccordionItem>
    );
}

const getOrderTypeText = (orderType) => {
    switch (orderType) {
        case 'BUY':
            return <Text color="green.500">{orderType}</Text>
        case 'SELL':
            return <Text color="red.500">{orderType}</Text>
        default:
            return <Text>{orderType}</Text>
    }
}

function MarketEventHistoryCard(props) {

    let orderType = props.data['order']['orderType'];

    return (
        <PseudoBox p={4} textAlign="left" _hover={{ bg: 'gray.50', cursor: 'pointer' }}>
            <Box><b>{props.data['eventType']}</b></Box>
            <Grid templateColumns="25fr 50fr 25fr">
                <Box><b>{getOrderTypeText(orderType)}</b></Box>
                <Box>{props.data['order']['quantity']} shares of {props.data['order']['ticker']}</Box>
                <Box>@{props.data['order']['limitPrice']}</Box>
            </Grid>
        </PseudoBox>
    );
}

function MarketEventHistory(props) {

    let groupedEvents = groupBy(eventHistory, 'date');
    console.log(eventHistory)

    return (
        <Box borderWidth="1px" borderTop="0">
            <Box p="12px">
                <Heading>Action History</Heading>
            </Box>
            <Accordion overflow="scroll" overflowX="hidden" height="85vh">
                {Object.keys(groupedEvents).map(key => dataToAccordionItem(key, groupedEvents[key]))}
            </Accordion>
        </Box>

    );
}

export default MarketEventHistory;