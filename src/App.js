import React from 'react';
import './App.css';
import BarChartComponent from './components/BarChartComponent';
import LineChartComponent from './components/LineChartComponent';

function App() {
  return (
    <div className="App">
      <h1>Hachidori Charts</h1>
      <div className="chart-container">
        <h2>Bar Chart</h2>
        <BarChartComponent />
        <h2>Line Chart</h2>
        <LineChartComponent />
      </div>
    </div>
  );
}

export default App;
