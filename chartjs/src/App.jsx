import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarChart from './components/BarChart.jsx';
import {options, data} from './utils/Data.jsx';
function App() {
  const config = {
    options: options,
    data: data
  };
  return (
    <>
      <BarChart {...config}/>
    </>
  )
}

export default App;
