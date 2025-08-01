import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, Calendar, Award } from 'lucide-react';

const ProfilePanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-earth-tan"
    >
      {/* Profile Image */}
      <div className="text-center mb-6">
        <div className="relative mx-auto w-24 h-24 mb-4">
          <div className="w-24 h-24 bg-gradient-to-br from-earth-sage to-earth-olive rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            AK
          </div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        
        <h2 className="text-xl font-bold text-earth-darkBrown mb-1">Amina Kiptoo</h2>
        <p className="text-earth-brown font-medium mb-2">Environmental Advocate</p>
        
        <div className="flex items-center justify-center text-earth-olive text-sm mb-4">
          <MapPin size={14} className="mr-1" />
          <span>Nairobi, Kenya</span>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <Target size={16} className="text-earth-brown mr-2" />
          <h3 className="font-semibold text-earth-darkBrown">Mission</h3>
        </div>
        <p className="text-sm text-earth-olive leading-relaxed">
          "Empowering communities through sustainable environmental solutions and youth-led climate action initiatives across East Africa."
        </p>
      </div>

      {/* Quick Stats */}
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-earth-cream rounded-lg">
          <div className="flex items-center">
            <Calendar size={16} className="text-earth-brown mr-2" />
            <span className="text-sm text-earth-darkBrown">Member Since</span>
          </div>
          <span className="text-sm font-semibold text-earth-brown">Jan 2023</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-earth-cream rounded-lg">
          <div className="flex items-center">
            <Award size={16} className="text-earth-brown mr-2" />
            <span className="text-sm text-earth-darkBrown">Impact Level</span>
          </div>
          <span className="text-sm font-semibold text-earth-brown">Champion</span>
        </div>
      </div>

      {/* Skills Tags */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-earth-darkBrown mb-3">Expertise</h4>
        <div className="flex flex-wrap gap-2">
          {['Climate Action', 'Community Outreach', 'Fundraising', 'Education'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-earth-tan text-earth-darkBrown text-xs rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePanel;