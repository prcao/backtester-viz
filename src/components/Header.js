import React from 'react';
import { Flex, Box, Grid } from "@chakra-ui/core";

function Header(props) {
    return (
        <Grid templateColumns="25fr 50fr 25fr" shadow="20px" zIndex="9999" boxShadow="0 1px 5px 1px">
            <Flex height="64px" justifyContent="center" alignItems="center">
                Backtest
            </Flex>
            <Box />
            <Flex height="64px" justifyContent="center" alignItems="center">
                Contact
            </Flex>
        </Grid>

    );
}

export default Header;