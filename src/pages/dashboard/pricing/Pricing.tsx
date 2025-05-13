import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import Card from '../../../components/ui/Card';
import MetricCard from '../../../components/ui/MetricCard';
import LineChart from '../../../components/charts/LineChart';
import BarChart from '../../../components/charts/BarChart';

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const priceMetrics = {
    averagePrice: 5999,
    priceChange: 3.2,
    marginRate: 28.5,
    competitivenessScore: 85,
  };

  const priceHistory = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [
      {
        label: 'Средняя цена',
        data: [5500, 5600, 5750, 5800, 5900, 5999],
        borderColor: 'rgba(99, 102, 241, 1)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
      },
    ],
  };

  const priceDistribution = {
    labels: ['0-1000₽', '1000-3000₽', '3000-5000₽', '5000-10000₽', '10000+₽'],
    datasets: [
      {
        label: 'Количество товаров',
        data: [150, 280, 320, 220, 130],
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

  const priceAlerts = [
    { product: 'Беспроводные наушники Pro', currentPrice: 7999, change: -5.2 },
    { product: 'Смарт-часы Ultra', currentPrice: 12999, change: 3.8 },
    { product: 'Портативная колонка Max', currentPrice: 4999, change: -2.5 },
    { product: 'Фитнес-браслет Pulse', currentPrice: 3999, change: 1.5 },
    { product: 'Внешний аккумулятор Power', currentPrice: 2999, change: -1.8 },
  ];

  return (
    <div className="py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Анализ Цен</h1>
        <p className="text-gray-400">Мониторинг и оптимизация ценовой политики</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Средняя цена"
          value={`₽${priceMetrics.averagePrice.toLocaleString()}`}
          icon={<DollarSign size={24} />}
          gradient="primary"
          change={priceMetrics.priceChange}
        />
        <MetricCard
          title="Изменение цен"
          value={`${priceMetrics.priceChange}%`}
          icon={<TrendingUp size={24} />}
          gradient="secondary"
        />
        <MetricCard
          title="Маржинальность"
          value={`${priceMetrics.marginRate}%`}
          icon={<DollarSign size={24} />}
          gradient="accent"
        />
        <MetricCard
          title="Конкурентоспособность"
          value={priceMetrics.competitivenessScore}
          icon={<TrendingUp size={24} />}
          gradient="primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">История изменения цен</h2>
          <div style={{ height: '300px' }}>
            <LineChart
              title=""
              labels={priceHistory.labels}
              datasets={priceHistory.datasets}
            />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Распределение цен</h2>
          <div style={{ height: '300px' }}>
            <BarChart
              title=""
              labels={priceDistribution.labels}
              datasets={priceDistribution.datasets}
            />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Ценовые оповещения</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left pb-3 px-4">Товар</th>
                <th className="text-right pb-3 px-4">Текущая цена</th>
                <th className="text-right pb-3 px-4">Изменение</th>
              </tr>
            </thead>
            <tbody>
              {priceAlerts.map((alert, index) => (
                <tr key={index} className="border-b border-dark-700/50 hover:bg-dark-700/30">
                  <td className="py-3 px-4">{alert.product}</td>
                  <td className="py-3 px-4 text-right">₽{alert.currentPrice.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right">
                    <span
                      className={`flex items-center justify-end ${
                        alert.change >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {alert.change >= 0 ? (
                        <TrendingUp size={16} className="mr-1" />
                      ) : (
                        <TrendingDown size={16} className="mr-1" />
                      )}
                      {Math.abs(alert.change)}%
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

export default Pricing;