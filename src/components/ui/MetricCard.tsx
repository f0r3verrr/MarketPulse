import { ReactNode } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Card from './Card';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  change?: number;
  gradient?: 'primary' | 'secondary' | 'accent' | 'none';
  subtitle?: string;
}

const MetricCard = ({ 
  title, 
  value, 
  icon, 
  change, 
  gradient = 'none',
  subtitle
}: MetricCardProps) => {
  return (
    <Card gradient={gradient} className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-white/70">{title}</h3>
          <p className="text-3xl font-bold mt-1">{value}</p>
          {subtitle && (
            <p className="text-xs mt-1 text-white/60">{subtitle}</p>
          )}
        </div>
        {icon && <div className="text-white/80">{icon}</div>}
      </div>
      
      {typeof change !== 'undefined' && (
        <div className={`flex items-center mt-4 text-sm ${
          change >= 0 ? 'text-green-400' : 'text-red-400'
        }`}>
          {change >= 0 ? (
            <ArrowUp size={16} className="mr-1" />
          ) : (
            <ArrowDown size={16} className="mr-1" />
          )}
          <span>{Math.abs(change)}% from last period</span>
        </div>
      )}
    </Card>
  );
};

export default MetricCard;