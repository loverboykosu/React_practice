import { Bar } from "react-chartjs-2";
import React from "react";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'


ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);
const BarChart = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart"
          }
        }
      };

    const labels = ["January", "February", "March", "April", "May", "June", "July"];
    const data1 = [12, 11, 14, 52, 14, 32, 36];
    const data2 = [22, 31, 17, 32, 24, 62, 66];

    const data = {
    labels, // x軸のラベルの配列
    datasets: [
        {
        label: "Dataset 1", // 凡例
        data: data1,        // データの配列(labelsと要素数同じ)
        backgroundColor: "rgba(255, 99, 132, 0.5)" // グラフの棒の色
        },
        {
        label: "Dataset 2",
        data: data2,
        backgroundColor: "rgba(53, 162, 235, 0.5)"
        }
    ]
    };

    return(
        <>
            <Bar data={data} options = {options}></Bar>
        </>

    );
}

export default BarChart;