import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ImageSlider() {
  const images = [
    '/11.webp',
    '/12.webp',
    '/5.webp',
    '/sticker2.webp',
    '/iii.webp',
    '/photo_2024-10-10_19-47-12.webp',
    '/chart4.webp',
    '/chart3.webp',
    '/600x200.webp',
    '/ed30cc_684e35b41d894de3b276faa71075da3e~mv2.webp'
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <style jsx>{`
        @keyframes border-dance {
          0% {
            background-position: 0 0, 100% 0, 100% 100%, 0 100%;
          }
          100% {
            background-position: 100% 0, 100% 100%, 0 100%, 0 0;
          }
        }
        
        .animated-border {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background-image: 
            linear-gradient(90deg, #00ff00 50%, transparent 50%),
            linear-gradient(90deg, #00ff00 50%, transparent 50%),
            linear-gradient(0deg, #00ff00 50%, transparent 50%),
            linear-gradient(0deg, #00ff00 50%, transparent 50%);
          background-size: 10px 2px, 10px 2px, 2px 10px, 2px 10px;
          background-position: 0 0, 100% 0, 100% 100%, 0 100%;
          background-repeat: no-repeat;
          animation: border-dance 3s linear infinite;
          pointer-events: none;
          z-index: 10;
        }
      `}</style>
      
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="animated-border"></div>
      </div>
      
      <motion.div 
        className="flex"
        animate={{
          x: [0, -1 * (images.length * 100)],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        {[...images, ...images].map((src, index) => (
          <motion.div 
            key={index} 
            className="flex-shrink-0 w-screen h-[60vh] overflow-hidden relative"
          >
            <img 
              src={src} 
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}