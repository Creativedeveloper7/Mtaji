import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, DollarSign, Calendar } from 'lucide-react';

const ProjectsPanel = () => {
  const completedProjects = [
    {
      id: 1,
      name: 'Clean Water Initiative',
      targetFunds: 120000,
      actualFunds: 135000,
      completedDate: 'Dec 2023',
      summary: 'Installed 5 water purification systems in rural schools',
      impact: '850 students',
      category: 'Water & Sanitation'
    },
    {
      id: 2,
      name: 'Tree Planting Campaign',
      targetFunds: 50000,
      actualFunds: 62000,
      completedDate: 'Nov 2023',
      summary: 'Planted 2,000 indigenous trees in degraded areas',
      impact: '200 hectares',
      category: 'Reforestation'
    },
    {
      id: 3,
      name: 'Solar Energy Project',
      targetFunds: 200000,
      actualFunds: 198000,
      completedDate: 'Oct 2023',
      summary: 'Solar panels for 3 community centers',
      impact: '500 families',
      category: 'Renewable Energy'
    },
    {
      id: 4,
      name: 'Waste Management Hub',
      targetFunds: 80000,
      actualFunds: 85000,
      completedDate: 'Sep 2023',
      summary: 'Recycling center with community training programs',
      impact: '300 households',
      category: 'Waste Management'
    }
  ];

  const formatCurrency = (amount: number) => {
    return `KSh ${amount.toLocaleString()}`;
  };

  const getProgressPercentage = (actual: number, target: number) => {
    return Math.min((actual / target) * 100, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-earth-tan h-fit"
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-earth-sage to-earth-olive rounded-lg flex items-center justify-center">
          <CheckCircle size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-earth-darkBrown">Completed Projects</h2>
          <p className="text-sm text-earth-olive">4 successful initiatives</p>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {completedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border border-earth-cream rounded-lg p-4 hover:bg-earth-cream transition-colors duration-200"
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-earth-darkBrown text-sm mb-1">
                  {project.name}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle size={12} className="mr-1" />
                    Completed
                  </span>
                  <span className="text-xs text-earth-olive">{project.completedDate}</span>
                </div>
              </div>
            </div>

            {/* Funding Progress */}
            <div className="mb-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-earth-olive">Funding Progress</span>
                <span className="font-semibold text-earth-darkBrown">
                  {getProgressPercentage(project.actualFunds, project.targetFunds).toFixed(0)}%
                </span>
              </div>
              
              <div className="w-full bg-earth-cream rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-earth-sage to-earth-olive h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getProgressPercentage(project.actualFunds, project.targetFunds)}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1 text-earth-olive">
                  <Target size={12} />
                  <span>Target: {formatCurrency(project.targetFunds)}</span>
                </div>
                <div className="flex items-center space-x-1 text-earth-brown font-semibold">
                  <DollarSign size={12} />
                  <span>Raised: {formatCurrency(project.actualFunds)}</span>
                </div>
              </div>
            </div>

            {/* Project Summary */}
            <div className="mb-3">
              <p className="text-xs text-earth-olive leading-relaxed">
                • {project.summary}
              </p>
            </div>

            {/* Impact & Category */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-earth-brown">
                Impact: {project.impact}
              </span>
              <span className="text-xs px-2 py-1 bg-earth-tan text-earth-darkBrown rounded-full">
                {project.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="mt-6 pt-4 border-t border-earth-cream">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-lg font-bold text-earth-darkBrown">
              {formatCurrency(completedProjects.reduce((sum, p) => sum + p.actualFunds, 0))}
            </p>
            <p className="text-xs text-earth-olive">Total Raised</p>
          </div>
          <div>
            <p className="text-lg font-bold text-earth-darkBrown">
              {completedProjects.length}
            </p>
            <p className="text-xs text-earth-olive">Projects Completed</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPanel;