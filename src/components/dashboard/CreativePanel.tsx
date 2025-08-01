import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Upload, Send, Image, Heart, MessageCircle, Share2, Palette } from 'lucide-react';

const CreativePanel = () => {
  const [postText, setPostText] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
      title: 'Tree Planting Day',
      likes: 45,
      comments: 12
    },
    {
      id: 2,
      type: 'video',
      url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=200&fit=crop',
      title: 'Solar Installation',
      likes: 32,
      comments: 8
    },
    {
      id: 3,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
      title: 'Community Workshop',
      likes: 28,
      comments: 15
    },
    {
      id: 4,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=300&h=200&fit=crop',
      title: 'Water Project',
      likes: 67,
      comments: 23
    }
  ];

  const handleMediaUpload = () => {
    // Simulate file upload
    console.log('Media upload clicked');
  };

  const handlePost = () => {
    if (postText.trim()) {
      console.log('Posting:', postText);
      setPostText('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-earth-tan"
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-earth-terracotta to-earth-brown rounded-lg flex items-center justify-center">
          <Palette size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-earth-darkBrown">Creative Zone</h2>
          <p className="text-sm text-earth-olive">Share your impact stories and media</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Microblog Input */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-earth-cream rounded-xl p-4">
            <h3 className="font-semibold text-earth-darkBrown mb-3">Share an Update</h3>
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="What's happening with your environmental initiatives? Share your progress, insights, or inspiration..."
              className="w-full h-24 p-3 border border-earth-tan rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-earth-sage focus:border-transparent"
            />
            
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleMediaUpload}
                  className="flex items-center space-x-1 px-3 py-2 bg-earth-sage text-white rounded-lg hover:bg-earth-olive transition-colors"
                >
                  <Camera size={16} />
                  <span className="text-sm">Photo</span>
                </button>
                <button
                  onClick={handleMediaUpload}
                  className="flex items-center space-x-1 px-3 py-2 bg-earth-brown text-white rounded-lg hover:bg-earth-darkBrown transition-colors"
                >
                  <Video size={16} />
                  <span className="text-sm">Video</span>
                </button>
                <button
                  onClick={handleMediaUpload}
                  className="flex items-center space-x-1 px-3 py-2 bg-earth-tan text-earth-darkBrown rounded-lg hover:bg-earth-brown hover:text-white transition-colors"
                >
                  <Upload size={16} />
                  <span className="text-sm">Upload</span>
                </button>
              </div>
              
              <button
                onClick={handlePost}
                disabled={!postText.trim()}
                className="flex items-center space-x-1 px-4 py-2 bg-earth-terracotta text-white rounded-lg hover:bg-earth-brown transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                <span className="text-sm">Post</span>
              </button>
            </div>
          </div>

          {/* Recent Posts Preview */}
          <div className="space-y-3">
            <h4 className="font-semibold text-earth-darkBrown">Recent Posts</h4>
            {[
              {
                text: "Just completed our tree planting initiative! 🌱 2,000 indigenous trees now growing strong in Kajiado County. The community's enthusiasm was incredible!",
                time: '2 hours ago',
                likes: 34,
                comments: 8
              },
              {
                text: "Solar panels are now operational at Kibera Community Center! ☀️ Clean energy powering education and community activities. #RenewableEnergy",
                time: '1 day ago',
                likes: 52,
                comments: 15
              }
            ].map((post, index) => (
              <div key={index} className="bg-earth-cream rounded-lg p-4">
                <p className="text-sm text-earth-darkBrown mb-2">{post.text}</p>
                <div className="flex items-center justify-between text-xs text-earth-olive">
                  <span>{post.time}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart size={12} />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={12} />
                      <span>{post.comments}</span>
                    </div>
                    <Share2 size={12} className="cursor-pointer hover:text-earth-brown" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Media Gallery */}
        <div className="space-y-4">
          <h3 className="font-semibold text-earth-darkBrown">Media Gallery</h3>
          <div className="grid grid-cols-2 gap-3">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group cursor-pointer rounded-lg overflow-hidden"
                onClick={() => setSelectedMedia(item.url)}
              >
                <div className="aspect-square bg-earth-cream">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Video Indicator */}
                {item.type === 'video' && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                    <Video size={12} className="text-white" />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium mb-1 truncate">{item.title}</p>
                    <div className="flex items-center space-x-3 text-xs text-white/80">
                      <div className="flex items-center space-x-1">
                        <Heart size={10} />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle size={10} />
                        <span>{item.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button
            onClick={handleMediaUpload}
            className="w-full py-3 border-2 border-dashed border-earth-tan rounded-lg text-earth-olive hover:border-earth-sage hover:text-earth-sage transition-colors flex items-center justify-center space-x-2"
          >
            <Upload size={16} />
            <span className="text-sm font-medium">Upload New Media</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CreativePanel;