import { ReactNode } from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  // Show sidebar only on dashboard pages and when authenticated
  const showSidebar = isAuthenticated && location.pathname.includes('/dashboard');

  return (
    <div className="min-h-screen bg-dashboard-gradient">
      <Navbar />
      <div className="flex">
        {showSidebar && <Sidebar />}
        <main className={`flex-1 ${showSidebar ? 'ml-64' : ''} p-6`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;