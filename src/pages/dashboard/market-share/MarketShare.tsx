import { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart as PieChartIcon, TrendingUp, Target, BarChart2 } from 'lucide-react';
import Card from '../../../components/ui/Card';
import MetricCard from '../../../components/ui/MetricCard';
import LineChart from '../../../components/charts/LineChart';
import PieChart from '../../../components/charts/PieChart';
import DoughnutChart from '../../../components/charts/DoughnutChart';

const MarketShare = () => {
  const marketMetrics = {
    totalMarketShare: 23.5,
    growth: 2.8,
    categoryLeadership: 3,
    penetrationRate: 68.5
  };

  const marketShareTrend = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [
      {
        label: 'Доля рынка (%)',
        data: [20.5, 21.2, 21.8, 22.3, 23.1, 23.5],
        borderColor: 'rgba(99, 102, 241, 1)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
      }
    ]
  };

  const categoryShare = {
    labels: ['Электроника', 'Аксессуары', 'Гаджеты', 'Аудио', 'Умный дом'],
    data: [35, 25, 20, 15, 5],
    backgroundColor: [
      'rgba(99, 102, 241, 0.8)',
      'rgba(14, 165, 233, 0.8)',
      'rgba(249, 115, 22, 0.8)',
      'rgba(139, 92, 246, 0.8)',
      'rgba(236, 72, 153, 0.8)',
    ],
  };

  const regionShare = {
    labels: ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Новосибирск', 'Другие'],
    data: [40, 25, 15, 10, 10],
    backgroundColor: [
      'rgba(99, 102, 241, 0.8)',
      'rgba(14, 165, 233, 0.8)',
      'rgba(249, 115, 22, 0.8)',
      'rgba(139, 92, 246, 0.8)',
      'rgba(236, 72, 153, 0.8)',
    ],
  };

  const marketLeaders = [
    { category: 'Электроника', share: 35, position: 1, trend: 2.5 },
    { category: 'Аксессуары', share: 25, position: 2, trend: 1.8 },
    { category: 'Гаджеты', share: 20, position: 2, trend: -0.5 },
    { category: 'Аудио', share: 15, position: 3, trend: 1.2 },
    { category: 'Умный дом', share: 5, position: 4, trend: 0.8 },
  ];

  return (
    <div className="py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Доля Рынка</h1>
        <p className="text-gray-400">Анализ позиции на рынке и распределение по сегментам</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Общая доля рынка"
          value={`${marketMetrics.totalMarketShare}%`}
          icon={<PieChartIcon size={24} />}
          gradient="primary"
          change={marketMetrics.growth}
        />
        <MetricCard
          title="Рост"
          value={`${marketMetrics.growth}%`}
          icon={<TrendingUp size={24} />}
          gradient="secondary"
        />
        <MetricCard
          title="Лидерство в категориях"
          value={marketMetrics.categoryLeadership}
          icon={<Target size={24} />}
          gradient="accent"
        />
        <MetricCard
          title="Проникновение"
          value={`${marketMetrics.penetrationRate}%`}
          icon={<BarChart2 size={24} />}
          gradient="primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Динамика доли рынка</h2>
          <LineChart
            title=""
            labels={marketShareTrend.labels}
            datasets={marketShareTrend.datasets}
          />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Распределение по категориям</h2>
          <PieChart
            labels={categoryShare.labels}
            data={categoryShare.data}
            backgroundColor={categoryShare.backgroundColor}
          />
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Региональное распределение</h2>
          <DoughnutChart
            labels={regionShare.labels}
            data={regionShare.data}
            backgroundColor={regionShare.backgroundColor}
          />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Лидерство в категориях</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="text-left pb-3 px-4">Категория</th>
                  <th className="text-right pb-3 px-4">Доля</th>
                  <th className="text-right pb-3 px-4">Позиция</th>
                  <th className="text-right pb-3 px-4">Тренд</th>
                </tr>
              </thead>
              <tbody>
                {marketLeaders.map((leader, index) => (
                  <tr key={index} className="border-b border-dark-700/50 hover:bg-dark-700/30">
                    <td className="py-3 px-4">{leader.category}</td>
                    <td className="py-3 px-4 text-right">{leader.share}%</td>
                    <td className="py-3 px-4 text-right">#{leader.position}</td>
                    <td className="py-3 px-4 text-right">
                      <span className={`flex items-center justify-end ${
                        leader.trend >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {leader.trend >= 0 ? (
                          <TrendingUp size={16} className="mr-1" />
                        ) : (
                          <TrendingDown size={16} className="mr-1" />
                        )}
                        {Math.abs(leader.trend)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MarketShare;