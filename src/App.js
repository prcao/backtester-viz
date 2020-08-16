import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Box, SimpleGrid, ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from "./components/Header";
import Chart from "./components/dashboard/Chart";
import MarketEventHistory from "./components/history/MarketEventHistory";

function App() {

  return (
    <ThemeProvider>
      <CSSReset />
      <Box height="100vh">
        <Header />
        <Grid templateColumns={"75fr 25fr"} spacing={10}>

          <Chart />
          <MarketEventHistory />
        </Grid>
      </Box>
    </ThemeProvider>

  );
}

export default App;
