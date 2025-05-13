import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Activity, 
  Users,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
      } 
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const features = [
    {
      icon: <BarChart2 size={24} className="text-primary-500" />,
      title: 'Комплексная Аналитика',
      description: 'Получите полное представление о производительности вашего магазина с помощью нашей интуитивно понятной панели аналитики.'
    },
    {
      icon: <TrendingUp size={24} className="text-primary-500" />,
      title: 'Отслеживание Продаж',
      description: 'Мониторинг продаж на различных маркетплейсах и выявление возможностей для роста.'
    },
    {
      icon: <DollarSign size={24} className="text-primary-500" />,
      title: 'Анализ Цен',
      description: 'Отслеживайте цены конкурентов и оптимизируйте свою ценовую стратегию для максимизации прибыли.'
    },
    {
      icon: <ShoppingBag size={24} className="text-primary-500" />,
      title: 'Эффективность Товаров',
      description: 'Оценивайте, какие товары показывают хорошие результаты, а какие требуют внимания для улучшения вашего каталога.'
    },
    {
      icon: <Activity size={24} className="text-primary-500" />,
      title: 'Анализ Доли Рынка',
      description: 'Измеряйте свою позицию на рынке и отслеживайте изменения во времени для поддержания конкурентоспособности.'
    },
    {
      icon: <Users size={24} className="text-primary-500" />,
      title: 'Мониторинг Конкурентов',
      description: 'Следите за конкурентами и выявляйте угрозы и возможности на маркетплейсе.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-primary-950/70 to-dark-950 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1800&h=900&dpr=1')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mx-auto max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 text-transparent bg-clip-text">
              Платформа Аналитики Маркетплейсов
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Получайте актуальные данные о тенденциях рынка, анализируйте конкурентов и оптимизируйте свою стратегию электронной коммерции.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="btn-primary text-lg px-8 py-3">
                Начать Бесплатно
              </Link>
              <Link to="/login" className="btn-outline text-lg px-8 py-3">
                Войти
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Мощные Инструменты Аналитики</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Всё необходимое для анализа и оптимизации вашего бизнеса на маркетплейсах.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="card hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300"
                variants={fadeIn}
              >
                <div className="rounded-full bg-primary-900/40 p-3 w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800/20 to-secondary-800/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Готовы оптимизировать вашу стратегию на маркетплейсах?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Присоединяйтесь к тысячам продавцов, которые принимают решения на основе данных для развития своего бизнеса.
            </p>
            <Link 
              to="/register" 
              className="btn-primary text-lg px-8 py-3 inline-flex items-center"
            >
              Попробовать Бесплатно <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;