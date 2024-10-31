import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Dice3, Rocket, TrendingUp, ChartLine } from 'lucide-react'

export default function Hero() {
  const [selectedImage, setSelectedImage] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  const heroImages = [
    "/12.webp",
    "/chart4.webp", 
    "/sticker1.webp",
    "/iii.webp"
  ]

  // 3D Gradient Balls
  const GradientBall = ({ color, size = 200, left, top, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ 
        opacity: [0.7, 1, 0.7], 
        scale: [0.5, 1.1, 0.9], 
        y: [50, 0, 25] 
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        delay: delay,
        ease: "easeInOut"
      }}
      style={{
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent 50%)`,
        filter: 'blur(100px)',
        zIndex: -1,
        left: left,
        top: top,
        opacity: 0.7
      }}
    />
  )

  // 3D Rotating Cube Component
  const VolatilityCube = () => {
    const cubeRef = useRef(null)

    return (
      <motion.div 
        ref={cubeRef}
        className="w-48 h-48 perspective-1000 mx-auto mb-8"
        animate={{
          rotateX: [0, 360, 0],
          rotateY: [0, 360, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full relative transform-style-3d">
          {/* Cube faces */}
          {['front', 'back', 'top', 'bottom', 'left', 'right'].map((face, index) => (
            <div
              key={face}
              className={`
                absolute w-48 h-48 flex items-center justify-center 
                text-2xl font-bold opacity-80 transition-all duration-300
                ${index % 2 === 0 ? 'bg-purple-500' : 'bg-blue-500'}
              `}
              style={{
                transform: 
                  face === 'front' ? 'translateZ(96px)' :
                  face === 'back' ? 'translateZ(-96px) rotateY(180deg)' :
                  face === 'top' ? 'rotateX(90deg) translateZ(96px)' :
                  face === 'bottom' ? 'rotateX(-90deg) translateZ(96px)' :
                  face === 'left' ? 'rotateY(-90deg) translateZ(96px)' :
                  'rotateY(90deg) translateZ(96px)',
                boxShadow: '0 0 20px rgba(0,0,0,0.2)'
              }}
            >
              <div className="text-white text-center">
                {face === 'front' && <Dice3 size={48} />}
                {face === 'back' && <ChartLine size={48} />}
                {face === 'top' && <Rocket size={48} />}
                {face === 'bottom' && <TrendingUp size={48} />}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900 to-blue-900"
    >
      {/* Background Gradient Balls */}
      <GradientBall color="rgba(128, 0, 255, 0.3)" size={400} left="-10%" top="10%" delay={0} />
      <GradientBall color="rgba(0, 0, 0, 0.2)" size={300} left="80%" top="30%" delay={1} />
      <GradientBall color="rgba(255, 255, 255, 0.2)" size={250} left="50%" top="70%" delay={2} />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* 3D Rotating Cube */}
      

        {/* Animated Headline */}
        <motion.h1 
          className="text-6xl md:text-7xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 drop-shadow-[0_5px_20px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            textShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          Unleash the Power of VIX: Market Volatility Decoded!
        </motion.h1>

        {/* Main Image Section */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.img
            key={selectedImage}
            src={heroImages[selectedImage]}
            alt={`VIX Visualization ${selectedImage + 1}`}
            className="rounded-3xl shadow-2xl w-full max-h-[500px] object-cover border-4 border-purple-500/30"
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 5 }}
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 90
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 30px 60px -15px rgba(128,0,255,0.4)"
            }}
          />

          {/* Image Navigation Dots */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {heroImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`
                  w-4 h-4 rounded-full 
                  ${selectedImage === index 
                    ? 'bg-purple-500 shadow-lg scale-150' 
                    : 'bg-gray-400 hover:bg-purple-300'}
                `}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Additional Image Grid */}
        <motion.div 
          className="mt-16 grid grid-cols-3 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
              }
            }
          }}
        >
          {heroImages.map((img, index) => (
            <motion.img
              key={img}
              src={img}
              alt={`VIX Thumbnail ${index + 1}`}
              className="rounded-lg shadow-lg hover:shadow-2xl cursor-pointer opacity-70 hover:opacity-100 transition-all transform-gpu"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 0.7, 
                  y: 0,
                  transition: { type: "spring", stiffness: 100 }
                }
              }}
              whileHover={{ 
                scale: 1.1,
                opacity: 1,
                rotateX: 10,
                rotateY: -10,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}