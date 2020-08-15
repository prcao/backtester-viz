import React from 'react';
import { Flex, Box, Grid } from "@chakra-ui/core";

function Header(props) {
    return (
        <Grid templateColumns="25fr 50fr 25fr">
            <Flex bg="red" height="64px" justifyContent="center" alignItems="center">
                Logo
            </Flex>
            <Box bg="purple"/>
            <Flex bg="red" height="64px" justifyContent="center" alignItems="center">
                Menu or something
            </Flex>
        </Grid>

    );
}

export default Header;