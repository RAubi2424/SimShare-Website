import { useScrollAnimation } from './useScrollAnimation';

interface StaggerConfig {
  index: number; // Item index in grid (0-based)
  staggerDelay: number; // Delay multiplier per item (e.g., 0.08 = 80ms)
  threshold?: number; // Passed to useScrollAnimation
  rootMargin?: string; // Passed to useScrollAnimation
}

interface StaggerAnimationReturn {
  ref: React.RefObject<HTMLDivElement>;
  progress: React.RefObject<number>;
  adjustedProgress: () => number; // Progress adjusted for stagger
  isInView: React.RefObject<boolean>;
}

// Clamp value between min and max
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function useScrollStagger(config: StaggerConfig): StaggerAnimationReturn {
  const { index, staggerDelay, threshold, rootMargin } = config;

  const { ref, progress, isInView } = useScrollAnimation({
    threshold,
    rootMargin,
  });

  // Calculate adjusted progress that accounts for stagger delay
  const adjustedProgress = (): number => {
    const baseProgress = progress.current ?? 0;

    // Each item's animation starts later based on its index
    // The delay is a fraction of the total progress range
    const delayFraction = index * staggerDelay;

    // Adjust progress so each item starts animating at a different point
    // If delay pushes past 1.0, clamp to 0
    const adjusted = clamp(
      (baseProgress - delayFraction) / (1 - delayFraction),
      0,
      1
    );

    return adjusted;
  };

  return {
    ref,
    progress,
    adjustedProgress,
    isInView,
  };
}
