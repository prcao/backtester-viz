import {
    Accordion,
    AccordionHeader,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading
} from "@chakra-ui/core";
import React from "react";
import { groupBy } from "../../util/Util";
import MarketEventHistoryCard from "./MarketEventHistoryCard";

const dataToAccordionItem = (date, data) => {

    let cards = data.map(event =>
        <MarketEventHistoryCard data={event} key={date + event.eventType + event.order.orderType + event.order.quantity + event.order.ticker} />
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

function MarketEventHistory(props) {

    let groupedEvents = groupBy(props.data, 'date');

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