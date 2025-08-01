import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Image, MessageCircle, BarChart3, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface DashboardHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ activeTab, setActiveTab }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const tabs = [
    { name: 'Dashboard', icon: BarChart3 },
    { name: 'Gallery', icon: Image },
    { name: 'Microblog', icon: MessageCircle },
    { name: 'Settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <header className="bg-white shadow-lg border-b-4 border-earth-brown">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-earth-brown rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <h1 className="text-2xl font-bold text-earth-darkBrown">M-TAJI</h1>
          </motion.div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex space-x-1">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.name
                      ? 'bg-earth-brown text-white'
                      : 'text-earth-darkBrown hover:bg-earth-tan hover:text-earth-darkBrown'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{tab.name}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* Profile Section */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-earth-darkBrown">{user?.name}</p>
              <p className="text-xs text-earth-olive">Environmental Advocate</p>
            </div>
            <div className="relative group">
              <div className="w-10 h-10 bg-earth-sage rounded-full flex items-center justify-center cursor-pointer">
                <User size={20} className="text-white" />
              </div>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-earth-tan opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-earth-darkBrown hover:bg-earth-cream transition-colors"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    activeTab === tab.name
                      ? 'bg-earth-brown text-white'
                      : 'text-earth-darkBrown hover:bg-earth-tan'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;