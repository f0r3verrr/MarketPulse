import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Products from './pages/dashboard/products/Products';
import Trends from './pages/dashboard/trends/Trends';
import Pricing from './pages/dashboard/pricing/Pricing';
import Competitors from './pages/dashboard/competitors/Competitors';
import MarketShare from './pages/dashboard/market-share/MarketShare';
import Settings from './pages/dashboard/settings/Settings';
import { useAuth } from './context/AuthContext';

// Protected route component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/products" 
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/trends" 
          element={
            <ProtectedRoute>
              <Trends />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/pricing" 
          element={
            <ProtectedRoute>
              <Pricing />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/competitors" 
          element={
            <ProtectedRoute>
              <Competitors />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/market-share" 
          element={
            <ProtectedRoute>
              <MarketShare />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/settings" 
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } 
        />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;