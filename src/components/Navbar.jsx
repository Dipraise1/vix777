import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

const NavigationItem = ({ emoji, label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const emojiVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: [1, 1.2, 1.2, 1.2, 1],
      rotate: [0, -15, 15, -15, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <button
        onClick={onClick}
        className="p-3 rounded-xl flex items-center gap-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label={label}
      >
        <motion.span 
          className="text-2xl relative"
          variants={emojiVariants}
          animate={isHovered ? "hover" : "initial"}
        >
          {emoji}
          {isHovered && (
            <motion.span
              className="absolute -top-1 -right-1 text-xs"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              ✨
            </motion.span>
          )}
        </motion.span>
        <motion.span 
          className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-200"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.span>
      </button>
    </motion.div>
  );
};

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { emoji: '🐱', label: 'Home', onClick: () => {} },
    { emoji: '🍆', label: 'Search', onClick: () => {} },
    { emoji: '🍑', label: 'Notifications', onClick: () => {} },
  ];

  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const navVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1
      }
    }
  };

  const darkModeVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: 360,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            whileHover="hover"
            className="flex items-center gap-3"
          >
            <motion.img
              src="/5.webp"
              alt="VIX777 Logo"
              className="h-10 w-10 rounded-xl object-cover"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <motion.span 
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0%', '100%'],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              VIX777
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <NavigationItem key={item.label} {...item} />
            ))}
            <motion.button
              whileHover="hover"
              initial="initial"
              variants={darkModeVariants}
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              <motion.span className="text-2xl inline-block">
                {darkMode ? '🌞' : '🌙'}
              </motion.span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <CloseIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <MenuIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={navVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden"
            >
              <div className="space-y-1 pb-3 pt-2">
                {navItems.map((item) => (
                  <NavigationItem key={item.label} {...item} />
                ))}
                <motion.button
                  whileHover="hover"
                  initial="initial"
                  variants={darkModeVariants}
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-full p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
                >
                  <motion.span className="text-2xl">
                    {darkMode ? '🌞' : '🌙'}
                  </motion.span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;