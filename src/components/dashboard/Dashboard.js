import { Box } from "@chakra-ui/core";
import React from "react";
import Chart from "./Chart";
import SummaryDash from "./SummaryDash";


function Dashboard(props) {

    return (
        <Box height="95vh" p="5%" paddingTop="2%">
            <SummaryDash data={props.data} />
            <Chart data={props.data} />
        </Box>

    );
}

export default Dashboard;