import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  DollarSign, 
  Users, 
  TrendingUp,
  Percent,
  Star
} from 'lucide-react';
import MetricCard from '../../components/ui/MetricCard';
import Card from '../../components/ui/Card';
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';
import PieChart from '../../components/charts/PieChart';
import DoughnutChart from '../../components/charts/DoughnutChart';
import { marketplaceData, getFormattedChartData } from '../../utils/mockData';

const Dashboard = () => {
  const [chartData, setChartData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API data loading
    const timer = setTimeout(() => {
      setChartData(getFormattedChartData());
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg">Loading dashboard data...</p>
        </div>
      </div>
    );
  }
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="py-6"
    >
      <motion.div variants={fadeInUp}>
        <h1 className="text-3xl font-bold mb-8">Marketplace Analytics Dashboard</h1>
      </motion.div>
      
      {/* Key Metrics */}
      <motion.div 
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6 mb-8"
      >
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Total Products"
            value={marketplaceData.metrics.totalProducts.toLocaleString()}
            icon={<ShoppingCart size={24} />}
            change={8.5}
            gradient="primary"
          />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Active Listings"
            value={marketplaceData.metrics.activeListings.toLocaleString()}
            icon={<TrendingUp size={24} />}
            change={5.2}
            gradient="secondary"
          />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Average Price"
            value={`$${marketplaceData.metrics.averagePrice}`}
            icon={<DollarSign size={24} />}
            change={-2.3}
            gradient="accent"
          />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Total Sales"
            value={`$${(marketplaceData.metrics.totalSales / 1000).toFixed(1)}k`}
            icon={<DollarSign size={24} />}
            change={12.7}
            gradient="primary"
          />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Conversion Rate"
            value={`${marketplaceData.metrics.conversionRate}%`}
            icon={<Percent size={24} />}
            change={1.5}
            gradient="secondary"
          />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Customer Satisfaction"
            value={marketplaceData.metrics.customerSatisfaction}
            icon={<Star size={24} />}
            change={0.3}
            gradient="accent"
            subtitle="Out of 5.0"
          />
        </motion.div>
      </motion.div>
      
      {/* Sales and Visitors Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div variants={fadeInUp}>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Revenue Trend</h2>
            {chartData && (
              <LineChart
                title=""
                labels={chartData.salesTimeSeriesData.labels}
                datasets={chartData.salesTimeSeriesData.datasets}
              />
            )}
          </Card>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Visitor Traffic</h2>
            {chartData && (
              <LineChart
                title=""
                labels={chartData.visitorsTimeSeriesData.labels}
                datasets={chartData.visitorsTimeSeriesData.datasets}
              />
            )}
          </Card>
        </motion.div>
      </div>
      
      {/* Category and Gender Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div variants={fadeInUp}>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
            {chartData && (
              <PieChart
                labels={chartData.categoryPieData.labels}
                data={chartData.categoryPieData.data}
                backgroundColor={chartData.categoryPieData.backgroundColor}
              />
            )}
          </Card>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Customer Demographics</h2>
            {chartData && (
              <DoughnutChart
                labels={chartData.genderDoughnutData.labels}
                data={chartData.genderDoughnutData.data}
                backgroundColor={chartData.genderDoughnutData.backgroundColor}
              />
            )}
          </Card>
        </motion.div>
      </div>
      
      {/* Top Products */}
      <motion.div variants={fadeInUp} className="mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Top Performing Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="text-left pb-3 px-4">Product</th>
                  <th className="text-right pb-3 px-4">Sales</th>
                  <th className="text-right pb-3 px-4">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {marketplaceData.topProducts.map((product, index) => (
                  <tr key={index} className="border-b border-dark-700/50 hover:bg-dark-700/30">
                    <td className="py-3 px-4">{product.name}</td>
                    <td className="py-3 px-4 text-right">{product.sales.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">${product.revenue.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
      
      {/* Market Positioning and User Acquisition */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={fadeInUp} className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Market Positioning</h2>
            {chartData && chartData.competitiveRadarData && (
              <div className="h-[400px]">
                <LineChart
                  title=""
                  labels={chartData.priceTrendsData.labels}
                  datasets={chartData.priceTrendsData.datasets}
                />
              </div>
            )}
          </Card>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">User Acquisition</h2>
            {chartData && (
              <BarChart
                title=""
                labels={chartData.acquisitionData.labels}
                datasets={[
                  {
                    label: 'Percentage',
                    data: chartData.acquisitionData.data,
                    backgroundColor: chartData.acquisitionData.backgroundColor,
                  },
                ]}
                horizontal={true}
              />
            )}
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;