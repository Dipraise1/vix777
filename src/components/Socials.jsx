import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Send, Globe } from 'lucide-react';

export default function Socials() {
  const socials = [
    { 
      name: 'Twitter', 
      emoji: '🐦',
      icon: Twitter,
      color: 'from-sky-400 to-blue-500',
      link: '#twitter'
    },
    { 
      name: 'Telegram', 
      emoji: '📱',
      icon: Send,
      color: 'from-blue-500 to-indigo-600',
      link: '#telegram'
    },
   
  ];

  return (
    <div 
      className="py-20 bg-black text-white"
      style={{
        background: 'radial-gradient(circle at center, rgba(20,20,50,0.9), black 70%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600"
        >
         
         🍆
         💦💦🐱 🍆
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 300
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: index % 2 === 0 ? 3 : -3
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative group overflow-hidden 
                rounded-3xl p-8 text-center 
                bg-gradient-to-br ${social.color} 
                shadow-2xl transform transition-all duration-300
              `}
            >
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <motion.div 
                className="relative z-10 flex flex-col items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    delay: 0.2 
                  }}
                  className="mb-4 p-4 bg-white/20 rounded-full"
                >
                  <social.icon 
                    size={48} 
                    className="text-white drop-shadow-lg"
                  />
                </motion.div>
                
                <span className="text-3xl mb-2 text-white drop-shadow-md">
                  {social.emoji}
                </span>
                
                <span className="text-2xl font-bold text-white drop-shadow-md">
                  {social.name}
                </span>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}