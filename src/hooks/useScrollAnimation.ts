import { useEffect, useRef } from 'react';

interface ScrollAnimationConfig {
  threshold?: number; // 0-1, when animation starts (default: 0.1)
  rootMargin?: string; // Intersection Observer margin (default: "0px")
  startOffset?: number; // % into viewport when animation starts (0-1)
  endOffset?: number; // % into viewport when animation completes (0-1)
  easing?: 'cubic' | 'quart' | 'expo'; // Easing function to use (default: 'cubic')
}

interface ScrollAnimationReturn {
  ref: React.RefObject<HTMLDivElement>;
  progress: React.RefObject<number>;
  isInView: React.RefObject<boolean>;
}

// Easing functions for smooth professional animations
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// Clamp value between min and max
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function useScrollAnimation(
  config: ScrollAnimationConfig = {}
): ScrollAnimationReturn {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    startOffset = 0,
    endOffset = 1,
    easing = 'cubic',
  } = config;

  const ref = useRef<HTMLDivElement>(null);
  const progress = useRef<number>(0);
  const isInView = useRef<boolean>(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // Skip animations, show final state
      progress.current = 1;
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      return;
    }

    // Intersection Observer to detect when element enters viewport
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          isInView.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            // Start listening to scroll when element is in view
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll(); // Calculate initial position
          } else {
            // Stop listening when element leaves viewport
            window.removeEventListener('scroll', handleScroll);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // Scroll handler with requestAnimationFrame
    const handleScroll = () => {
      if (!ref.current || !isInView.current) return;

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        const rect = ref.current!.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate raw progress based on element position in viewport
        // 0 = element just entering bottom of viewport
        // 1 = element just exiting top of viewport
        const totalDistance = viewportHeight + rect.height;
        const currentPosition = viewportHeight - rect.top;
        const rawProgress = clamp(currentPosition / totalDistance, 0, 1);

        // Apply start/end offsets and easing
        const offsetProgress = clamp(
          (rawProgress - startOffset) / (endOffset - startOffset),
          0,
          1
        );
        const easingFunctions = {
          cubic: easeOutCubic,
          quart: easeOutQuart,
          expo: easeOutExpo,
        };
        progress.current = easingFunctions[easing](offsetProgress);
      });
    };

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [threshold, rootMargin, startOffset, endOffset]);

  return {
    ref,
    progress,
    isInView,
  };
}
