import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  title?: string;
  labels: string[];
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor?: string[];
  cutout?: string;
  borderColor?: string;
}

const DoughnutChart = ({ 
  title, 
  labels, 
  data, 
  backgroundColor,
  hoverBackgroundColor,
  cutout = '70%',
  borderColor = 'rgba(17, 24, 39, 0.8)',
}: DoughnutChartProps) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            family: "'Inter', sans-serif",
          },
          padding: 20,
          boxWidth: 12,
          boxHeight: 12,
        },
      },
      title: {
        display: title ? true : false,
        text: title,
        color: 'rgba(255, 255, 255, 0.9)',
        font: {
          family: "'Inter', sans-serif",
          size: 16,
          weight: '500',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleFont: {
          family: "'Inter', sans-serif",
        },
        bodyFont: {
          family: "'Inter', sans-serif",
        },
        borderColor: 'rgba(107, 114, 128, 0.3)',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        hoverBackgroundColor: hoverBackgroundColor || backgroundColor,
        borderColor,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="h-full min-h-[300px] w-full p-4">
      <Doughnut options={options} data={chartData} />
    </div>
  );
};

export default DoughnutChart;