import {
    Accordion,
    AccordionHeader,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    Divider
} from "@chakra-ui/core";
import React from "react";
import { groupBy, keyToIndexes } from "../../util/Util";
import MarketEventHistoryCard from "./MarketEventHistoryCard";
import MarketEventHistorySummaryCard from "./MarketEventHistorySummaryCard";

const dataToAccordionItem = (date, data, dateToIndexMap, history) => {

    return (
        <AccordionItem key={date}>
            <AccordionHeader>
                <Box flex="1" textAlign="left">
                    {date}
                </Box>
                <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel pb={4}>
                <MarketEventHistoryDayPanel history={history} dateToIndexMap={dateToIndexMap} data={data} date={date} />
            </AccordionPanel>
        </AccordionItem>
    );
}


function MarketEventHistoryDayPanel(props) {

    let { history, date, data, dateToIndexMap } = props;

    let prevData = data[dateToIndexMap[date] - 1];
    let currData = data[dateToIndexMap[date]];

    let cards = history.map(event =>
        <MarketEventHistoryCard data={event} key={date + event.eventType + event.order.orderType + event.order.quantity + event.order.ticker} />
    );

    return (
        <Box>
            <MarketEventHistorySummaryCard title="Open"
                data={prevData} />
            <Box borderWidth="2px" rounded="8px">
                <Box p={4} paddingBottom={0}>
                    <Heading size="md">Events</Heading>
                    <Divider />
                </Box>
                {cards}
            </Box>
            <MarketEventHistorySummaryCard title="EOD"
                data={currData} />
        </Box>
    );
}

function MarketEventHistory(props) {

    let groupedEvents = groupBy(props.history, 'date');
    let dateToDataMap = keyToIndexes(props.data, 'date');

    return (
        <Box borderWidth="1px" borderTop="0" height="95vh">
            <Box p="12px" borderWidth="1px">
                <Heading>Action History</Heading>
            </Box>
            <Accordion overflow="scroll" overflowX="hidden" height="85vh" allowToggle>
                {Object.keys(groupedEvents).map(key => dataToAccordionItem(key, props.data, dateToDataMap, groupedEvents[key]))}
            </Accordion>
        </Box>

    );
}

export default MarketEventHistory;