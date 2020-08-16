import {
    Box,
    Divider,
    Flex,
    Heading,
    SimpleGrid,
} from "@chakra-ui/core";
import React from "react";
import MarketOrder from "./MarketOrder";

function MarketEventHistorySummaryCard(props) {

    let { title, data } = props;

    if (!data) {
        return <Box borderWidth="2px" p="12px" rounded="8px" marginY="8px">
            <Flex justifyContent="flex-start" alignContent="center">
                <Heading size="md">Summary at {title}</Heading>
            </Flex>
            <Divider />
            <Flex justifyContent="center" alignContent="center">
                <Heading size="md">No data</Heading>
            </Flex>
        </Box>
    }

    let positions = Object.entries(data.positions).map(([stock, quantity]) =>
        <React.Fragment key={stock}>
            <Box>{stock}</Box>
            <Box>{quantity}</Box>
        </React.Fragment>
    );

    let orders = data.outstandingOrders.map(order => <MarketOrder order={order} />);

    return (
        <Box borderWidth="2px" p="12px" rounded="8px" marginY="8px">
            <Box>
                <Heading size="md">Positions at {title}</Heading>
            </Box>
            <Divider />
            <SimpleGrid columns={2}>
                {positions}
                <Box>Cash</Box>
                <Box>${data.cash}</Box>
            </SimpleGrid>
            <br />

            {data.outstandingOrders.length > 0 &&
                <Box>
                    <Box>
                        <Heading size="md">Outstanding Orders at {title}</Heading>
                    </Box>
                    <Divider />
                    {orders}
                    <br />
                </Box>
            }



            <Box>
                <Heading size="md">Total Value</Heading>
            </Box>
            <Divider />
            <Box>${data.value}</Box>
        </Box>
    );
}

export default MarketEventHistorySummaryCard;