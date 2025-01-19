import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarChart from './components/BarChart.jsx';
function App() {
  const obj = {
    x: 1,
    y: 2
  }
  return (
    <>
      <BarChart/>
    </>
  )
}

export default App;
