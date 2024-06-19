import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React, { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ColumnChart = ({ categoryId }) => {
  const [chartData, setChartData] = useState(null);
  const fetchProducts = async (categoryId) => {
    try {
      const response = await fetch('http://localhost:8000/product/getListByCategory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category_id: categoryId }),
      });
      const data = await response.json();
      console.log('Products:', data);

      const formattedData = {
        labels: data.Labels,
        datasets: [
          {
            label: data.Title,
            data: data.Data,
            backgroundColor: data.Color,
            borderColor: data.Color,
            borderWidth: 1,
          },
        ],
      };
      setChartData(formattedData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    if (categoryId) {
      fetchProducts(categoryId);
    }
  }, [categoryId]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Scrollable Bar Chart Example',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '500px', overflowX: 'auto' }}>
      {chartData ? (
        <div style={{ width: `${chartData.labels.length * 50}px`, height: '100%' }}>
          <Bar data={chartData} options={options} />
        </div>
      ) : (
        <p>Loading chart...</p> 
      )}
    </div>
  );
};

export default ColumnChart;
