import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  title: string;
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string;
    hoverBackgroundColor?: string;
  }>;
  horizontal?: boolean;
}

const BarChart = ({ 
  title, 
  labels, 
  datasets,
  horizontal = false
}: BarChartProps) => {
  const options = {
    indexAxis: horizontal ? 'y' as const : 'x' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            family: "'Inter', sans-serif",
          },
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
    scales: {
      x: {
        grid: {
          color: 'rgba(75, 85, 99, 0.2)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            family: "'Inter', sans-serif",
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(75, 85, 99, 0.2)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            family: "'Inter', sans-serif",
          },
        },
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    barPercentage: 0.7,
    categoryPercentage: 0.7,
  };

  const chartData = {
    labels,
    datasets: datasets.map(dataset => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: dataset.backgroundColor,
      hoverBackgroundColor: dataset.hoverBackgroundColor || dataset.backgroundColor,
      borderRadius: 4,
      borderWidth: 0,
    })),
  };

  return (
    <div className="h-full min-h-[300px] w-full p-2">
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default BarChart;