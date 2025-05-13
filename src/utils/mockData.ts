// Generate mock data for the marketplace analysis dashboard

// Helper to generate random numbers within a range
const randomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate data for a date range
const generateTimeSeriesData = (days: number, min: number, max: number, trend: 'up' | 'down' | 'stable' = 'stable') => {
  const data: number[] = [];
  let value = randomInRange(min, max);
  
  for (let i = 0; i < days; i++) {
    // Add some randomness but follow the trend
    let change = randomInRange(-max * 0.05, max * 0.05);
    
    if (trend === 'up') {
      change = Math.abs(change) + (i * max * 0.01);
    } else if (trend === 'down') {
      change = -Math.abs(change) - (i * max * 0.01);
    }
    
    value = Math.max(min, Math.min(max, value + change));
    data.push(Math.round(value));
  }
  
  return data;
};

// Generate date labels for the past X days
const generateDateLabels = (days: number) => {
  const labels: string[] = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
  }
  
  return labels;
};

// Mock marketplace data
export const marketplaceData = {
  // Overview metrics
  metrics: {
    totalProducts: randomInRange(10000, 20000),
    activeListings: randomInRange(8000, 15000),
    averagePrice: randomInRange(50, 200),
    totalSales: randomInRange(500000, 2000000),
    conversionRate: (randomInRange(20, 50) / 10).toFixed(1),
    customerSatisfaction: (randomInRange(40, 49) / 10).toFixed(1),
  },
  
  // Product categories
  categories: [
    { name: 'Electronics', count: randomInRange(2000, 4000) },
    { name: 'Clothing', count: randomInRange(3000, 5000) },
    { name: 'Home & Garden', count: randomInRange(1500, 3000) },
    { name: 'Beauty', count: randomInRange(1000, 2000) },
    { name: 'Sports', count: randomInRange(800, 1500) },
    { name: 'Toys', count: randomInRange(500, 1000) },
  ],
  
  // Sales data for the last 30 days
  salesTimeSeries: {
    labels: generateDateLabels(30),
    datasets: [
      {
        label: 'Revenue',
        data: generateTimeSeriesData(30, 50000, 150000, 'up'),
      },
      {
        label: 'Orders',
        data: generateTimeSeriesData(30, 500, 2000, 'up'),
      },
    ],
  },
  
  // Visitors data for the last 30 days
  visitorsTimeSeries: {
    labels: generateDateLabels(30),
    datasets: [
      {
        label: 'Visitors',
        data: generateTimeSeriesData(30, 10000, 50000, 'up'),
      },
      {
        label: 'Unique Visitors',
        data: generateTimeSeriesData(30, 8000, 40000, 'up'),
      },
    ],
  },
  
  // Product performance
  topProducts: [
    { name: 'Wireless Headphones', sales: randomInRange(2000, 5000), revenue: randomInRange(100000, 300000) },
    { name: 'Smart Watch', sales: randomInRange(1500, 4000), revenue: randomInRange(80000, 250000) },
    { name: 'Fitness Tracker', sales: randomInRange(1000, 3000), revenue: randomInRange(60000, 180000) },
    { name: 'Bluetooth Speaker', sales: randomInRange(1000, 3000), revenue: randomInRange(40000, 150000) },
    { name: 'Power Bank', sales: randomInRange(800, 2500), revenue: randomInRange(30000, 120000) },
  ],
  
  // Customer demographics
  demographics: {
    age: [
      { label: '18-24', percentage: randomInRange(10, 25) },
      { label: '25-34', percentage: randomInRange(25, 40) },
      { label: '35-44', percentage: randomInRange(15, 30) },
      { label: '45-54', percentage: randomInRange(10, 20) },
      { label: '55+', percentage: randomInRange(5, 15) },
    ],
    gender: [
      { label: 'Male', percentage: randomInRange(40, 60) },
      { label: 'Female', percentage: randomInRange(40, 60) },
      { label: 'Other', percentage: randomInRange(1, 5) },
    ],
    location: [
      { label: 'North America', percentage: randomInRange(30, 50) },
      { label: 'Europe', percentage: randomInRange(20, 40) },
      { label: 'Asia', percentage: randomInRange(15, 30) },
      { label: 'South America', percentage: randomInRange(5, 15) },
      { label: 'Other', percentage: randomInRange(5, 10) },
    ],
  },
  
  // Competitor analysis
  competitors: [
    { name: 'Amazon', marketShare: randomInRange(20, 40), growth: randomInRange(5, 15) },
    { name: 'eBay', marketShare: randomInRange(10, 25), growth: randomInRange(3, 10) },
    { name: 'Walmart', marketShare: randomInRange(10, 20), growth: randomInRange(2, 8) },
    { name: 'Etsy', marketShare: randomInRange(5, 15), growth: randomInRange(8, 20) },
    { name: 'Others', marketShare: randomInRange(20, 40), growth: randomInRange(1, 5) },
  ],
  
  // Price trends
  priceTrends: {
    labels: generateDateLabels(12),
    datasets: [
      {
        label: 'Electronics',
        data: generateTimeSeriesData(12, 80, 120, 'down'),
      },
      {
        label: 'Clothing',
        data: generateTimeSeriesData(12, 30, 60, 'up'),
      },
      {
        label: 'Home & Garden',
        data: generateTimeSeriesData(12, 50, 80, 'stable'),
      },
    ],
  },
  
  // User acquisition
  userAcquisition: [
    { source: 'Organic Search', percentage: randomInRange(30, 50) },
    { source: 'Direct', percentage: randomInRange(15, 30) },
    { source: 'Social Media', percentage: randomInRange(10, 25) },
    { source: 'Email', percentage: randomInRange(5, 15) },
    { source: 'Referrals', percentage: randomInRange(5, 15) },
    { source: 'Other', percentage: randomInRange(5, 10) },
  ],
  
  // Market positioning
  marketPositioning: [
    { factor: 'Price', ownScore: randomInRange(6, 9), competitorAvg: randomInRange(5, 8) },
    { factor: 'Quality', ownScore: randomInRange(7, 10), competitorAvg: randomInRange(5, 9) },
    { factor: 'Selection', ownScore: randomInRange(6, 9), competitorAvg: randomInRange(6, 9) },
    { factor: 'Customer Service', ownScore: randomInRange(7, 10), competitorAvg: randomInRange(5, 8) },
    { factor: 'Shipping Speed', ownScore: randomInRange(7, 9), competitorAvg: randomInRange(6, 8) },
    { factor: 'User Experience', ownScore: randomInRange(7, 10), competitorAvg: randomInRange(5, 8) },
    { factor: 'Mobile Optimization', ownScore: randomInRange(7, 10), competitorAvg: randomInRange(5, 8) },
  ],
};

