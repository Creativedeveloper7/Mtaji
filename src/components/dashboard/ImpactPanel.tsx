import React from 'react';
import { motion } from 'framer-motion';
import { Users, FolderOpen, DollarSign, Heart, TrendingUp, Target } from 'lucide-react';

const ImpactPanel = () => {
  const stats = [
    {
      title: 'Followers',
      value: '2,430',
      icon: Users,
      color: 'from-earth-sage to-earth-olive',
      change: '+12%',
      changeType: 'increase'
    },
    {
      title: 'Active Projects',
      value: '5',
      icon: FolderOpen,
      color: 'from-earth-brown to-earth-darkBrown',
      change: '+2',
      changeType: 'increase'
    },
    {
      title: 'Funds Raised',
      value: 'KSh 450,000',
      icon: DollarSign,
      color: 'from-earth-terracotta to-earth-brown',
      change: '+25%',
      changeType: 'increase'
    },
    {
      title: 'Lives Impacted',
      value: '1,240',
      icon: Heart,
      color: 'from-earth-moss to-earth-sage',
      change: '+180',
      changeType: 'increase'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Impact Snapshot Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-6 border border-earth-tan"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-earth-brown to-earth-darkBrown rounded-lg flex items-center justify-center">
              <Target size={20} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-earth-darkBrown">Impact Snapshot</h2>
          </div>
          <div className="text-right">
            <p className="text-sm text-earth-olive">Last updated</p>
            <p className="text-sm font-semibold text-earth-brown">Today, 2:30 PM</p>
          </div>
        </div>
        
        <p className="text-earth-olive">
          Track your environmental impact and community engagement across all your initiatives.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-earth-tan hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon size={24} className="text-white" />
                </div>
                <div className="flex items-center space-x-1 text-green-600">
                  <TrendingUp size={16} />
                  <span className="text-sm font-semibold">{stat.change}</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-earth-olive mb-1">{stat.title}</h3>
                <p className="text-2xl font-bold text-earth-darkBrown">{stat.value}</p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-earth-cream">
                <p className="text-xs text-earth-olive">
                  {stat.title === 'Followers' && 'Across all platforms'}
                  {stat.title === 'Active Projects' && 'Currently running'}
                  {stat.title === 'Funds Raised' && 'This year'}
                  {stat.title === 'Lives Impacted' && 'Direct beneficiaries'}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-2xl shadow-lg p-6 border border-earth-tan"
      >
        <h3 className="text-lg font-bold text-earth-darkBrown mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'New project milestone reached', time: '2 hours ago', type: 'success' },
            { action: 'Received donation of KSh 15,000', time: '5 hours ago', type: 'funding' },
            { action: 'Posted new story update', time: '1 day ago', type: 'content' },
            { action: '50 new followers this week', time: '3 days ago', type: 'growth' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-earth-cream rounded-lg">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'success' ? 'bg-green-500' :
                activity.type === 'funding' ? 'bg-earth-brown' :
                activity.type === 'content' ? 'bg-earth-sage' :
                'bg-earth-olive'
              }`}></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-earth-darkBrown">{activity.action}</p>
                <p className="text-xs text-earth-olive">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ImpactPanel;