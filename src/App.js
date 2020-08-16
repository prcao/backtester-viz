import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Box, SimpleGrid, ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from "./components/Header";
import Chart from "./components/Chart";
import MarketEventHistory from "./components/history/MarketEventHistory";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className="App">
        <Header />
        <Grid templateColumns={"75fr 25fr"} spacing={10}>
          <Box bg="blue" height="512px">
            <Chart />
          </Box>
          <MarketEventHistory /><Box bg="tomato" height="100vh"></Box>
        </Grid>
      </div>
    </ThemeProvider>

  );
}

export default App;
