import { Box, CSSReset, Grid, ThemeProvider } from "@chakra-ui/core";
import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Header from "./components/Header";
import MarketEventHistory from "./components/history/MarketEventHistory";
import { data, eventHistory } from "./data/mock-data";

function App() {

  return (
    <ThemeProvider>
      <CSSReset />
      <Box height="100vh" overflow="hidden">
        <Header />
        <Grid templateColumns={"70fr 30fr"} spacing={10}>
          <Dashboard data={data} />
          <MarketEventHistory history={eventHistory} data={data} />
        </Grid>
      </Box>
    </ThemeProvider>

  );
}

export default App;
