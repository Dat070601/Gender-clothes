// src/components/ColumnChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ColumnChart = () => {
  const data = {
    labels: ["4LOVA", "5S", "AAA JEANS", "ADINO", "ALIGO", "ALIGRO", "ARADO FASHION", "ARCTIC HUNTER", "AVIANO", "AZUNO", "BABOYKA", "BEYONO", "BITI'S", "BLOOK", "BYS B.Y.S BE YOURSELF", "BẢO BẢO STORE", "CATRIO", "CHANDI", "CHÍ PHÈO", "COLUMBIA", "COUPLE TX", "CTJEANS", "DECEMBERY", "DECKEY", "DLX", "DOKA", "DOKAFASHION", "DOTTIE", "EMSPO", "ENKONI", "FACIO", "FASHION EKING CLOTHING", "FASVIN", "FEZZIO", "FILA", "FREEMAN", "G.E.M", "GIGI", "GIORDANO", "GOKING", "GOLD RHINO", "HAINT BOUTIQUE", "HATI", "HAVAIANAS", "HIBI SPORTS", "HITY", "HIỀN TRẦN BOUTIQUE", "HOYANG", "HQJEANS", "IBASIC", "ICOTTON", "JINRINTEEN", "JOHN HENRY", "JULIDO STORE", "JUNO", "KHATOCO", "LADOS", "LAHSTORE", "LALIZ", "LEMAN", "LMCATION", "LOVEKIDS", "LQ LUXURY", "MAXIVIC", "MESSI", "MMLG", "MOTIVE", "MRM MANLYWEAR", "MXM", "N6", "NEW BALANCE", "NEXX & DEE", "NHUH20", "NIU24", "NOVELTY", "OEM", "ONWAYS", "ORLA", "OVERCO", "OWEN", "PEONY", "PHÚC AN", "PHÚC AN FASHION", "PIERRE CARDIN", "PUMA", "RELAX", "ROUTINE", "SADOGA", "SANTINO", "SPORTSLINK", "SWE", "SZONE", "TEEWORLD", "TITISHOP", "TSIMPLE", "TYM", "UNDER ARMOUR", "UPZ", "US ARMY", "VALENTINO CREATIONS", "VENUM", "VICCI", "VICERO", "VIETTIEN", "VIỆT PHÁP COLLECTION", "VIỆT TIẾN", "VONESA", "WFSTUDIOS", "WINFA", "YAMAHA", "YU CHERRY", "ZART", "ĐŨI VIỆT"],
    datasets: [
      {
        label: 'Scrollable Bar Chart Example',
        data: [209, 125, 352, 54, 508, 892, 1012, 73, 317, 215, 156, 169, 38, 50, 566, 1121, 176, 895, 97, 41, 98, 216, 223, 974, 3340, 1961, 2610, 842, 76, 336, 622, 249, 67, 84, 621, 1051, 107, 88, 566, 10852, 624, 837, 4, 15, 276, 150, 278, 93, 35, 4, 285, 5985, 65, 166, 107, 703, 608, 144, 3516, 688, 165, 895, 97, 301, 1258, 488, 427, 1621, 1249, 41, 435, 2165, 1629, 4832, 4392, 1000, 704, 92, 729, 62, 240, 41, 104, 44, 3562, 141, 787, 219, 55, 117, 3, 1049, 3329, 98, 354, 103, 550, 16, 4, 735, 24, 37, 289, 799, 151, 129, 4535, 94, 386, 456, 106, 99, 186],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Đặt false để biểu đồ không duy trì tỷ lệ khung hình cố định
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
      <div style={{ width: '500px', height: '100%' }}>
        <div style={{ width: `${data.labels.length * 30}px`, height: '100%' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;