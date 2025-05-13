import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Search, ShoppingBag } from 'lucide-react';
import Card from '../../../components/ui/Card';
import MetricCard from '../../../components/ui/MetricCard';
import LineChart from '../../../components/charts/LineChart';
import BarChart from '../../../components/charts/BarChart';

const Trends = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const trendMetrics = {
    searchVolume: 25678,
    growthRate: 15.4,
    popularCategories: 8,
    averageDemand: 89.2,
  };

  const searchTrends = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [
      {
        label: 'Поисковые запросы',
        data: [1200, 1350, 1250, 1400, 1500, 1300, 1450],
        borderColor: 'rgba(99, 102, 241, 1)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
      },
    ],
  };

  const popularSearches = [
    { term: 'беспроводные наушники', volume: 2500, growth: 15 },
    { term: 'смарт часы', volume: 2100, growth: 12 },
    { term: 'фитнес браслет', volume: 1800, growth: 8 },
    { term: 'портативная колонка', volume: 1500, growth: 5 },
    { term: 'power bank', volume: 1200, growth: 10 },
  ];

  const categoryTrends = {
    labels: ['Электроника', 'Одежда', 'Дом', 'Спорт', 'Красота'],
    datasets: [
      {
        label: 'Рост интереса (%)',
        data: [25, 18, 15, 12, 10],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(14, 165, 233, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)',
        ],
      },
    ],
  };

  return (
    <div className="py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Анализ Трендов</h1>
        <p className="text-gray-400">Исследование популярных тенденций и поведения покупателей</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Поисковые запросы"
          value={trendMetrics.searchVolume.toLocaleString()}
          icon={<Search size={24} />}
          gradient="primary"
        />
        <MetricCard
          title="Темп роста"
          value={`${trendMetrics.growthRate}%`}
          icon={<TrendingUp size={24} />}
          gradient="secondary"
          change={trendMetrics.growthRate}
        />
        <MetricCard
          title="Популярные категории"
          value={trendMetrics.popularCategories}
          icon={<ShoppingBag size={24} />}
          gradient="accent"
        />
        <MetricCard
          title="Средний спрос"
          value={`${trendMetrics.averageDemand}%`}
          icon={<TrendingUp size={24} />}
          gradient="primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Динамика поисковых запросов</h2>
          <div style={{ height: '300px' }}>
            <LineChart
              title=""
              labels={searchTrends.labels}
              datasets={searchTrends.datasets}
            />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Тренды по категориям</h2>
          <div style={{ height: '300px' }}>
            <BarChart
              title=""
              labels={categoryTrends.labels}
              datasets={categoryTrends.datasets}
            />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Популярные поисковые запросы</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left pb-3 px-4">Запрос</th>
                <th className="text-right pb-3 px-4">Объем</th>
                <th className="text-right pb-3 px-4">Рост</th>
              </tr>
            </thead>
            <tbody>
              {popularSearches.map((search, index) => (
                <tr key={index} className="border-b border-dark-700/50 hover:bg-dark-700/30">
                  <td className="py-3 px-4">{search.term}</td>
                  <td className="py-3 px-4 text-right">{search.volume.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right flex items-center justify-end">
                    <span className="text-green-400 flex items-center">
                      <TrendingUp size={16} className="mr-1" />
                      {search.growth}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Trends;