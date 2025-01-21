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

  const labels = ["1", "2"];
  const data1 = [12, 11];
  const data2 = [22, 31];
  
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

export const Data = {
    options: options,
    data: data
};