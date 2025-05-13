import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Target, Share2 } from 'lucide-react';
import Card from '../../../components/ui/Card';
import MetricCard from '../../../components/ui/MetricCard';
import LineChart from '../../../components/charts/LineChart';
import RadarChart from '../../../components/charts/RadarChart';
import PieChart from '../../../components/charts/PieChart';

const Competitors = () => {
  const competitorMetrics = {
    totalCompetitors: 156,
    marketShare: 23.5,
    competitiveIndex: 82,
    pricePosition: 'Выше среднего',
  };

  const marketShareData = {
    labels: ['Ваш магазин', 'Конкурент A', 'Конкурент B', 'Конкурент C', 'Другие'],
    data: [23.5, 18.2, 15.8, 12.5, 30],
    backgroundColor: [
      'rgba(99, 102, 241, 0.8)',
      'rgba(14, 165, 233, 0.8)',
      'rgba(249, 115, 22, 0.8)',
      'rgba(139, 92, 246, 0.8)',
      'rgba(236, 72, 153, 0.8)',
    ],
  };

  const competitiveAnalysis = {
    labels: ['Цена', 'Качество', 'Ассортимент', 'Сервис', 'Доставка', 'Маркетинг'],
    datasets: [
      {
        label: 'Ваш магазин',
        data: [85, 90, 75, 88, 82, 78],
        backgroundColor: 'rgba(99, 102, 241, 0.3)',
        borderColor: 'rgba(99, 102, 241, 0.8)',
      },
      {
        label: 'Среднее по рынку',
        data: [75, 82, 70, 80, 75, 72],
        backgroundColor: 'rgba(249, 115, 22, 0.3)',
        borderColor: 'rgba(249, 115, 22, 0.8)',
      },
    ],
  };

  const competitors = [
    { name: 'Конкурент A', marketShare: 18.2, growth: 5.2, strength: 'Цены' },
    { name: 'Конкурент B', marketShare: 15.8, growth: 3.8, strength: 'Ассортимент' },
    { name: 'Конкурент C', marketShare: 12.5, growth: -1.2, strength: 'Маркетинг' },
    { name: 'Конкурент D', marketShare: 10.2, growth: 2.5, strength: 'Сервис' },
    { name: 'Конкурент E', marketShare: 8.8, growth: -0.5, strength: 'Доставка' },
  ];

  return (
    <div className="py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Анализ Конкурентов</h1>
        <p className="text-gray-400">Мониторинг конкурентной среды и позиционирования</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Всего конкурентов"
          value={competitorMetrics.totalCompetitors}
          icon={<Users size={24} />}
          gradient="primary"
        />
        <MetricCard
          title="Доля рынка"
          value={`${competitorMetrics.marketShare}%`}
          icon={<Share2 size={24} />}
          gradient="secondary"
          change={2.5}
        />
        <MetricCard
          title="Индекс конкурентоспособности"
          value={competitorMetrics.competitiveIndex}
          icon={<Target size={24} />}
          gradient="accent"
        />
        <MetricCard
          title="Ценовое позиционирование"
          value={competitorMetrics.pricePosition}
          icon={<TrendingUp size={24} />}
          gradient="primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Распределение долей рынка</h2>
          <div style={{ height: '300px' }}>
            <PieChart
              labels={marketShareData.labels}
              data={marketShareData.data}
              backgroundColor={marketShareData.backgroundColor}
            />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Сравнительный анализ</h2>
          <div style={{ height: '300px' }}>
            <RadarChart
              title=""
              labels={competitiveAnalysis.labels}
              datasets={competitiveAnalysis.datasets}
            />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Основные конкуренты</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left pb-3 px-4">Конкурент</th>
                <th className="text-right pb-3 px-4">Доля рынка</th>
                <th className="text-right pb-3 px-4">Рост</th>
                <th className="text-right pb-3 px-4">Сильная сторона</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((competitor, index) => (
                <tr key={index} className="border-b border-dark-700/50 hover:bg-dark-700/30">
                  <td className="py-3 px-4">{competitor.name}</td>
                  <td className="py-3 px-4 text-right">{competitor.marketShare}%</td>
                  <td className="py-3 px-4 text-right">
                    <span
                      className={`flex items-center justify-end ${
                        competitor.growth >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {competitor.growth >= 0 ? (
                        <TrendingUp size={16} className="mr-1" />
                      ) : (
                        <TrendingDown size={16} className="mr-1" />
                      )}
                      {Math.abs(competitor.growth)}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">{competitor.strength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Competitors;