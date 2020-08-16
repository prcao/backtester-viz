import React from 'react';
import { Flex, Box, Grid, Heading } from "@chakra-ui/core";

function Header(props) {
    return (
        <Grid templateColumns="25fr 50fr 25fr" borderBottom="2px" borderColor="gray.300">
            <Flex height="5vh" padding="8px 16px">
                <Heading>Backtest</Heading>
            </Flex>
            <Box />
            <Flex flexDirection="row" height="64px" justifyContent="flex-end" alignItems="center" padding="8px 16px">
                Contact
            </Flex>
        </Grid>

    );
}

export default Header;