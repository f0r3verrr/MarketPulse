import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, TrendingUp, DollarSign, Star } from 'lucide-react';
import Card from '../../../components/ui/Card';
import MetricCard from '../../../components/ui/MetricCard';
import BarChart from '../../../components/charts/BarChart';
import LineChart from '../../../components/charts/LineChart';

const Products = () => {
  const [timeRange, setTimeRange] = useState('month');

  const productMetrics = {
    totalProducts: 1247,
    activeListings: 892,
    averageRating: 4.7,
    revenue: 128750,
  };

  const tarpProducts = [
    { name: 'Беспроводные наушники Pro', sales: 450, revenue: 89999 },
    { name: 'Смарт-часы Ultra', sales: 320, revenue: 76800 },
    { name: 'Портативная колонка Max', sales: 280, revenue: 55999 },
    { name: 'Фитнес-браслет Pulse', sales: 250, revenue: 37499 },
    { name: 'Внешний аккумулятор Power', sales: 220, revenue: 32999 },
  ];

  const salesData = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [
      {
        label: 'Продажи',
        data: [65, 78, 90, 85, 95, 110],
        borderColor: 'rgba(99, 102, 241, 1)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
      },
    ],
  };

  const categoryData = {
    labels: ['Электроника', 'Аксессуары', 'Гаджеты', 'Аудио', 'Умный дом'],
    datasets: [
      {
        label: 'Количество товаров',
        data: [45, 25, 20, 15, 10],
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
        <h1 className="text-3xl font-bold mb-2">Управление Товарами</h1>
        <p className="text-gray-400">Анализ производительности и статистика товаров</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Всего товаров"
          value={productMetrics.totalProducts}
          icon={<Package size={24} />}
          gradient="primary"
        />
        <MetricCard
          title="Активные листинги"
          value={productMetrics.activeListings}
          icon={<TrendingUp size={24} />}
          gradient="secondary"
        />
        <MetricCard
          title="Средний рейтинг"
          value={productMetrics.averageRating}
          icon={<Star size={24} />}
          gradient="accent"
        />
        <MetricCard
          title="Общая выручка"
          value={`₽${productMetrics.revenue.toLocaleString()}`}
          icon={<DollarSign size={24} />}
          gradient="primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Динамика продаж</h2>
          <div style={{ height: '300px' }}>
            <LineChart
              title=""
              labels={salesData.labels}
              datasets={salesData.datasets}
            />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Распределение по категориям</h2>
          <div style={{ height: '300px' }}>
            <BarChart
              title=""
              labels={categoryData.labels}
              datasets={categoryData.datasets}
            />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Топ продуктов</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left pb-3 px-4">Товар</th>
                <th className="text-right pb-3 px-4">Продажи</th>
                <th className="text-right pb-3 px-4">Выручка</th>
              </tr>
            </thead>
            <tbody>
              {tarpProducts.map((product, index) => (
                <tr key={index} className="border-b border-dark-700/50 hover:bg-dark-700/30">
                  <td className="py-3 px-4">{product.name}</td>
                  <td className="py-3 px-4 text-right">{product.sales}</td>
                  <td className="py-3 px-4 text-right">₽{product.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Products;