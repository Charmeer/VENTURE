import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingMenu = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: 'Overview', href: '/', icon: '🏠' },
    { name: 'Problem', href: '/problem', icon: '⚠️' },
    { name: 'Technology', href: '/technology', icon: '⚙️' },
    { name: 'Process', href: '/process', icon: '📝' },
    { name: 'Market', href: '/market', icon: '📈' },
    { name: 'Investment', href: '/investment', icon: '💰' },
    { name: 'Operations', href: '/operations', icon: '⚙️' },
    { name: 'Revenue', href: '/revenue', icon: '📊' },
    { name: 'Profitability', href: '/profitability', icon: '📈' },
    { name: 'Risks', href: '/risks', icon: '⚠️' },
    { name: 'Impact', href: '/impact', icon: '🌍' },
    { name: 'Next Steps', href: '/next-steps', icon: '⏭️' }
  ];

  // Handle scroll to hide/show menu
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide menu
        setIsVisible(false);
      } else {
        // Scrolling up - show menu
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      } 
    }
  };

  // For mobile screens, show the original navigation
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    return null; // Return null so the original navigation can be used
  }

  // Desktop version (floating menu)
  return (
    <AnimatePresence>
      <motion.div
        className="floating-menu-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/50 p-2 flex items-center space-x-1 max-w-[90vw] overflow-x-auto scrollbar-hide">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.href}
                  className={`flex flex-col items-center justify-center px-3 py-3 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                    location.pathname === item.href
                      ? 'text-green-700 bg-green-100 shadow-inner'
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-sm mb-1">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingMenu;