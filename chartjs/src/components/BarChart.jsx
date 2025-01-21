import { Bar } from "react-chartjs-2";
import React from "react";
import useState from "react";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
} from 'chart.js'
import props from '../utils/Data.jsx';


ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,Title
);
const BarChart = (props) => {
  // const [data,setData] = useState(0);

    return(
        <>
            <Bar {...props}></Bar>
        </>

    );
}

export default BarChart;