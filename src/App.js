import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Box, SimpleGrid } from "@chakra-ui/core";
import Header from "./components/Header";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid templateColumns={"75fr 25fr"} spacing={10}>
        <Box bg="blue" height="512px">
          <Chart />
        </Box>
        <Box bg="tomato" height="100vh"></Box>
      </Grid>
    </div>
  );
}

export default App;
