import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import ProfilePanel from '../../components/dashboard/ProfilePanel';
import ImpactPanel from '../../components/dashboard/ImpactPanel';
import ProjectsPanel from '../../components/dashboard/ProjectsPanel';
import CreativePanel from '../../components/dashboard/CreativePanel';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-earth-cream">
      <DashboardHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {/* Left Panel - Profile Overview */}
          <div className="lg:col-span-1">
            <ProfilePanel />
          </div>

          {/* Center Panel - Impact Snapshot */}
          <div className="lg:col-span-2">
            <ImpactPanel />
          </div>

          {/* Right Panel - Completed Projects */}
          <div className="lg:col-span-1">
            <ProjectsPanel />
          </div>
        </motion.div>

        {/* Bottom Panel - Creative Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6"
        >
          <CreativePanel />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;