import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart2, 
  ShoppingCart, 
  TrendingUp, 
  DollarSign,
  Users,
  Settings,
  Activity
} from 'lucide-react';
import { motion } from 'framer-motion';

interface NavItemProps {
  icon: React.ReactNode;
  title: string;
  to: string;
  isActive: boolean;
}

const NavItem = ({ icon, title, to, isActive }: NavItemProps) => (
  <Link to={to}>
    <motion.div
      whileHover={{ x: 5 }}
      className={`flex items-center px-4 py-3 my-1 rounded-lg transition-colors ${
        isActive 
          ? 'bg-primary-900/60 text-primary-400' 
          : 'text-dark-300 hover:bg-dark-800 hover:text-white'
      }`}
    >
      <div className="mr-3">
        {icon}
      </div>
      <span className="font-medium">{title}</span>
      {isActive && (
        <motion.div 
          layoutId="sidebar-indicator"
          className="ml-auto w-1.5 h-5 bg-primary-500 rounded-full"
        />
      )}
    </motion.div>
  </Link>
);

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: <BarChart2 size={20} />, title: 'Обзор', to: '/dashboard' },
    { icon: <ShoppingCart size={20} />, title: 'Товары', to: '/dashboard/products' },
    { icon: <TrendingUp size={20} />, title: 'Тренды', to: '/dashboard/trends' },
    { icon: <DollarSign size={20} />, title: 'Цены', to: '/dashboard/pricing' },
    { icon: <Users size={20} />, title: 'Конкуренты', to: '/dashboard/competitors' },
    { icon: <Activity size={20} />, title: 'Доля рынка', to: '/dashboard/market-share' },
  ];
  
  return (
    <div className="fixed inset-y-0 left-0 pt-16 w-64 bg-dark-900/50 border-r border-dark-800 backdrop-blur-sm overflow-y-auto">
      <div className="px-6 py-6">
        <h3 className="text-xs uppercase tracking-wider text-dark-400 font-semibold mb-4">
          Аналитика
        </h3>
        <nav>
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              icon={item.icon}
              title={item.title}
              to={item.to}
              isActive={location.pathname === item.to}
            />
          ))}
        </nav>
        
        <h3 className="text-xs uppercase tracking-wider text-dark-400 font-semibold mb-4 mt-8">
          Настройки
        </h3>
        <nav>
          <NavItem
            icon={<Settings size={20} />}
            title="Настройки аккаунта"
            to="/dashboard/settings"
            isActive={location.pathname === '/dashboard/settings'}
          />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;