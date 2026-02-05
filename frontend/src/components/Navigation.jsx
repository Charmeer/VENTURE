import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const navItems = [
    { name: 'Overview', href: '/' },
    { name: 'Problem', href: '/problem' },
    { name: 'Technology', href: '/technology' },
    { name: 'Process', href: '/process' },
    { name: 'Market', href: '/market' },
    { name: 'Investment', href: '/investment' },
    { name: 'Operations', href: '/operations' },
    { name: 'Revenue', href: '/revenue' },
    { name: 'Profitability', href: '/profitability' },
    { name: 'Risks', href: '/risks' },
    { name: 'Impact', href: '/impact' },
    { name: 'Next Steps', href: '/next-steps' },
    { name: 'Test', href: '/test' }
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-40 bg-white/90 backdrop-blur-sm transition-all duration-500 ${
          scrolled ? 'shadow-lg bg-white/95' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-green-700 flex items-center group">
            <motion.span 
              className="mr-2"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              🌱
            </motion.span>
            <span className="group-hover:text-green-600 transition-colors duration-300">Venture</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ease-out relative ${
                    location.pathname === item.href
                      ? 'text-green-700'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.span
                      className="absolute inset-0 bg-green-100 rounded-lg -z-10"
                      layoutId="navUnderline"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:ring-2 focus:ring-green-500 transition-colors duration-300"
            aria-label="Open menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* MOBILE MENU (always mounted for smooth animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lg:hidden bg-black/50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 150 }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full flex flex-col py-6">
                {/* Header */}
                <div className="px-4 flex items-center justify-between">
                  <motion.h2 
                    className="text-lg font-medium text-gray-900"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Menu
                  </motion.h2>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-300"
                    aria-label="Close menu"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Items */}
                <div className="mt-6 px-4 flex-1 overflow-y-auto overscroll-contain">
                  <nav className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + index * 0.05 }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-out relative ${
                            location.pathname === item.href
                              ? 'text-green-600'
                              : 'text-gray-700 hover:text-green-600'
                          }`}
                        >
                          {item.name}
                          {location.pathname === item.href && (
                            <motion.span
                              className="absolute inset-0 bg-green-50 rounded-lg -z-10"
                              layoutId="mobileNavUnderline"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;