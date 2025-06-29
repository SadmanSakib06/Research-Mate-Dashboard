import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = () => {
    const pathTitles: Record<string, string> = {
      '/': 'Dashboard',
      '/guide': 'Research Guide',
      '/datasets': 'Explore Datasets',
      '/papers': 'Start Exploring Papers',
      '/library': 'Saved Paper Library',
      '/summary': 'Auto Summary Generator',
      '/plan': 'Plan My Research',
      '/forum': 'Discussion Forum'
    };
    return pathTitles[location.pathname] || 'ResearchMate';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:pl-64">
        <Header 
          title={getPageTitle()}
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        <main className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;