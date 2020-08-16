import {
    Box,
    Divider,
    Flex,
    Heading,
    SimpleGrid,
} from "@chakra-ui/core";
import React from "react";

function MarketEventHistoryPositionsCard(props) {

    let { title, data } = props;

    if (!data) {
        return <Box borderWidth="2px" p="12px" rounded="8px" marginY="8px">
            <Flex justifyContent="flex-start" alignContent="center">
                <Heading size="md">{title}</Heading>
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

    return (
        <Box borderWidth="2px" p="12px" rounded="8px" marginY="8px">
            <Flex justifyContent="flex-start" alignContent="center">
                <Heading size="md">{title}</Heading>
            </Flex>
            <Divider />
            <SimpleGrid columns={2}>
                {positions}
                <Box>Cash</Box>
                <Box>${data.cash}</Box>
            </SimpleGrid>

            <br />

            <Flex justifyContent="flex-start" alignContent="center">
                <Heading size="md">Total Value</Heading>
            </Flex>
            <Divider />
            <Box>${data.value}</Box>
        </Box>
    );
}

export default MarketEventHistoryPositionsCard;