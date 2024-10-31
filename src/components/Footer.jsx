import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white py-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(20,20,50,0.9), black 70%)',
          backgroundSize: '200% 200%'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-6 h-6 text-green-400" />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600">
              VIX777
            </h2>
            <Sparkles className="w-6 h-6 text-green-400" />
          </motion.div>

          <motion.div 
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Rocket className="w-8 h-8 text-green-400" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-3xl">🎮</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="w-8 h-8 text-green-400" />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-lg text-gray-300"
            whileHover={{ scale: 1.05 }}
          >
            © {new Date().getFullYear()} All rights reserved
          </motion.div>

          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-teal-500 to-green-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Animated background particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-green-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [-20, 20],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </footer>
  );
}