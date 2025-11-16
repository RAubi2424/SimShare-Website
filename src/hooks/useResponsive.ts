import { useState, useEffect } from 'react';

interface ResponsiveValues {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
}

export function useResponsive(): ResponsiveValues {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: screenWidth < 768,
    isTablet: screenWidth >= 768 && screenWidth < 1024,
    isDesktop: screenWidth >= 1024,
    screenWidth,
  };
}

// Helper function to get responsive value
export function getResponsiveValue<T>(
  mobile: T,
  tablet: T,
  desktop: T,
  screenWidth: number
): T {
  if (screenWidth < 768) return mobile;
  if (screenWidth < 1024) return tablet;
  return desktop;
}