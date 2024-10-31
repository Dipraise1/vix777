import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dice3, Laugh, Zap } from 'lucide-react';

export default function About() {
  const containerRef = useRef(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const contractAddress = "0x283D480dFD6921055E9C335FC177bF8Cb9C94184";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const memeCards = [
    {
      icon: Dice3,
      title: "IF YOU SHOW ME YOUR VIX I'L SHOW YOU MINE ",
      description: "...",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Laugh,
      title: "Viral Vault",
      description: "HIGHER FOR LONGER ",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Zap,
      title: " I LOVE THE VIX ",
      description: "gwak!",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-meme-green/10 w-full text-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 animate-pulse">
            $VIX777
            </h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto">
            It is completely useless and fulfills no purpose or utility. Partaking in the community in any way has no expectation of profit and is done for entertainment purposes only.
            </p>

            <motion.div 
              className="flex justify-center items-center space-x-4 mb-16"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                className="text-lg bg-gray-800 py-3 px-6 rounded-full flex items-center space-x-2 cursor-pointer"
                onClick={copyToClipboard}
              >
                <span>Contract: {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}</span>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={copiedAddress ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ type: "spring" }}
                  className="text-green-400 ml-2"
                >
                  ✓ Copied!
                </motion.span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {memeCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 0.5, 
                    type: "spring" 
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className={`p-8 rounded-2xl bg-gradient-to-br ${card.color} shadow-2xl transform transition-all`}
                >
                  <card.icon 
                    size={64} 
                    className="mx-auto mb-6 text-white drop-shadow-lg"
                  />
                  <h3 className="text-3xl font-bold mb-4 text-white">{card.title}</h3>
                  <p className="text-white/80 text-lg">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}