import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {Data} from './utils/Data.jsx';
import BarChart from './components/BarChart.jsx';
import Count from './components/Count.jsx';
import SideMenu from './components/Sidebar.jsx';

function App() {

  return (
    <>
      <SideMenu />
      <Count/>
      <BarChart {...Data} />
    </>
  )
}

export default App;
