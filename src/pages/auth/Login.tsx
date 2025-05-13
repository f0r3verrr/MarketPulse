import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import { BarChart3, Loader2 } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Неверный email или пароль. Пожалуйста, попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card max-w-md w-full p-8"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center">
            <BarChart3 className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
              MarketPulse
            </span>
          </Link>
          <h2 className="mt-4 text-2xl font-bold">Войти в аккаунт</h2>
          <p className="mt-2 text-gray-400">
            Или{' '}
            <Link to="/register" className="text-primary-400 hover:text-primary-300">
              создать новый аккаунт
            </Link>
          </p>
        </div>
        
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded-md mb-4"
          >
            {error}
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="label">Email адрес</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="label">Пароль</label>
              <button type="button" className="text-sm text-primary-400 hover:text-primary-300">
                Забыли пароль?
              </button>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Вход...
                </>
              ) : (
                'Войти'
              )}
            </button>
          </div>
        </form>
        
        {/* Demo Account Notice */}
        <div className="mt-6 p-4 bg-primary-900/30 border border-primary-800/50 rounded-lg">
          <p className="text-sm text-center text-gray-300">
            Для демонстрации вы можете использовать любой email и пароль.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;