// Get formatted data for specific chart types
export const getFormattedChartData = () => {
  // Format data for pie chart of categories
  const categoryPieData = {
    labels: marketplaceData.categories.map(cat => cat.name),
    data: marketplaceData.categories.map(cat => cat.count),
    backgroundColor: [
      'rgba(99, 102, 241, 0.8)',
      'rgba(20, 184, 166, 0.8)',
      'rgba(249, 115, 22, 0.8)',
      'rgba(236, 72, 153, 0.8)',
      'rgba(139, 92, 246, 0.8)',
      'rgba(14, 165, 233, 0.8)',
    ],
  };
  
  // Format data for demographics doughnut chart
  const genderDoughnutData = {
    labels: marketplaceData.demographics.gender.map(item => item.label),
    data: marketplaceData.demographics.gender.map(item => item.percentage),
    backgroundColor: [
      'rgba(20, 184, 166, 0.8)',
      'rgba(236, 72, 153, 0.8)',
      'rgba(139, 92, 246, 0.8)',
    ],
  };
  
  // Format data for radar chart
  const competitiveRadarData = {
    labels: marketplaceData.marketPositioning.map(item => item.factor),
    datasets: [
      {
        label: 'Our Marketplace',
        data: marketplaceData.marketPositioning.map(item => item.ownScore),
        backgroundColor: 'rgba(99, 102, 241, 0.3)',
        borderColor: 'rgba(99, 102, 241, 0.8)',
      },
      {
        label: 'Competitors (Avg)',
        data: marketplaceData.marketPositioning.map(item => item.competitorAvg),
        backgroundColor: 'rgba(249, 115, 22, 0.3)',
        borderColor: 'rgba(249, 115, 22, 0.8)',
      },
    ],
  };
  
  // Format data for acquisition sources
  const acquisitionData = {
    labels: marketplaceData.userAcquisition.map(item => item.source),
    data: marketplaceData.userAcquisition.map(item => item.percentage),
    backgroundColor: [
      'rgba(99, 102, 241, 0.8)',
      'rgba(14, 165, 233, 0.8)',
      'rgba(249, 115, 22, 0.8)',
      'rgba(139, 92, 246, 0.8)',
      'rgba(236, 72, 153, 0.8)',
      'rgba(20, 184, 166, 0.8)',
    ],
  };
  
  // Format data for market share
  const marketShareData = {
    labels: marketplaceData.competitors.map(item => item.name),
    datasets: [
      {
        label: 'Market Share (%)',
        data: marketplaceData.competitors.map(item => item.marketShare),
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(20, 184, 166, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(249, 115, 22, 0.8)',
        ],
      },
    ],
  };
  
  // Format data for price trends line chart
  const priceTrendsData = {
    labels: marketplaceData.priceTrends.labels,
    datasets: [
      {
        label: 'Electronics',
        data: marketplaceData.priceTrends.datasets[0].data,
        borderColor: 'rgba(99, 102, 241, 1)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
      },
      {
        label: 'Clothing',
        data: marketplaceData.priceTrends.datasets[1].data,
        borderColor: 'rgba(236, 72, 153, 1)',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
      },
      {
        label: 'Home & Garden',
        data: marketplaceData.priceTrends.datasets[2].data,
        borderColor: 'rgba(20, 184, 166, 1)',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
      },
    ],
  };
  
  // Format data for sales and visitors
  const salesTimeSeriesData = {
    labels: marketplaceData.salesTimeSeries.labels,
    datasets: [
      {
        label: 'Revenue ($)',
        data: marketplaceData.salesTimeSeries.datasets[0].data,
        borderColor: 'rgba(99, 102, 241, 1)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
      },
    ],
  };
  
  const ordersTimeSeriesData = {
    labels: marketplaceData.salesTimeSeries.labels,
    datasets: [
      {
        label: 'Orders',
        data: marketplaceData.salesTimeSeries.datasets[1].data,
        borderColor: 'rgba(20, 184, 166, 1)',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
        fill: true,
      },
    ],
  };
  
  const visitorsTimeSeriesData = {
    labels: marketplaceData.visitorsTimeSeries.labels,
    datasets: [
      {
        label: 'Total Visitors',
        data: marketplaceData.visitorsTimeSeries.datasets[0].data,
        borderColor: 'rgba(139, 92, 246, 1)',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        fill: true,
      },
      {
        label: 'Unique Visitors',
        data: marketplaceData.visitorsTimeSeries.datasets[1].data,
        borderColor: 'rgba(249, 115, 22, 1)',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        fill: true,
      },
    ],
  };
  
  return {
    categoryPieData,
    genderDoughnutData,
    competitiveRadarData,
    acquisitionData,
    marketShareData,
    priceTrendsData,
    salesTimeSeriesData,
    ordersTimeSeriesData,
    visitorsTimeSeriesData,
  };
};