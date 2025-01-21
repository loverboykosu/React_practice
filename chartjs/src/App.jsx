import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarChart from './components/BarChart.jsx';
import {Data} from './utils/Data.jsx';
import Count from './components/Count.jsx'
function App() {

  return (
    <>
      <Count/>
      <BarChart {...Data} />
    </>
  )
}

export default App;
