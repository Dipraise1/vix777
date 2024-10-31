import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Zap, Laugh, Rocket } from 'lucide-react';

export default function MemeSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  const memeImages = [
    { 
      src: '/chart4.webp', 
      title: "Epic Meme Moment",
      description: "When memes hit just right 🔥",
      vibe: "Legendary",
      icon: Rocket
    },
    { 
      src: '/11.webp', 
      title: "Viral Vortex",
      description: "Meme that broke the internet 💥",
      vibe: "Insane",
      icon: Zap
    },
    { 
      src: '/12.webp', 
      title: "Laugh Factory",
      description: "Cannot stop laughing 😂",
      vibe: "Hilarious",
      icon: Laugh
    },
    { 
      src: '/sticker2.webp', 
      title: "Meme Magic",
      description: "Unexpected comedy gold 🌟",
      vibe: "Genius",
      icon: Play
    },
    { 
      src: '/iii.webp', 
      title: "Internet Treasure",
      description: "Meme hall of fame moment",
      vibe: "Classic",
      icon: Play
    },
    { 
      src: '/photo_2024-10-10_19-47-12.webp', 
      title: "Cultural Phenomenon",
      description: "Meme that defined an era",
      vibe: "Legendary",
      icon: Rocket
    },
    { 
      src: '/chart3.webp', 
      title: "Viral Sensation",
      description: "Everyone's favorite meme",
      vibe: "Epic",
      icon: Zap
    },
    { 
      src: '/600x200.webp', 
      title: "Meme Masterpiece",
      description: "Pure comedy perfection",
      vibe: "Supreme",
      icon: Laugh
    }
  ];

  return (
    <div 
      className="min-h-screen bg-black text-white relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, rgba(20,20,50,0.9), black 70%)'
      }}
    >
      <motion.div 
        ref={galleryRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600"
        >
          MEME UNIVERSE 🌈
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {memeImages.map((image, index) => (
            <motion.div
              key={index}
              layoutId={`image-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: index % 2 === 0 ? 3 : -3,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer aspect-square overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={image.src}
                alt={`Meme ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={`image-${memeImages.indexOf(selectedImage)}`}
              className="max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain"
              />
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 bg-black/70 p-6 text-white"
              >
                <div className="flex items-center space-x-4">
                  <selectedImage.icon size={40} className="text-green-400" />
                  <div>
                    <h3 className="text-3xl font-bold">{selectedImage.title}</h3>
                    <p className="text-xl text-gray-300">{selectedImage.description}</p>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full mt-2 inline-block">
                      {selectedImage.vibe}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}